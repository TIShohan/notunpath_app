import React from 'react';

function About() {
  return (
    <div className="container" style={{ paddingBottom: '40px' }}>
      {/* Header */}
      <div className="glass-panel" style={{
        marginTop: '20px',
        marginBottom: '40px',
        padding: '50px 20px',
        textAlign: 'center',
        background: 'rgba(255, 255, 255, 0.8)'
      }}>
        <h1 className="text-gradient" style={{ fontSize: '3rem', marginBottom: '10px' }}>
          নতুনপথ
        </h1>
        <p style={{
          fontSize: '1.4rem',
          color: 'var(--primary)',
          fontWeight: '600',
          margin: 0
        }}>
          কিশোর-কিশোরীদের স্বাস্থ্য সচেতনতার নতুন দিশা
        </p>
      </div>

      <div className="grid grid-2" style={{ gap: '30px' }}>
        {/* Mission Section */}
        <div className="card-glass" style={{ borderLeft: '5px solid var(--primary)' }}>
          <h2 style={{ color: 'var(--primary)', display: 'flex', alignItems: 'center', gap: '10px' }}>
            🎯 আমাদের লক্ষ্য
          </h2>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
            "নতুনপথ" একটি বিশেষ মোবাইল অ্যাপ্লিকেশন যা বাংলাদেশের কিশোর-কিশোরী এবং তাদের
            অভিভাবকদের জন্য তৈরি করা হয়েছে। আমাদের মূল লক্ষ্য হলো তরুণ প্রজন্মকে তাদের শারীরিক
            ও মানসিক স্বাস্থ্য সম্পর্কে সঠিক তথ্য প্রদান করা এবং একটি নিরাপদ পরিবেশে তাদের
            প্রশ্নের উত্তর দেওয়া।
          </p>
        </div>

        {/* Why This App */}
        <div className="card-glass" style={{ borderLeft: '5px solid var(--secondary)' }}>
          <h2 style={{ color: 'var(--secondary)', display: 'flex', alignItems: 'center', gap: '10px' }}>
            💡 কেন এই অ্যাপ প্রয়োজন?
          </h2>
          <div style={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
            <p style={{ marginBottom: '15px' }}>
              বাংলাদেশে কিশোর-কিশোরীদের স্বাস্থ্য শিক্ষা নিয়ে ভুল ধারণা রয়েছে।
              "নতুনপথ" এই সমস্যার সমাধান করতে চায়:
            </p>
            <ul style={{ paddingLeft: '20px', margin: 0 }}>
              <li>✅ সঠিক ও বিজ্ঞানসম্মত তথ্য প্রদান</li>
              <li>✅ গোপনীয়তা বজায় রাখা</li>
              <li>✅ অভিভাবকদের দিকনির্দেশনা</li>
              <li>✅ বিশেষজ্ঞ সহায়তা</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <h2 className="text-center" style={{ marginTop: '50px', marginBottom: '30px' }}>
        আমরা কী প্রদান করি?
      </h2>
      <div className="grid grid-2" style={{ gap: '20px' }}>
        <FeatureBox
          icon="📚"
          title="শিক্ষামূলক মডিউল"
          description="মানসিক স্বাস্থ্য, শারীরিক পরিবর্তন, সম্পর্ক, এবং আত্মবিশ্বাস নিয়ে বিস্তারিত তথ্য"
        />
        <FeatureBox
          icon="🤖"
          title="এআই স্বাস্থ্য সহায়ক"
          description="যেকোনো সময় গোপনীয়ভাবে প্রশ্ন করুন এবং তাৎক্ষণিক উত্তর পান"
        />
        <FeatureBox
          icon="🏥"
          title="পেশাদার পরামর্শ"
          description="অভিজ্ঞ ডাক্তার ও মনোবিজ্ঞানীদের সাথে অ্যাপয়েন্টমেন্ট বুক করুন"
        />
        <FeatureBox
          icon="👨‍👩‍👧"
          title="অভিভাবকদের জন্য গাইড"
          description="সন্তানদের সাথে স্বাস্থ্য বিষয়ে কথা বলার কৌশল এবং পরামর্শ"
        />
      </div>

      {/* Vision */}
      <div className="module-box" style={{
        marginTop: '40px',
        padding: '40px',
        background: 'linear-gradient(135deg, #fff3e0 0%, #ffe0b2 100%)',
        borderRadius: '20px',
        textAlign: 'center',
        border: 'none',
        boxShadow: '0 10px 25px rgba(230, 81, 0, 0.15)'
      }}>
        <h2 style={{ color: '#e65100', marginBottom: '20px' }}>
          👁️ আমাদের স্বপ্ন
        </h2>
        <p style={{ fontSize: '1.2rem', lineHeight: 1.8, color: '#bf360c', maxWidth: '800px', margin: '0 auto' }}>
          আমরা স্বপ্ন দেখি এমন একটি বাংলাদেশের যেখানে প্রতিটি তরুণ-তরুণী তাদের শারীরিক
          ও মানসিক স্বাস্থ্য নিয়ে আত্মবিশ্বাসী। "নতুনপথ" - একটি সুস্থ ও সচেতন প্রজন্মের জন্য।
        </p>
      </div>

    </div>
  );
}

// Feature Box Component
function FeatureBox({ icon, title, description }) {
  return (
    <div className="card-glass" style={{
      display: 'flex',
      alignItems: 'start',
      padding: '20px',
      gap: '15px',
      transition: 'transform 0.3s'
    }}
      onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
      onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
    >
      <div style={{
        fontSize: '2.5rem',
        background: 'var(--background)',
        width: '60px',
        height: '60px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '15px',
        flexShrink: 0
      }}>
        {icon}
      </div>
      <div>
        <h4 style={{ margin: '0 0 5px 0', fontSize: '1.2rem', color: 'var(--text-primary)' }}>{title}</h4>
        <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{description}</p>
      </div>
    </div>
  );
}

export default About;