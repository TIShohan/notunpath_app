import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import doctorsData from '../data/doctors.json';

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
        <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '20px' }}>
            {/* Header */}
            <div style={{
                textAlign: 'center',
                marginBottom: '30px',
                padding: '30px',
                background: 'linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)',
                borderRadius: '12px'
            }}>
                <h1 style={{
                    margin: '0 0 10px 0',
                    color: '#1976d2',
                    fontSize: '2.2em'
                }}>
                    🏥 Professional Consultation
                </h1>
                <p style={{
                    color: '#555',
                    fontSize: '1.1em',
                    margin: 0
                }}>
                    Book an appointment with our expert healthcare professionals
                </p>
            </div>

            {/* Doctors List */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '20px',
                marginBottom: '30px'
            }}>
                {doctorsData.map((doctor) => (
                    <DoctorCard
                        key={doctor.id}
                        doctor={doctor}
                        onBook={handleBookAppointment}
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
                    background: 'rgba(0,0,0,0.5)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 1000
                }}>
                    <div style={{
                        background: 'white',
                        padding: '30px',
                        borderRadius: '12px',
                        maxWidth: '500px',
                        width: '90%',
                        boxShadow: '0 10px 40px rgba(0,0,0,0.3)'
                    }}>
                        {!requestSent ? (
                            <>
                                <h2 style={{ color: '#1976d2', marginTop: 0 }}>
                                    Confirm Appointment Request
                                </h2>
                                <div style={{ marginBottom: '20px' }}>
                                    <p><strong>Doctor:</strong> {selectedDoctor?.name}</p>
                                    <p><strong>Specialty:</strong> {selectedDoctor?.specialty}</p>
                                    <p><strong>Patient:</strong> {userProfile?.name || 'Guest'}</p>
                                    <p style={{
                                        background: '#fff3cd',
                                        padding: '10px',
                                        borderRadius: '8px',
                                        fontSize: '0.9em',
                                        color: '#856404'
                                    }}>
                                        ℹ️ Our management team will contact you within 24 hours to confirm the appointment time.
                                    </p>
                                </div>
                                <div style={{ display: 'flex', gap: '10px' }}>
                                    <button
                                        onClick={confirmBooking}
                                        style={{
                                            flex: 1,
                                            padding: '12px',
                                            background: 'linear-gradient(90deg, #64b5f6 0%, #1976d2 100%)',
                                            color: 'white',
                                            border: 'none',
                                            borderRadius: '8px',
                                            fontSize: '1em',
                                            fontWeight: 'bold',
                                            cursor: 'pointer'
                                        }}
                                    >
                                        ✓ Confirm Request
                                    </button>
                                    <button
                                        onClick={cancelBooking}
                                        style={{
                                            flex: 1,
                                            padding: '12px',
                                            background: '#f5f5f5',
                                            color: '#666',
                                            border: '1px solid #ddd',
                                            borderRadius: '8px',
                                            fontSize: '1em',
                                            cursor: 'pointer'
                                        }}
                                    >
                                        ✕ Cancel
                                    </button>
                                </div>
                            </>
                        ) : (
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: '4em', marginBottom: '10px' }}>✅</div>
                                <h2 style={{ color: '#4caf50', margin: '10px 0' }}>
                                    Request Sent Successfully!
                                </h2>
                                <p style={{ color: '#666' }}>
                                    Our team will contact you soon to schedule your appointment.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* Info Section */}
            <div className="module-box" style={{
                marginTop: '30px',
                padding: '25px',
                background: 'linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%)'
            }}>
                <h3 style={{ color: '#2e7d32', marginTop: 0 }}>
                    📋 How It Works
                </h3>
                <ol style={{ lineHeight: 2, color: '#555' }}>
                    <li>Choose a doctor based on your needs</li>
                    <li>Click "Book Appointment" button</li>
                    <li>Confirm your appointment request</li>
                    <li>Our management team will contact you within 24 hours</li>
                    <li>They will help you set a convenient time for your consultation</li>
                </ol>
                <p style={{
                    marginTop: '15px',
                    padding: '10px',
                    background: 'rgba(255,255,255,0.7)',
                    borderRadius: '8px',
                    fontSize: '0.95em'
                }}>
                    💡 <strong>Note:</strong> All consultations are confidential and conducted in a safe, supportive environment.
                </p>
            </div>
        </div>
    );
}

// Doctor Card Component
function DoctorCard({ doctor, onBook }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="module-box"
            style={{
                padding: '20px',
                transition: 'all 0.3s ease',
                transform: isHovered ? 'translateY(-5px)' : 'translateY(0)',
                cursor: 'default'
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Doctor Icon */}
            <div style={{
                fontSize: '4em',
                textAlign: 'center',
                marginBottom: '10px'
            }}>
                {doctor.image}
            </div>

            {/* Doctor Info */}
            <h3 style={{
                color: '#1976d2',
                margin: '10px 0',
                fontSize: '1.3em',
                textAlign: 'center'
            }}>
                {doctor.name}
            </h3>

            <p style={{
                textAlign: 'center',
                color: '#666',
                fontWeight: 'bold',
                margin: '5px 0 15px 0'
            }}>
                {doctor.specialty}
            </p>

            <div style={{
                fontSize: '0.9em',
                color: '#555',
                lineHeight: 1.8,
                marginBottom: '15px'
            }}>
                <p style={{ margin: '5px 0' }}>
                    <strong>📚 Experience:</strong> {doctor.experience}
                </p>
                <p style={{ margin: '5px 0' }}>
                    <strong>🎓 Education:</strong> {doctor.education}
                </p>
                <p style={{ margin: '5px 0' }}>
                    <strong>🗣️ Languages:</strong> {doctor.languages}
                </p>
                <p style={{ margin: '5px 0' }}>
                    <strong>🕐 Available:</strong> {doctor.availability}
                </p>
            </div>

            {/* Book Button */}
            <button
                onClick={() => onBook(doctor)}
                style={{
                    width: '100%',
                    padding: '12px',
                    background: 'linear-gradient(90deg, #64b5f6 0%, #1976d2 100%)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '1em',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 2px 8px rgba(25, 118, 210, 0.3)'
                }}
                onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.02)';
                    e.target.style.boxShadow = '0 4px 12px rgba(25, 118, 210, 0.4)';
                }}
                onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)';
                    e.target.style.boxShadow = '0 2px 8px rgba(25, 118, 210, 0.3)';
                }}
            >
                📅 Book Appointment
            </button>
        </div>
    );
}

export default Consultation;
