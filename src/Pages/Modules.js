import React from 'react';
import { Link } from 'react-router-dom';
import moduleData from '../data/modules.json';

function Modules() {
  return (
    <div className="container" style={{ paddingBottom: '40px' }}>
      {/* Hero Section */}
      <div className="glass-panel" style={{
        marginTop: '20px',
        marginBottom: '40px',
        padding: '40px 20px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Background Decorative */}
        <div style={{
          position: 'absolute',
          top: '-20%',
          right: '-10%',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(161, 140, 209, 0.2) 0%, rgba(255,255,255,0) 70%)',
          borderRadius: '50%',
          zIndex: 0
        }} />

        <div style={{ position: 'relative', zIndex: 1 }}>
          <img
            src="/images/calming illustration.png"
            alt="Mental Wellness"
            className="animate-float"
            style={{
              width: '180px',
              height: '180px',
              objectFit: 'contain',
              marginBottom: '20px',
              filter: 'drop-shadow(0 8px 16px rgba(100, 100, 200, 0.2))'
            }}
          />
          <h1 className="text-gradient" style={{ marginBottom: '10px' }}>Learning Modules</h1>
          <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
            Explore our curated guides on health, mind, and growing up.
            Choose a topic below to start learning! 🎓
          </p>
        </div>
      </div>

      {/* Modules Grid */}
      <div className="grid grid-2" style={{
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '25px'
      }}>
        {moduleData.map((item, index) => (
          <div
            className="card-glass"
            key={item.id}
            style={{
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              animation: `fadeIn 0.5s ease-out ${index * 0.1}s backwards`,
              borderTop: `4px solid ${getModuleColor(index)}`
            }}
          >
            <div style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '15px'
            }}>
              <span style={{
                fontSize: '1.8rem',
                marginRight: '12px',
                background: 'var(--background)',
                width: '50px',
                height: '50px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '12px'
              }}>
                {getModuleIcon(item.id)}
              </span>
              <h2 style={{ fontSize: '1.4rem', margin: 0, color: 'var(--text-primary)' }}>
                {item.title}
              </h2>
            </div>

            <p style={{
              flex: 1,
              color: 'var(--text-secondary)',
              fontSize: '0.95rem',
              marginBottom: '20px',
              lineHeight: '1.6'
            }}>
              {item.description}
            </p>

            <Link
              to={`/modules/${item.id}`}
              className="btn"
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--primary)',
                color: 'var(--primary)',
                width: '100%',
                borderRadius: '12px',
                fontWeight: '600'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'var(--primary)';
                e.target.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'var(--surface)';
                e.target.style.color = 'var(--primary)';
              }}
            >
              Start Module →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

// Helper to assign colors based on index for variety
function getModuleColor(index) {
  const colors = [
    '#667eea', // Violet
    '#48bb78', // Green
    '#ed8936', // Orange
    '#f56565', // Red
    '#4dc9e6', // Cyan
    '#9f7aea', // Purple
  ];
  return colors[index % colors.length];
}

// Helper to assign icons (fallback if not in data)
function getModuleIcon(id) {
  const icons = {
    1: '🧠',
    2: '🌱',
    3: '🤝',
    4: '📱',
    5: '✨',
    6: '⚖️',
    default: '📚'
  };
  return icons[id] || icons.default;
}

export default Modules;
