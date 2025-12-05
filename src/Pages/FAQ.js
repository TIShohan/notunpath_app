import React, { useState, useRef, useEffect } from "react";
import { sendMessageToGemini, isGeminiConfigured } from "../services/geminiService";
import { useAuth } from "../context/AuthContext";

function FAQ() {
  const [question, setQuestion] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null);
  const { userProfile } = useAuth();

  // Load chat history from localStorage on mount
  useEffect(() => {
    const savedHistory = localStorage.getItem('meloChat');
    if (savedHistory) {
      try {
        setChatHistory(JSON.parse(savedHistory));
      } catch (error) {
        console.error('Error loading chat history:', error);
        // If error, start with welcome message
        initializeWelcomeMessage();
      }
    } else {
      // No saved history, show welcome message
      initializeWelcomeMessage();
    }
  }, []);

  // Save chat history to localStorage whenever it changes
  useEffect(() => {
    if (chatHistory.length > 0) {
      localStorage.setItem('meloChat', JSON.stringify(chatHistory));
    }
  }, [chatHistory]);

  // Initialize welcome message
  const initializeWelcomeMessage = () => {
    const welcomeMessage = {
      type: "ai",
      text: `Hi ${userProfile?.name || 'there'}! 👋 I'm Melo, your friendly health companion! I'm here to help you with any questions about teen health, mental wellness, or anything you're curious about. Feel free to ask me anything! 😊`,
      timestamp: new Date().toLocaleTimeString()
    };
    setChatHistory([welcomeMessage]);
  };

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
        text: "Oops! Something went wrong on my end. Could you try asking again? 🙏",
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
    localStorage.removeItem('meloChat');
    const welcomeMessage = {
      type: "ai",
      text: `Hi ${userProfile?.name || 'there'}! 👋 I'm Melo, your friendly health companion! I'm here to help you with any questions about teen health, mental wellness, or anything you're curious about. Feel free to ask me anything! 😊`,
      timestamp: new Date().toLocaleTimeString()
    };
    setChatHistory([welcomeMessage]);
  };

  return (
    <div style={{
      maxWidth: 800,
      margin: "20px auto",
      padding: 20,
      fontFamily: "Inter, Arial, sans-serif",
      height: 'calc(100vh - 120px)',
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* Header with Melo Character */}
      <div style={{
        textAlign: 'center',
        marginBottom: 20,
        paddingBottom: 20,
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        borderRadius: '20px',
        padding: '30px',
        color: 'white',
        boxShadow: '0 8px 32px rgba(102, 126, 234, 0.3)'
      }}>
        {/* Melo Avatar */}
        <div style={{
          width: '100px',
          height: '100px',
          margin: '0 auto 15px',
          background: 'white',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '3.5em',
          boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
          animation: 'bounce 2s infinite'
        }}>
          🤗
        </div>

        <h1 style={{
          margin: '0 0 10px 0',
          fontSize: '2.5em',
          fontWeight: 'bold',
          textShadow: '2px 2px 4px rgba(0,0,0,0.2)'
        }}>
          Melo
        </h1>

        <p style={{
          fontSize: '1.1em',
          margin: '5px 0',
          opacity: 0.95
        }}>
          Your Friendly Health Companion 💙
        </p>

        <p style={{
          fontSize: '0.9em',
          margin: '10px 0 0 0',
          opacity: 0.85,
          fontStyle: 'italic'
        }}>
          {userProfile ? `Hey ${userProfile.name}! ` : ''}Ask me anything - I'm here to help! 😊
        </p>

        {!isGeminiConfigured() && (
          <div style={{
            background: 'rgba(255,255,255,0.2)',
            backdropFilter: 'blur(10px)',
            border: '2px solid rgba(255,255,255,0.3)',
            borderRadius: 12,
            padding: 12,
            marginTop: 15,
            fontSize: '0.9em'
          }}>
            ⚠️ Melo needs configuration. Please add your Gemini API key to .env file.
          </div>
        )}
      </div>

      {/* Chat History */}
      <div style={{
        flex: 1,
        overflowY: 'auto',
        marginBottom: 15,
        padding: '15px',
        background: '#f8f9fa',
        borderRadius: '15px',
        minHeight: 300
      }}>
        {chatHistory.map((msg, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              justifyContent: msg.type === 'user' ? 'flex-end' : 'flex-start',
              marginBottom: 16,
              animation: 'slideIn 0.3s ease-out'
            }}
          >
            {/* Melo Avatar for AI messages */}
            {msg.type === 'ai' && (
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5em',
                marginRight: '10px',
                flexShrink: 0
              }}>
                🤗
              </div>
            )}

            <div style={{
              maxWidth: '70%',
              padding: '14px 18px',
              borderRadius: msg.type === 'user'
                ? '20px 20px 5px 20px'
                : '20px 20px 20px 5px',
              background: msg.type === 'user'
                ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                : 'white',
              color: msg.type === 'user' ? 'white' : '#333',
              boxShadow: msg.type === 'user'
                ? '0 4px 15px rgba(102, 126, 234, 0.3)'
                : '0 2px 10px rgba(0,0,0,0.1)',
              wordWrap: 'break-word'
            }}>
              <div style={{ fontSize: '0.95em', lineHeight: 1.6 }}>
                {msg.text}
              </div>
              <div style={{
                fontSize: '0.7em',
                marginTop: 6,
                opacity: 0.7,
                textAlign: 'right'
              }}>
                {msg.timestamp}
              </div>
            </div>

            {/* User Avatar */}
            {msg.type === 'user' && (
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5em',
                marginLeft: '10px',
                flexShrink: 0
              }}>
                👤
              </div>
            )}
          </div>
        ))}

        {loading && (
          <div style={{
            display: 'flex',
            justifyContent: 'flex-start',
            marginBottom: 16,
            alignItems: 'center'
          }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.5em',
              marginRight: '10px'
            }}>
              🤗
            </div>
            <div style={{
              padding: '14px 18px',
              borderRadius: '20px 20px 20px 5px',
              background: 'white',
              color: '#666',
              boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
            }}>
              <span className="typing-indicator">Melo is thinking</span>
              <span className="dots">...</span>
            </div>
          </div>
        )}
        <div ref={chatEndRef} />
      </div>

      {/* Input Area */}
      <div style={{
        background: 'white',
        borderRadius: '20px',
        padding: '15px',
        boxShadow: '0 -2px 20px rgba(0,0,0,0.1)'
      }}>
        <div style={{ display: 'flex', gap: 10, alignItems: 'flex-end' }}>
          <textarea
            rows={2}
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message to Melo... (Press Enter to send) 💬"
            disabled={loading}
            style={{
              flex: 1,
              padding: 14,
              fontSize: 15,
              borderRadius: 15,
              border: '2px solid #e0e0e0',
              resize: 'none',
              fontFamily: 'inherit',
              outline: 'none',
              transition: 'all 0.3s',
              opacity: loading ? 0.6 : 1,
              background: '#f8f9fa'
            }}
            onFocus={(e) => {
              e.target.style.borderColor = '#667eea';
              e.target.style.background = 'white';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = '#e0e0e0';
              e.target.style.background = '#f8f9fa';
            }}
          />
          <button
            onClick={handleAsk}
            disabled={loading || !question.trim()}
            style={{
              padding: "14px 28px",
              fontSize: 16,
              fontWeight: 'bold',
              borderRadius: 15,
              border: 'none',
              background: loading || !question.trim()
                ? '#ccc'
                : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              cursor: loading || !question.trim() ? 'not-allowed' : 'pointer',
              transition: 'all 0.3s',
              boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)',
              height: 52
            }}
            onMouseEnter={(e) => {
              if (!loading && question.trim()) {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 6px 20px rgba(102, 126, 234, 0.4)';
              }
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.3)';
            }}
          >
            {loading ? '⏳' : '📤'}
          </button>
        </div>

        {chatHistory.length > 1 && (
          <button
            onClick={clearChat}
            style={{
              marginTop: 10,
              padding: '8px 16px',
              fontSize: 13,
              borderRadius: 10,
              border: '2px solid #667eea',
              background: 'white',
              color: '#667eea',
              cursor: 'pointer',
              transition: 'all 0.3s',
              fontWeight: 'bold'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = '#667eea';
              e.target.style.color = 'white';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'white';
              e.target.style.color = '#667eea';
            }}
          >
            🔄 Start New Chat
          </button>
        )}
      </div>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .dots {
          animation: blink 1.4s infinite;
        }
      `}</style>
    </div>
  );
}

export default FAQ;
