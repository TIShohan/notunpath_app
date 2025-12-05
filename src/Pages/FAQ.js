import React, { useState, useRef, useEffect } from "react";
import { sendMessageToGemini, isGeminiConfigured } from "../services/geminiService";
import { useAuth } from "../context/AuthContext";

function FAQ() {
  const [question, setQuestion] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null);
  const { userProfile } = useAuth();

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatHistory]);

  const handleAsk = async () => {
    if (!question.trim()) return;

    const userQuestion = question.trim();
    setQuestion(""); // Clear input immediately

    // Add user message to chat
    const userMessage = {
      type: "user",
      text: userQuestion,
      timestamp: new Date().toLocaleTimeString()
    };
    setChatHistory(prev => [...prev, userMessage]);

    setLoading(true);

    try {
      // Get AI response
      const aiResponse = await sendMessageToGemini(userQuestion);

      // Add AI response to chat
      const aiMessage = {
        type: "ai",
        text: aiResponse,
        timestamp: new Date().toLocaleTimeString()
      };
      setChatHistory(prev => [...prev, aiMessage]);

    } catch (error) {
      console.error("Error fetching AI response:", error);

      const errorMessage = {
        type: "ai",
        text: "⚠️ Something went wrong. Please try again.",
        timestamp: new Date().toLocaleTimeString()
      };
      setChatHistory(prev => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleAsk();
    }
  };

  const clearChat = () => {
    setChatHistory([]);
  };

  return (
    <div style={{
      maxWidth: 700,
      margin: "20px auto",
      padding: 20,
      fontFamily: "Inter, Arial, sans-serif",
      height: 'calc(100vh - 120px)',
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* Header */}
      <div style={{
        textAlign: 'center',
        marginBottom: 20,
        paddingBottom: 15,
        borderBottom: '2px solid #90caf9'
      }}>
        <h2 style={{
          margin: 0,
          color: '#1976d2',
          fontSize: '1.8em'
        }}>
          🤖 AI Health Buddy
        </h2>
        <p style={{
          color: '#666',
          fontSize: '0.95em',
          margin: '8px 0 0 0'
        }}>
          {userProfile ? `Hi ${userProfile.name}! ` : ''}Ask me anything about teen health, puberty, mental wellness, or relationships
        </p>
        {!isGeminiConfigured() && (
          <div style={{
            background: '#fff3cd',
            border: '1px solid #ffc107',
            borderRadius: 8,
            padding: 10,
            marginTop: 10,
            fontSize: '0.9em',
            color: '#856404'
          }}>
            ⚠️ AI service not configured. Please add your Gemini API key to .env file.
          </div>
        )}
      </div>

      {/* Chat History */}
      <div style={{
        flex: 1,
        overflowY: 'auto',
        marginBottom: 15,
        padding: '10px 0',
        minHeight: 300
      }}>
        {chatHistory.length === 0 ? (
          <div style={{
            textAlign: 'center',
            color: '#999',
            padding: '40px 20px',
            fontSize: '0.95em'
          }}>
            <p style={{ fontSize: '3em', margin: 0 }}>💬</p>
            <p>Start a conversation! Ask me anything about:</p>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              marginTop: 15,
              lineHeight: 1.8
            }}>
              <li>🧠 Mental health & stress</li>
              <li>🌱 Puberty & body changes</li>
              <li>💙 Relationships & friendships</li>
              <li>📱 Social media & peer pressure</li>
              <li>✨ Self-esteem & confidence</li>
            </ul>
          </div>
        ) : (
          <>
            {chatHistory.map((msg, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  justifyContent: msg.type === 'user' ? 'flex-end' : 'flex-start',
                  marginBottom: 12
                }}
              >
                <div style={{
                  maxWidth: '75%',
                  padding: '12px 16px',
                  borderRadius: msg.type === 'user' ? '18px 18px 4px 18px' : '18px 18px 18px 4px',
                  background: msg.type === 'user'
                    ? 'linear-gradient(135deg, #1976d2 0%, #64b5f6 100%)'
                    : 'linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)',
                  color: msg.type === 'user' ? 'white' : '#222',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  wordWrap: 'break-word'
                }}>
                  <div style={{ fontSize: '0.95em', lineHeight: 1.5 }}>
                    {msg.text}
                  </div>
                  <div style={{
                    fontSize: '0.75em',
                    marginTop: 6,
                    opacity: 0.7,
                    textAlign: 'right'
                  }}>
                    {msg.timestamp}
                  </div>
                </div>
              </div>
            ))}
            {loading && (
              <div style={{
                display: 'flex',
                justifyContent: 'flex-start',
                marginBottom: 12
              }}>
                <div style={{
                  padding: '12px 16px',
                  borderRadius: '18px 18px 18px 4px',
                  background: 'linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)',
                  color: '#666'
                }}>
                  <span className="typing-indicator">AI is typing</span>
                  <span className="dots">...</span>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </>
        )}
      </div>

      {/* Input Area */}
      <div style={{
        borderTop: '2px solid #e3f2fd',
        paddingTop: 15
      }}>
        <div style={{ display: 'flex', gap: 10, alignItems: 'flex-end' }}>
          <textarea
            rows={2}
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your question here... (Press Enter to send)"
            disabled={loading}
            style={{
              flex: 1,
              padding: 12,
              fontSize: 15,
              borderRadius: 12,
              border: '2px solid #90caf9',
              resize: 'none',
              fontFamily: 'inherit',
              outline: 'none',
              transition: 'border-color 0.3s',
              opacity: loading ? 0.6 : 1
            }}
            onFocus={(e) => e.target.style.borderColor = '#1976d2'}
            onBlur={(e) => e.target.style.borderColor = '#90caf9'}
          />
          <button
            onClick={handleAsk}
            disabled={loading || !question.trim()}
            style={{
              padding: "12px 24px",
              fontSize: 16,
              fontWeight: 'bold',
              borderRadius: 12,
              border: 'none',
              background: loading || !question.trim()
                ? '#ccc'
                : 'linear-gradient(90deg, #64b5f6 0%, #1976d2 100%)',
              color: 'white',
              cursor: loading || !question.trim() ? 'not-allowed' : 'pointer',
              transition: 'all 0.3s',
              boxShadow: '0 2px 8px rgba(25, 118, 210, 0.3)',
              height: 48
            }}
          >
            {loading ? '⏳' : '📤 Send'}
          </button>
        </div>

        {chatHistory.length > 0 && (
          <button
            onClick={clearChat}
            style={{
              marginTop: 10,
              padding: '6px 14px',
              fontSize: 13,
              borderRadius: 8,
              border: '1px solid #f44336',
              background: 'white',
              color: '#f44336',
              cursor: 'pointer',
              transition: 'all 0.3s'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = '#f44336';
              e.target.style.color = 'white';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'white';
              e.target.style.color = '#f44336';
            }}
          >
            🗑️ Clear Chat
          </button>
        )}
      </div>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        .dots {
          animation: blink 1.4s infinite;
        }
      `}</style>
    </div>
  );
}

export default FAQ;
