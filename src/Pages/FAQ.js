import React, { useState, useRef, useEffect } from "react";
import { sendMessageToGemini, isGeminiConfigured } from "../services/geminiService";
import { useAuth } from "../context/AuthContext";

function FAQ() {
  const { userProfile } = useAuth();
  const [question, setQuestion] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    const savedHistory = localStorage.getItem('meloChat');
    if (savedHistory) {
      try {
        setChatHistory(JSON.parse(savedHistory));
      } catch (error) {
        console.error('Error loading chat history:', error);
        initializeWelcomeMessage();
      }
    } else {
      initializeWelcomeMessage();
    }
  }, []);

  useEffect(() => {
    if (chatHistory.length > 0) {
      localStorage.setItem('meloChat', JSON.stringify(chatHistory));
    }
    scrollToBottom();
  }, [chatHistory]);

  // Prevent body scroll on mobile
  useEffect(() => {
    // Save original body overflow
    const originalOverflow = document.body.style.overflow;
    const originalPosition = document.body.style.position;

    // Prevent body scroll
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.width = '100%';

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.position = originalPosition;
      document.body.style.width = '';
    };
  }, []);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const initializeWelcomeMessage = () => {
    const welcomeMessage = {
      type: "ai",
      text: `Hi ${userProfile?.name || 'there'}! 👋 I'm Melo, your friendly health companion! I'm here to help you with any questions about teen health, mental wellness, or anything you're curious about. Feel free to ask me anything! 😊`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setChatHistory([welcomeMessage]);
  };

  const handleAsk = async () => {
    if (!question.trim()) return;
    const userQuestion = question.trim();
    setQuestion("");

    const userMessage = {
      type: "user",
      text: userQuestion,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setChatHistory(prev => [...prev, userMessage]);
    setLoading(true);

    try {
      const aiResponse = await sendMessageToGemini(userQuestion);
      const aiMessage = {
        type: "ai",
        text: aiResponse,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setChatHistory(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error("Error fetching AI response:", error);
      const errorMessage = {
        type: "ai",
        text: "Oops! Something went wrong on my end. Could you try asking again? 🙏",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setChatHistory(prev => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  const clearChat = () => {
    localStorage.removeItem('meloChat');
    initializeWelcomeMessage();
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleAsk();
    }
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      position: 'fixed',
      top: '70px',
      left: 0,
      right: 0,
      bottom: 0,
      maxWidth: '1000px',
      margin: '0 auto',
      zIndex: 5
    }}>

      {/* Chat Header */}
      <div style={{
        padding: '10px 20px',
        background: 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(0,0,0,0.05)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        zIndex: 10
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{
            width: '40px',
            height: '40px',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.5rem',
            boxShadow: '0 2px 10px rgba(102, 126, 234, 0.4)'
          }}>
            🤗
          </div>
          <div>
            <h2 style={{ margin: 0, fontSize: '1.1rem' }}>Melo</h2>
            <div style={{ fontSize: '0.8rem', color: '#48bb78', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <span style={{ width: 8, height: 8, background: '#48bb78', borderRadius: '50%', display: 'inline-block' }}></span>
              Online
            </div>
          </div>
        </div>

        <button
          onClick={clearChat}
          style={{
            background: 'transparent',
            border: '1px solid #e2e8f0',
            padding: '6px 12px',
            borderRadius: '20px',
            fontSize: '0.8rem',
            color: '#718096',
            cursor: 'pointer'
          }}
        >
          Clear Chat
        </button>
      </div>

      {/* Chat Area */}
      <div style={{
        flex: 1,
        overflowY: 'auto',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        scrollBehavior: 'smooth'
      }}>
        {chatHistory.map((msg, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: msg.type === 'user' ? 'flex-end' : 'flex-start',
              maxWidth: '85%',
              alignSelf: msg.type === 'user' ? 'flex-end' : 'flex-start',
              animation: 'fadeIn 0.3s ease-out'
            }}
          >
            <div style={{
              padding: '12px 18px',
              borderRadius: '18px',
              borderBottomLeftRadius: msg.type === 'ai' ? '4px' : '18px',
              borderBottomRightRadius: msg.type === 'user' ? '4px' : '18px',
              background: msg.type === 'user'
                ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                : 'white',
              color: msg.type === 'user' ? 'white' : '#2d3748',
              boxShadow: msg.type === 'user'
                ? '0 4px 12px rgba(102, 126, 234, 0.3)'
                : '0 2px 8px rgba(0,0,0,0.05)',
              lineHeight: '1.5',
              fontSize: '1rem'
            }}>
              {msg.text}
            </div>
            <span style={{
              fontSize: '0.7rem',
              color: '#a0aec0',
              marginTop: '5px',
              marginRight: '5px',
              marginLeft: '5px'
            }}>
              {msg.timestamp}
            </span>
          </div>
        ))}

        {loading && (
          <div style={{
            alignSelf: 'flex-start',
            background: 'white',
            padding: '12px 20px',
            borderRadius: '18px',
            borderBottomLeftRadius: '4px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
            display: 'flex',
            gap: '5px'
          }}>
            <span className="dot" style={{ animationDelay: '0s' }}>●</span>
            <span className="dot" style={{ animationDelay: '0.2s' }}>●</span>
            <span className="dot" style={{ animationDelay: '0.4s' }}>●</span>
          </div>
        )}
        <div ref={chatEndRef} />
      </div>

      {/* Input Area */}
      <div style={{
        padding: '15px 20px',
        background: 'white',
        borderTop: '1px solid #edf2f7',
      }}>
        <div style={{
          display: 'flex',
          gap: '10px',
          background: '#f7fafc',
          padding: '5px',
          borderRadius: '25px',
          border: '1px solid #e2e8f0',
          alignItems: 'center'
        }}>
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask Melo anything..."
            disabled={loading}
            style={{
              flex: 1,
              border: 'none',
              background: 'transparent',
              padding: '12px 15px',
              outline: 'none',
              fontSize: '1rem',
              color: '#2d3748'
            }}
          />
          <button
            onClick={handleAsk}
            disabled={loading || !question.trim()}
            style={{
              background: loading || !question.trim() ? '#cbd5e0' : 'var(--primary)',
              color: 'white',
              border: 'none',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: loading || !question.trim() ? 'default' : 'pointer',
              transition: 'all 0.2s',
              marginRight: '5px'
            }}
          >
            <span style={{ fontSize: '1.2rem', marginLeft: '2px' }}>➤</span>
          </button>
        </div>
        {!isGeminiConfigured() && (
          <p style={{ color: 'red', fontSize: '0.8rem', textAlign: 'center', marginTop: '5px' }}>
            Setup Required: Add REACT_APP_GEMINI_API_KEY to .env
          </p>
        )}
      </div>

      <style>{`
        .dot {
          animation: bounce 1s infinite;
          color: #a0aec0; /* var(--text-secondary) */
          font-size: 0.8rem;
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(5px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

export default FAQ;
