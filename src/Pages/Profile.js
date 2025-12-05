import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function Profile() {
    const { userProfile, updateUserProfile, logout } = useAuth();
    const navigate = useNavigate();
    const [isEditing, setIsEditing] = useState(false);
    const [form, setForm] = useState({
        name: userProfile?.name || '',
        phone: userProfile?.phone || '',
        dateOfBirth: userProfile?.dateOfBirth || ''
    });
    const [saving, setSaving] = useState(false);
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSave = async () => {
        setSaving(true);
        setMessage('');

        try {
            await updateUserProfile(form);
            setMessage('Profile updated successfully! ✅');
            setIsEditing(false);
            setTimeout(() => setMessage(''), 3000);
        } catch (error) {
            setMessage('Failed to update profile. Please try again.');
        } finally {
            setSaving(false);
        }
    };

    const handleCancel = () => {
        setForm({
            name: userProfile?.name || '',
            phone: userProfile?.phone || '',
            dateOfBirth: userProfile?.dateOfBirth || ''
        });
        setIsEditing(false);
        setMessage('');
    };

    const handleLogout = async () => {
        await logout();
        navigate('/login');
    };

    return (
        <div className="container" style={{ paddingBottom: '40px', maxWidth: '600px', margin: '0 auto' }}>
            {/* Header */}
            <div className="glass-panel" style={{
                marginTop: '20px',
                marginBottom: '30px',
                padding: '30px 20px',
                textAlign: 'center',
                background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)'
            }}>
                <div style={{
                    width: '100px',
                    height: '100px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '3rem',
                    fontWeight: '700',
                    color: 'white',
                    margin: '0 auto 15px',
                    boxShadow: '0 10px 30px rgba(102, 126, 234, 0.3)',
                    border: '4px solid white'
                }}>
                    {userProfile?.name?.charAt(0).toUpperCase() || '👤'}
                </div>
                <h1 style={{ margin: '0 0 5px 0', fontSize: '1.8rem' }}>{userProfile?.name || 'User'}</h1>
                <p style={{ color: '#666', margin: 0 }}>{userProfile?.email}</p>
            </div>

            {/* Profile Details */}
            <div className="card-glass" style={{ padding: '30px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '25px' }}>
                    <h2 style={{ margin: 0 }}>Profile Information</h2>
                    {!isEditing && (
                        <button
                            onClick={() => setIsEditing(true)}
                            className="btn"
                            style={{
                                background: 'var(--primary)',
                                color: 'white',
                                padding: '8px 16px',
                                fontSize: '0.9rem'
                            }}
                        >
                            ✏️ Edit
                        </button>
                    )}
                </div>

                {message && (
                    <div style={{
                        padding: '12px',
                        borderRadius: '8px',
                        marginBottom: '20px',
                        background: message.includes('success') ? '#e8f5e9' : '#ffebee',
                        color: message.includes('success') ? '#2e7d32' : '#c62828',
                        textAlign: 'center'
                    }}>
                        {message}
                    </div>
                )}

                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    {/* Name */}
                    <div>
                        <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', color: '#555' }}>
                            Full Name
                        </label>
                        {isEditing ? (
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                style={{
                                    width: '100%',
                                    padding: '12px',
                                    borderRadius: '8px',
                                    border: '1px solid #90caf9',
                                    fontSize: '15px'
                                }}
                            />
                        ) : (
                            <p style={{ margin: 0, padding: '12px', background: '#f5f5f5', borderRadius: '8px' }}>
                                {userProfile?.name || 'Not set'}
                            </p>
                        )}
                    </div>

                    {/* Phone */}
                    <div>
                        <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', color: '#555' }}>
                            Phone Number
                        </label>
                        {isEditing ? (
                            <input
                                type="tel"
                                name="phone"
                                value={form.phone}
                                onChange={handleChange}
                                style={{
                                    width: '100%',
                                    padding: '12px',
                                    borderRadius: '8px',
                                    border: '1px solid #90caf9',
                                    fontSize: '15px'
                                }}
                            />
                        ) : (
                            <p style={{ margin: 0, padding: '12px', background: '#f5f5f5', borderRadius: '8px' }}>
                                {userProfile?.phone || 'Not set'}
                            </p>
                        )}
                    </div>

                    {/* Date of Birth */}
                    <div>
                        <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', color: '#555' }}>
                            Date of Birth
                        </label>
                        {isEditing ? (
                            <input
                                type="text"
                                name="dateOfBirth"
                                value={form.dateOfBirth}
                                onChange={handleChange}
                                placeholder="DD/MM/YYYY"
                                style={{
                                    width: '100%',
                                    padding: '12px',
                                    borderRadius: '8px',
                                    border: '1px solid #90caf9',
                                    fontSize: '15px'
                                }}
                            />
                        ) : (
                            <p style={{ margin: 0, padding: '12px', background: '#f5f5f5', borderRadius: '8px' }}>
                                {userProfile?.dateOfBirth || 'Not set'}
                            </p>
                        )}
                    </div>

                    {/* Age */}
                    <div>
                        <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', color: '#555' }}>
                            Age
                        </label>
                        <p style={{ margin: 0, padding: '12px', background: '#f5f5f5', borderRadius: '8px' }}>
                            {userProfile?.age || 'N/A'} years
                        </p>
                    </div>

                    {/* Email (non-editable) */}
                    <div>
                        <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', color: '#555' }}>
                            Email
                        </label>
                        <p style={{ margin: 0, padding: '12px', background: '#f5f5f5', borderRadius: '8px', color: '#999' }}>
                            {userProfile?.email} (cannot be changed)
                        </p>
                    </div>
                </div>

                {/* Action Buttons */}
                {isEditing && (
                    <div style={{ display: 'flex', gap: '10px', marginTop: '25px' }}>
                        <button
                            onClick={handleSave}
                            disabled={saving}
                            className="btn btn-primary"
                            style={{ flex: 1 }}
                        >
                            {saving ? '⏳ Saving...' : '💾 Save Changes'}
                        </button>
                        <button
                            onClick={handleCancel}
                            className="btn"
                            style={{
                                flex: 1,
                                background: '#f5f5f5',
                                color: '#666'
                            }}
                        >
                            ❌ Cancel
                        </button>
                    </div>
                )}

                {/* Logout Button */}
                {!isEditing && (
                    <button
                        onClick={handleLogout}
                        className="btn"
                        style={{
                            width: '100%',
                            marginTop: '25px',
                            background: '#f44336',
                            color: 'white'
                        }}
                    >
                        🚪 Logout
                    </button>
                )}
            </div>
        </div>
    );
}

export default Profile;
