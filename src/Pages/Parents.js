import React from 'react';
import parentTips from '../data/parents.json';

function Parents() {
  return (
    <div className="container" style={{ paddingBottom: '40px' }}>
      {/* Hero Section */}
      <div className="glass-panel" style={{
        marginTop: '20px',
        marginBottom: '40px',
        padding: '40px 20px',
        textAlign: 'center',
        background: 'rgba(255, 255, 255, 0.8)',
        border: '1px solid rgba(237, 137, 54, 0.2)'
      }}>
        <img
          src="/images/Friends Group.png"
          alt="Teen Friendship"
          className="animate-slide-up"
          style={{
            width: '280px',
            maxHeight: '220px',
            objectFit: 'contain',
            marginBottom: '25px',
            filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.1))'
          }}
        />
        <h1 style={{
          marginBottom: '15px',
          background: 'linear-gradient(135deg, #ed8936 0%, #ed64a6 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          Guidance for Parents 👨‍👩‍👧‍👦
        </h1>
        <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem' }}>
          Raising a teenager can be challenging. Here are some tips to help you foster
          a healthy, open, and supportive relationship with your child.
        </p>
      </div>

      {/* Content List */}
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        {parentTips.map((item, index) => (
          <div
            className="card-glass"
            key={item.id}
            style={{
              marginBottom: '25px',
              borderLeft: '5px solid #ed8936',
              animation: `slideUp 0.6s ease-out ${index * 0.1}s backwards`,
              padding: '30px'
            }}
          >
            <div style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '15px'
            }}>
              <span style={{
                fontSize: '1.5rem',
                color: '#ed8936',
                background: '#fffaf0',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '50%',
                marginRight: '15px',
                fontWeight: 'bold'
              }}>
                {index + 1}
              </span>
              <h3 style={{
                margin: 0,
                color: '#2d3748',
                fontSize: '1.3rem'
              }}>
                {item.title}
              </h3>
            </div>

            <div style={{
              color: '#4a5568',
              lineHeight: '1.8',
              fontSize: '1.05rem',
              paddingLeft: '55px'
            }}>
              {item.content}
            </div>
          </div>
        ))}
      </div>

      {/* Note for Parents */}
      <div className="card" style={{
        marginTop: '40px',
        textAlign: 'center',
        background: '#ebf8ff',
        border: 'none',
        color: '#2c5282'
      }}>
        <p style={{ margin: 0, fontWeight: '500' }}>
          💡 Remember: Every child is unique. Use these tips as a guide, but trust your instincts as a parent.
        </p>
      </div>
    </div>
  );
}

export default Parents;
