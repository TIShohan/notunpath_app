import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

function Home() {
  const { userProfile } = useAuth();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="container" style={{
      paddingTop: '40px',
      paddingBottom: '40px',
      opacity: isVisible ? 1 : 0,
      transition: 'opacity 0.8s ease'
    }}>
      {/* Hero Section */}
      <div
        className="glass-panel"
        style={{
          padding: '50px 30px',
          textAlign: 'center',
          marginBottom: '50px',
          position: 'relative',
          overflow: 'hidden',
          animation: 'slideUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)'
        }}
      >
        {/* Background Decorative Blob */}
        <div style={{
          position: 'absolute',
          top: '-50%',
          left: '50%',
          transform: 'translate(-50%, 0)',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(102,126,234,0.15) 0%, rgba(255,255,255,0) 70%)',
          borderRadius: '50%',
          zIndex: 0,
          pointerEvents: 'none'
        }} />

        <div style={{ position: 'relative', zIndex: 1 }}>
          <img
            src="/images/Friendly Doctor.png"
            alt="Notun Poth Mascot"
            className="animate-float"
            style={{
              width: '120px',
              height: '120px',
              objectFit: 'contain',
              marginBottom: '20px',
              filter: 'drop-shadow(0 10px 15px rgba(102, 126, 234, 0.3))'
            }}
          />

          <h1 style={{ marginBottom: '10px' }}>
            Welcome to <span className="text-gradient">Notun Poth</span>
          </h1>

          {userProfile && (
            <h3 style={{
              color: 'var(--text-secondary)',
              fontWeight: '500',
              fontSize: '1.25rem'
            }}>
              Hi, <span style={{ color: 'var(--primary)', fontWeight: '700' }}>{userProfile.name}</span>! 👋
            </h3>
          )}

          <p style={{
            fontSize: '1.15rem',
            maxWidth: '600px',
            margin: '20px auto 30px',
            lineHeight: '1.7'
          }}>
            Your safe space for adolescent heath, mental wellness, and personal growth.
            We're here to guide you every step of the way.
          </p>

          <Link to="/modules" className="btn btn-primary" style={{ padding: '14px 36px', fontSize: '1.1rem' }}>
            Start Your Journey 🚀
          </Link>
        </div>
      </div>

      {/* Quick Actions Grid */}
      <h2 className="text-center" style={{ marginBottom: '30px' }}>Explore the App</h2>

      <div className="grid grid-2" style={{
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: '25px',
        marginBottom: '60px'
      }}>
        <QuickActionCard
          icon="📚"
          title="Learning Modules"
          description="Interactive lessons on health, mind, and body."
          link="/modules"
          color="linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)"
          delay="0.1s"
        />
        <QuickActionCard
          icon="💬"
          title="Chat with Melo"
          description="Your confidential AI buddy. Ask anything, anytime."
          link="/faq"
          color="linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)"
          delay="0.2s"
        />
        <QuickActionCard
          icon="🩺"
          title="Consultation"
          description="Connect with professional doctors anonymously."
          link="/consultation"
          color="linear-gradient(135deg, #fccb90 0%, #d57eeb 100%)"
          delay="0.3s"
        />
        <QuickActionCard
          icon="👨‍👩‍👧"
          title="For Parents"
          description="Guides to help you support your teenager better."
          link="/parents"
          color="linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)"
          delay="0.4s"
        />
      </div>

      {/* Features List */}
      <div className="glass-panel" style={{ padding: '40px' }}>
        <h2 className="text-center" style={{ marginBottom: '40px' }}>
          What You'll Learn
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '20px'
        }}>
          <FeatureItem icon="🧠" text="Mental Health Mastery" />
          <FeatureItem icon="🌱" text="Puberty & Growing Up" />
          <FeatureItem icon="🤝" text="Building Healthy Relationships" />
          <FeatureItem icon="🛡️" text="Social Media Safety" />
          <FeatureItem icon="✨" text="Boosting Self-Esteem" />
          <FeatureItem icon="⚖️" text="Gender & Respect" />
        </div>
      </div>
    </div>
  );
}

// Quick Action Card Component
function QuickActionCard({ icon, title, description, link, color, delay }) {
  return (
    <Link to={link} style={{ textDecoration: 'none' }}>
      <div
        className="card-glass"
        style={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          animation: `slideUp 0.6s ease-out ${delay} backwards`,
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Soft colorful glow at the top */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '6px',
          background: color
        }} />

        <div style={{
          fontSize: '3.5rem',
          marginBottom: '15px',
          background: color,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
        }}>
          {icon}
        </div>

        <h3 style={{
          color: 'var(--text-primary)',
          margin: '0 0 10px 0',
          fontSize: '1.3rem'
        }}>
          {title}
        </h3>

        <p style={{ margin: 0, fontSize: '0.95rem' }}>
          {description}
        </p>
      </div>
    </Link>
  );
}

// Feature Item Component
function FeatureItem({ icon, text }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      padding: '16px',
      background: 'white',
      borderRadius: '12px',
      boxShadow: '0 2px 5px rgba(0,0,0,0.03)',
      transition: 'transform 0.3s ease'
    }}
      onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-3px)'}
      onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
    >
      <span style={{
        fontSize: '1.5rem',
        marginRight: '15px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '40px',
        height: '40px',
        background: 'var(--background)',
        borderRadius: '50%'
      }}>
        {icon}
      </span>
      <span style={{ fontWeight: '500', color: 'var(--text-primary)' }}>{text}</span>
    </div>
  );
}

export default Home;
