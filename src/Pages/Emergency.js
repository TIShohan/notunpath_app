import React from 'react';

function Emergency() {
    const emergencyContacts = [
        {
            category: "🚨 জরুরি সেবা (Emergency)",
            color: "#e53e3e", // Red
            bgColor: "#fff5f5",
            contacts: [
                {
                    name: "National Emergency",
                    nameBn: "জাতীয় জরুরি সেবা",
                    number: "999",
                    desc: "Police, Ambulance, Fire Service",
                    available: "24/7"
                }
            ]
        },
        {
            category: "👶 শিশু সহায়তা (Child Help)",
            color: "#3182ce", // Blue
            bgColor: "#ebf8ff",
            contacts: [
                {
                    name: "Child Helpline",
                    nameBn: "শিশু সহায়তা হেল্পলাইন",
                    number: "1098",
                    desc: "Special support for children",
                    available: "24/7"
                }
            ]
        },
        {
            category: "🛡️ নারী ও শিশু (Women & Child)",
            color: "#d69e2e", // Orange/Gold
            bgColor: "#fffff0",
            contacts: [
                {
                    name: "Violence Prevention",
                    nameBn: "নারী ও শিশু নির্যাতন প্রতিরোধ",
                    number: "109",
                    desc: "Violence against women & children",
                    available: "24/7"
                }
            ]
        }
    ];

    const handleCall = (number) => {
        window.location.href = `tel:${number}`;
    };

    return (
        <div className="container" style={{ paddingBottom: '40px' }}>
            {/* Urgent Header */}
            <div style={{
                textAlign: 'center',
                padding: '40px 20px',
                background: 'linear-gradient(135deg, #fc8181 0%, #e53e3e 100%)',
                borderRadius: '0 0 20px 20px',
                marginBottom: '40px',
                color: 'white',
                boxShadow: '0 10px 30px rgba(229, 62, 62, 0.3)',
                marginTop: '-20px' // Pull up to top
            }}>
                <div style={{ fontSize: '4rem', marginBottom: '10px', animation: 'pulse 2s infinite' }}>🚨</div>
                <h1 style={{ margin: 0, color: 'white', fontSize: '2.5rem' }}>Emergency Support</h1>
                <p style={{ fontSize: '1.2rem', opacity: 0.9 }}>জরুরি সাহায্য</p>
            </div>

            {/* Warning Box */}
            <div className="glass-panel" style={{
                borderLeft: '6px solid #e53e3e',
                background: '#fff5f5',
                padding: '20px',
                marginBottom: '30px',
                display: 'flex',
                alignItems: 'start',
                gap: '15px'
            }}>
                <span style={{ fontSize: '1.5rem' }}>⚠️</span>
                <div>
                    <strong style={{ color: '#c53030' }}>Important Notice:</strong>
                    <p style={{ margin: '5px 0 0 0', color: '#742a2a', fontSize: '0.95rem' }}>
                        In life-threatening situations, always call <strong>999</strong> immediately.
                        Do not rely solely on this app for critical medical emergencies.
                    </p>
                </div>
            </div>

            {/* Contacts Grid */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                {emergencyContacts.map((section, index) => (
                    <div key={index}>
                        <h2 style={{
                            color: section.color,
                            borderBottom: `2px solid ${section.color}`,
                            paddingBottom: '10px',
                            marginBottom: '20px',
                            display: 'inline-block'
                        }}>
                            {section.category}
                        </h2>

                        <div className="grid grid-2">
                            {section.contacts.map((contact, idx) => (
                                <div key={idx} className="card" style={{
                                    border: `1px solid ${section.color}40`,
                                    background: section.bgColor,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    padding: '25px'
                                }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '15px' }}>
                                        <div>
                                            <h3 style={{ margin: 0, color: '#2d3748' }}>{contact.number}</h3>
                                            <span style={{
                                                fontSize: '0.8rem',
                                                background: section.color,
                                                color: 'white',
                                                padding: '2px 8px',
                                                borderRadius: '10px'
                                            }}>
                                                {contact.available}
                                            </span>
                                        </div>
                                        <div style={{ fontSize: '2rem' }}>📞</div>
                                    </div>

                                    <h4 style={{ margin: '0 0 5px 0', color: '#2d3748' }}>{contact.name}</h4>
                                    <p style={{ margin: 0, color: '#718096', fontSize: '0.9rem', fontStyle: 'italic' }}>{contact.nameBn}</p>
                                    <p style={{ marginTop: '10px', fontSize: '0.95rem' }}>{contact.desc}</p>

                                    <button
                                        onClick={() => handleCall(contact.number)}
                                        style={{
                                            marginTop: '20px',
                                            padding: '12px',
                                            background: section.color,
                                            color: 'white',
                                            border: 'none',
                                            borderRadius: '8px',
                                            fontWeight: 'bold',
                                            cursor: 'pointer',
                                            fontSize: '1.1rem',
                                            boxShadow: `0 4px 12px ${section.color}60`
                                        }}
                                    >
                                        Call Now
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <style>{`
                @keyframes pulse {
                    0% { transform: scale(1); }
                    50% { transform: scale(1.1); }
                    100% { transform: scale(1); }
                }
            `}</style>
        </div>
    );
}

export default Emergency;
