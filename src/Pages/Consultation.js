import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import doctorsData from '../data/doctors.json';

// Helper function to get initials from name
const getInitials = (name) => {
    return name
        .split(' ')
        .map(word => word[0])
        .join('')
        .toUpperCase()
        .slice(0, 2);
};

// Helper function to get gradient colors based on specialty
const getGradientColors = (specialty) => {
    const colorMap = {
        'Adolescent Psychologist': { from: '#667eea', to: '#764ba2' },
        'Pediatrician': { from: '#f093fb', to: '#f5576c' },
        'Gynecologist': { from: '#4facfe', to: '#00f2fe' },
        'Mental Health Counselor': { from: '#43e97b', to: '#38f9d7' },
        'Nutritionist': { from: '#fa709a', to: '#fee140' }
    };
    return colorMap[specialty] || { from: '#667eea', to: '#764ba2' };
};

function Consultation() {
    const { userProfile } = useAuth();
    const [selectedDoctor, setSelectedDoctor] = useState(null);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [requestSent, setRequestSent] = useState(false);

    const handleBookAppointment = (doctor) => {
        setSelectedDoctor(doctor);
        setShowConfirmation(true);
    };

    const confirmBooking = () => {
        // In a real app, this would send data to backend/Firebase
        console.log('Appointment request sent for:', selectedDoctor.name);
        console.log('Patient:', userProfile?.name);

        setRequestSent(true);
        setTimeout(() => {
            setShowConfirmation(false);
            setRequestSent(false);
            setSelectedDoctor(null);
        }, 3000);
    };

    const cancelBooking = () => {
        setShowConfirmation(false);
        setSelectedDoctor(null);
    };

    return (
        <div className="container" style={{ paddingBottom: '40px' }}>
            {/* Header */}
            <div className="glass-panel" style={{
                margin: '20px 0 40px',
                padding: '40px 20px',
                textAlign: 'center',
                background: 'linear-gradient(135deg, rgba(227, 242, 253, 0.9) 0%, rgba(187, 222, 251, 0.9) 100%)',
                border: '1px solid #bbdefb'
            }}>
                <h1 style={{
                    margin: '0 0 10px 0',
                    background: 'linear-gradient(90deg, #1976d2 0%, #0d47a1 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontSize: '2.5rem'
                }}>
                    Professional Consultation 🏥
                </h1>
                <p style={{
                    color: '#1565c0',
                    fontSize: '1.15rem',
                    margin: 0,
                    maxWidth: '600px',
                    marginLeft: 'auto',
                    marginRight: 'auto'
                }}>
                    Connect with expert psychologists and doctors in a safe, private environment.
                </p>
            </div>

            {/* Doctors Grid */}
            <div className="grid grid-2" style={{
                gap: '25px',
                marginBottom: '30px'
            }}>
                {doctorsData.map((doctor, index) => (
                    <DoctorCard
                        key={doctor.id}
                        doctor={doctor}
                        onBook={handleBookAppointment}
                        index={index}
                    />
                ))}
            </div>

            {/* Confirmation Modal */}
            {showConfirmation && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'rgba(0,0,0,0.6)',
                    backdropFilter: 'blur(5px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 2000,
                    animation: 'fadeIn 0.3s ease'
                }}>
                    <div className="glass-panel" style={{
                        padding: '30px',
                        maxWidth: '500px',
                        width: '90%',
                        background: 'white',
                        animation: 'slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                    }}>
                        {!requestSent ? (
                            <>
                                <h2 style={{ color: '#1976d2', marginTop: 0 }}>
                                    Confirm Appointment Request
                                </h2>
                                <div style={{ marginBottom: '20px', lineHeight: '1.6' }}>
                                    <p><strong>Doctor:</strong> {selectedDoctor?.name}</p>
                                    <p><strong>Specialty:</strong> {selectedDoctor?.specialty}</p>
                                    <p><strong>Patient:</strong> {userProfile?.name || 'Guest User'}</p>
                                    <div style={{
                                        background: '#fff8e1',
                                        padding: '12px',
                                        borderRadius: '8px',
                                        fontSize: '0.95em',
                                        color: '#b7791f',
                                        border: '1px solid #f6e05e',
                                        marginTop: '15px'
                                    }}>
                                        ℹ️ This is a request. Our management team will contact you within 24 hours to confirm the exact time.
                                    </div>
                                </div>
                                <div style={{ display: 'flex', gap: '15px' }}>
                                    <button
                                        onClick={confirmBooking}
                                        className="btn btn-primary"
                                        style={{ flex: 1 }}
                                    >
                                        Sure, Book it! ✓
                                    </button>
                                    <button
                                        onClick={cancelBooking}
                                        className="btn"
                                        style={{
                                            flex: 1,
                                            background: '#f1f5f9',
                                            color: '#64748b'
                                        }}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </>
                        ) : (
                            <div style={{ textAlign: 'center', padding: '20px 0' }}>
                                <div style={{ fontSize: '4em', marginBottom: '15px', animation: 'bounce 1s infinite' }}>✅</div>
                                <h2 style={{ color: '#48bb78', margin: '10px 0' }}>
                                    Request Sent!
                                </h2>
                                <p style={{ color: '#718096' }}>
                                    We'll be in touch shortly.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* Info Section */}
            <div className="glass-panel" style={{
                marginTop: '40px',
                padding: '30px',
                background: 'rgba(255, 255, 255, 0.6)'
            }}>
                <h3 style={{ color: '#2d3748', marginTop: 0, textAlign: 'center' }}>
                    How It Works
                </h3>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    flexWrap: 'wrap',
                    gap: '20px',
                    textAlign: 'center',
                    marginTop: '20px'
                }}>
                    <Step icon="🔎" text="Choose a Doctor" />
                    <Step icon="📅" text="Request Time" />
                    <Step icon="📞" text="We Confirm" />
                    <Step icon="🤝" text="Consultation" />
                </div>
            </div>
        </div>
    );
}

// Doctor Card Component
function DoctorCard({ doctor, onBook, index }) {
    return (
        <div
            className="card-glass"
            style={{
                display: 'flex',
                flexDirection: 'column',
                animation: `slideUp 0.6s ease-out ${index * 0.1}s backwards`,
                borderTop: '4px solid #667eea',
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            {/* Modern Avatar */}
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                margin: '20px 0'
            }}>
                <div style={{
                    width: '100px',
                    height: '100px',
                    borderRadius: '50%',
                    background: `linear-gradient(135deg, ${getGradientColors(doctor.specialty).from} 0%, ${getGradientColors(doctor.specialty).to} 100%)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2.5rem',
                    fontWeight: '700',
                    color: 'white',
                    boxShadow: '0 10px 30px rgba(102, 126, 234, 0.3)',
                    border: '4px solid white',
                    position: 'relative'
                }}>
                    {getInitials(doctor.name)}
                    {/* Online indicator */}
                    <div style={{
                        position: 'absolute',
                        bottom: '5px',
                        right: '5px',
                        width: '20px',
                        height: '20px',
                        background: '#48bb78',
                        border: '3px solid white',
                        borderRadius: '50%'
                    }}></div>
                </div>
            </div>

            <h3 style={{
                color: '#2d3748',
                margin: '10px 0 5px 0',
                fontSize: '1.4em',
                textAlign: 'center'
            }}>
                {doctor.name}
            </h3>

            <p style={{
                textAlign: 'center',
                color: '#667eea',
                fontWeight: '600',
                margin: '0 0 20px 0',
                textTransform: 'uppercase',
                fontSize: '0.9rem',
                letterSpacing: '1px'
            }}>
                {doctor.specialty}
            </p>

            <div style={{
                fontSize: '0.95rem',
                color: '#4a5568',
                lineHeight: 1.8,
                marginBottom: '20px',
                flex: 1,
                background: 'rgba(255,255,255,0.5)',
                padding: '15px',
                borderRadius: '10px'
            }}>
                <div style={{ marginBottom: '8px' }}><strong>🎓 Education:</strong> {doctor.education}</div>
                <div style={{ marginBottom: '8px' }}><strong>⭐ Experience:</strong> {doctor.experience}</div>
                <div><strong>🗣️ Speaks:</strong> {doctor.languages}</div>
            </div>

            <button
                onClick={() => onBook(doctor)}
                className="btn btn-primary"
                style={{ width: '100%' }}
            >
                Book Appointment
            </button>
        </div>
    );
}

function Step({ icon, text }) {
    return (
        <div style={{ width: '120px' }}>
            <div style={{ fontSize: '2em', marginBottom: '10px' }}>{icon}</div>
            <div style={{ fontSize: '0.9rem', fontWeight: 'bold', color: '#4a5568' }}>{text}</div>
        </div>
    )
}

export default Consultation;
