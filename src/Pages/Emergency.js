import React from 'react';

function Emergency() {
    const emergencyContacts = [
        {
            category: "🚨 জরুরি সেবা / Emergency Services",
            color: "#d32f2f",
            contacts: [
                {
                    name: "জাতীয় জরুরি সেবা / National Emergency",
                    nameEn: "Police / Ambulance / Fire Service",
                    number: "999",
                    description: "পুলিশ, অ্যাম্বুলেন্স, ফায়ার সার্ভিস - যেকোনো জরুরি পরিস্থিতিতে",
                    descriptionEn: "Police, ambulance, fire service - for any emergency situation",
                    available: "24/7",
                    type: "emergency"
                }
            ]
        },
        {
            category: "👶 শিশু ও কিশোর সহায়তা / Child & Youth Support",
            color: "#1976d2",
            contacts: [
                {
                    name: "শিশু সহায়তা হেল্পলাইন",
                    nameEn: "Child Helpline Bangladesh",
                    number: "1098",
                    description: "শিশু ও কিশোর-কিশোরীদের জন্য বিশেষ সহায়তা লাইন",
                    descriptionEn: "Special support line for children and adolescents",
                    available: "24/7",
                    type: "support"
                }
            ]
        },
        {
            category: "🛡️ নির্যাতন ও সহিংসতা / Violence & Abuse",
            color: "#f57c00",
            contacts: [
                {
                    name: "নারী ও শিশু নির্যাতন প্রতিরোধ",
                    nameEn: "Women & Children Repression Prevention",
                    number: "109",
                    description: "নারী ও শিশু নির্যাতন, বাল্যবিবাহ, লিঙ্গ-ভিত্তিক সহিংসতা",
                    descriptionEn: "Violence against women & children, child marriage, gender-based violence",
                    available: "24/7",
                    type: "protection"
                },
                {
                    name: "জাতীয় হেল্পলাইন সেন্টার",
                    nameEn: "National Helpline Center",
                    number: "10921",
                    description: "নারী ও শিশু নির্যাতন সংক্রান্ত যেকোনো সমস্যা",
                    descriptionEn: "Any issues related to violence against women and children",
                    available: "24/7",
                    type: "protection"
                }
            ]
        },
        {
            category: "🧠 মানসিক স্বাস্থ্য / Mental Health",
            color: "#7b1fa2",
            contacts: [
                {
                    name: "মানসিক স্বাস্থ্য সহায়তা",
                    nameEn: "Mental Health Support",
                    number: "+880 1730333789",
                    description: "মানসিক চাপ, বিষণ্নতা, আত্মহত্যার চিন্তা - জরুরি সাহায্য",
                    descriptionEn: "Stress, depression, suicidal thoughts - urgent help",
                    available: "Limited hours",
                    type: "mental-health"
                }
            ]
        }
    ];

    const handleCall = (number) => {
        window.location.href = `tel:${number}`;
    };

    return (
        <div style={{
            maxWidth: '900px',
            margin: '0 auto',
            padding: 'clamp(15px, 3vw, 20px)'
        }}>
            {/* Header */}
            <div style={{
                textAlign: 'center',
                padding: 'clamp(30px, 5vw, 40px)',
                background: 'linear-gradient(135deg, #d32f2f 0%, #f44336 100%)',
                borderRadius: '12px',
                marginBottom: '30px',
                color: 'white',
                boxShadow: '0 8px 32px rgba(211, 47, 47, 0.3)'
            }}>
                <div style={{ fontSize: 'clamp(3em, 8vw, 4em)', marginBottom: '10px' }}>🚨</div>
                <h1 style={{
                    margin: '0 0 15px 0',
                    color: 'white',
                    fontSize: 'clamp(1.8em, 5vw, 2.5em)'
                }}>
                    জরুরি সাহায্য
                </h1>
                <h2 style={{
                    margin: '0 0 10px 0',
                    color: 'rgba(255,255,255,0.95)',
                    fontSize: 'clamp(1.2em, 3vw, 1.5em)',
                    fontWeight: '500'
                }}>
                    Urgent Help & Emergency Contacts
                </h2>
                <p style={{
                    fontSize: 'clamp(0.95em, 2.5vw, 1.05em)',
                    margin: 0,
                    opacity: 0.9,
                    lineHeight: 1.6
                }}>
                    জরুরি পরিস্থিতিতে নিচের নম্বরগুলোতে যোগাযোগ করুন
                    <br />
                    Contact these numbers in emergency situations
                </p>
            </div>

            {/* Important Notice */}
            <div style={{
                background: '#fff3cd',
                border: '2px solid #ffc107',
                borderRadius: '12px',
                padding: 'clamp(15px, 3vw, 20px)',
                marginBottom: '25px',
                fontSize: 'clamp(0.9em, 2vw, 0.95em)'
            }}>
                <p style={{ margin: '0 0 10px 0', fontWeight: 'bold', color: '#856404' }}>
                    ⚠️ গুরুত্বপূর্ণ তথ্য / Important Information:
                </p>
                <ul style={{ margin: 0, paddingLeft: '20px', color: '#856404', lineHeight: 1.8 }}>
                    <li>জীবন-মরণ জরুরি পরিস্থিতিতে অবশ্যই 999 নম্বরে কল করুন</li>
                    <li>In life-threatening emergencies, always call 999</li>
                    <li>এই তথ্যগুলো পেশাদার চিকিৎসা সেবার বিকল্প নয়</li>
                    <li>These resources are not a replacement for professional medical services</li>
                </ul>
            </div>

            {/* Emergency Contacts */}
            {emergencyContacts.map((section, index) => (
                <div key={index} style={{ marginBottom: '25px' }}>
                    <h2 style={{
                        color: section.color,
                        fontSize: 'clamp(1.3em, 3.5vw, 1.6em)',
                        marginBottom: '15px',
                        paddingBottom: '10px',
                        borderBottom: `3px solid ${section.color}`
                    }}>
                        {section.category}
                    </h2>

                    {section.contacts.map((contact, idx) => (
                        <div
                            key={idx}
                            className="module-box"
                            style={{
                                marginBottom: '15px',
                                padding: 'clamp(20px, 4vw, 25px)',
                                borderLeft: `5px solid ${section.color}`,
                                background: 'white'
                            }}
                        >
                            {/* Contact Name */}
                            <h3 style={{
                                margin: '0 0 5px 0',
                                color: section.color,
                                fontSize: 'clamp(1.1em, 2.5vw, 1.3em)'
                            }}>
                                {contact.name}
                            </h3>
                            <p style={{
                                margin: '0 0 12px 0',
                                color: '#666',
                                fontSize: 'clamp(0.9em, 2vw, 0.95em)',
                                fontStyle: 'italic'
                            }}>
                                {contact.nameEn}
                            </p>

                            {/* Description */}
                            <div style={{
                                marginBottom: '15px',
                                fontSize: 'clamp(0.9em, 2vw, 0.95em)',
                                lineHeight: 1.7
                            }}>
                                <p style={{ margin: '0 0 5px 0', color: '#333' }}>
                                    {contact.description}
                                </p>
                                <p style={{ margin: 0, color: '#666' }}>
                                    {contact.descriptionEn}
                                </p>
                            </div>

                            {/* Availability */}
                            <div style={{
                                display: 'inline-block',
                                background: contact.available === '24/7' ? '#4caf50' : '#ff9800',
                                color: 'white',
                                padding: '4px 12px',
                                borderRadius: '20px',
                                fontSize: 'clamp(0.8em, 1.8vw, 0.85em)',
                                fontWeight: 'bold',
                                marginBottom: '15px'
                            }}>
                                {contact.available === '24/7' ? '⏰ 24/7 Available' : '⏰ ' + contact.available}
                            </div>

                            {/* Call Button */}
                            <button
                                onClick={() => handleCall(contact.number)}
                                style={{
                                    width: '100%',
                                    padding: 'clamp(14px, 3vw, 16px)',
                                    background: `linear-gradient(90deg, ${section.color} 0%, ${section.color}dd 100%)`,
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '10px',
                                    fontSize: 'clamp(1.1em, 2.5vw, 1.3em)',
                                    fontWeight: 'bold',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '10px',
                                    boxShadow: `0 4px 15px ${section.color}40`,
                                    transition: 'all 0.3s ease',
                                    minHeight: '50px'
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.transform = 'translateY(-2px)';
                                    e.target.style.boxShadow = `0 6px 20px ${section.color}60`;
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.transform = 'translateY(0)';
                                    e.target.style.boxShadow = `0 4px 15px ${section.color}40`;
                                }}
                            >
                                <span style={{ fontSize: '1.3em' }}>📞</span>
                                <span>Call {contact.number}</span>
                            </button>
                        </div>
                    ))}
                </div>
            ))}

            {/* Additional Resources */}
            <div className="module-box" style={{
                marginTop: '30px',
                padding: 'clamp(20px, 4vw, 25px)',
                background: 'linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)'
            }}>
                <h3 style={{ color: '#1976d2', marginTop: 0 }}>
                    💙 আরও সাহায্য / Additional Help
                </h3>
                <p style={{ lineHeight: 1.8, fontSize: 'clamp(0.9em, 2vw, 0.95em)' }}>
                    আপনি যদি কথা বলতে চান, আমাদের <strong>Melo AI সহায়ক</strong> সবসময় আপনার জন্য আছে।
                    এছাড়াও আপনি আমাদের <strong>পেশাদার ডাক্তারদের</strong> সাথে অ্যাপয়েন্টমেন্ট নিতে পারেন।
                </p>
                <p style={{ lineHeight: 1.8, fontSize: 'clamp(0.9em, 2vw, 0.95em)' }}>
                    If you want to talk, our <strong>Melo AI companion</strong> is always here for you.
                    You can also book appointments with our <strong>professional doctors</strong>.
                </p>
            </div>
        </div>
    );
}

export default Emergency;
