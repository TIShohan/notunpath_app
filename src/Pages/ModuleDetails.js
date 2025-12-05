import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import moduleData from '../data/modules.json';

function ModuleDetails() {
  const { id } = useParams();
  const selectedModule = moduleData.find(item => item.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!selectedModule) {
    return (
      <div className="container" style={{
        minHeight: '60vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <h2 className="text-gradient">Module not found</h2>
        <Link to="/modules" className="btn btn-primary" style={{ marginTop: '20px' }}>
          Back to Modules
        </Link>
      </div>
    );
  }

  // Get color based on ID for dynamic feel
  const colors = ['#667eea', '#4facfe', '#ff9a9e', '#48bb78', '#ed8936'];
  const accentColor = colors[selectedModule.id % colors.length] || '#667eea';

  return (
    <div className="container" style={{ paddingBottom: '40px', minHeight: '100vh' }}>
      {/* Top Navigation */}
      <div style={{ padding: '20px 0' }}>
        <Link to="/modules" className="btn" style={{ background: 'white', color: '#666' }}>
          ← Back to Modules
        </Link>
      </div>

      {/* Hero Header */}
      <div className="glass-panel" style={{
        padding: 'clamp(20px, 5vw, 40px)',
        marginBottom: '30px',
        textAlign: 'center',
        background: `linear-gradient(135deg, ${accentColor}20 0%, rgba(255,255,255,0.8) 100%)`,
        borderLeft: `6px solid ${accentColor}`
      }}>
        <div style={{ fontSize: '4rem', marginBottom: '10px' }}>
          {getModuleIcon(selectedModule.title)}
        </div>
        <h1 className="text-gradient" style={{ marginBottom: '15px' }}>
          {selectedModule.title}
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#555', maxWidth: '700px', margin: '0 auto' }}>
          {selectedModule.description}
        </p>
      </div>

      {/* Content Area */}
      <div className="card-glass" style={{ padding: 'clamp(20px, 4vw, 30px)', minHeight: '40vh' }}>
        <div style={{
          fontSize: '1.1rem',
          lineHeight: '1.8',
          color: '#2d3748',
          whiteSpace: 'pre-line'
        }}>
          {selectedModule.content}
        </div>
      </div>

      {/* Footer Navigation */}
      <div style={{ marginTop: '30px', textAlign: 'center' }}>
        <Link to="/modules" className="btn btn-primary">
          Complete & Back to Modules
        </Link>
      </div>
    </div>
  );
}

function getModuleIcon(title) {
  const t = title.toLowerCase();
  if (t.includes('puberty') || t.includes('change')) return '🦋';
  if (t.includes('mental') || t.includes('stress')) return '🧠';
  if (t.includes('nutrition') || t.includes('food')) return '🥗';
  if (t.includes('hygiene')) return '✨';
  if (t.includes('social') || t.includes('relationship')) return '🤝';
  return '📚';
}

export default ModuleDetails;
