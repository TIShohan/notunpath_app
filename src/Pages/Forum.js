import React, { useState } from 'react';
import forumData from '../data/forum.json';

function Forum() {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [showAskModal, setShowAskModal] = useState(false);
    const [newQuestion, setNewQuestion] = useState({ question: '', category: 'Mental Health' });
    const [questions, setQuestions] = useState(forumData);

    const categories = ['All', 'Mental Health', 'Reproductive Health', 'Relationships', 'Social Media', 'Self-Esteem'];

    const getCategoryColor = (category) => {
        const colors = {
            'All': '#667eea',
            'Mental Health': '#48bb78',
            'Reproductive Health': '#ed8936',
            'Relationships': '#f56565',
            'Social Media': '#4dc9e6',
            'Self-Esteem': '#9f7aea'
        };
        return colors[category] || '#667eea';
    };

    const filteredQuestions = selectedCategory === 'All'
        ? questions
        : questions.filter(q => q.category === selectedCategory);

    const handleUpvote = (questionId) => {
        setQuestions(questions.map(q =>
            q.id === questionId ? { ...q, upvotes: q.upvotes + 1 } : q
        ));
    };

    const handleAskQuestion = () => {
        alert('প্রশ্নটি জমা হয়েছে! ডাক্তাররা শীঘ্রই উত্তর দেবেন। ✅');
        setShowAskModal(false);
        setNewQuestion({ question: '', category: 'Mental Health' });
    };

    return (
        <div className="container" style={{ paddingBottom: '40px' }}>
            <div className="glass-panel" style={{
                marginTop: '20px',
                marginBottom: '30px',
                padding: '30px 20px',
                textAlign: 'center',
                background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)'
            }}>
                <h1 style={{ margin: '0 0 10px 0', fontSize: '2rem' }}>💬 Anonymous Q&A Forum</h1>
                <p style={{ color: '#666', margin: '0 0 20px 0' }}>
                    প্রশ্ন করো anonymously, ডাক্তারদের কাছ থেকে উত্তর পাও
                </p>
                <button
                    onClick={() => setShowAskModal(true)}
                    className="btn btn-primary"
                    style={{ fontSize: '1rem', padding: '12px 30px' }}
                >
                    🙋 Ask Anonymously
                </button>
            </div>

            <div style={{
                display: 'flex',
                gap: '10px',
                marginBottom: '30px',
                overflowX: 'auto',
                padding: '5px'
            }}>
                {categories.map(cat => (
                    <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        style={{
                            padding: '8px 20px',
                            borderRadius: '20px',
                            border: selectedCategory === cat ? 'none' : `1px solid ${getCategoryColor(cat)}40`,
                            background: selectedCategory === cat ? getCategoryColor(cat) : 'white',
                            color: selectedCategory === cat ? 'white' : getCategoryColor(cat),
                            fontWeight: '600',
                            cursor: 'pointer',
                            whiteSpace: 'nowrap',
                            fontSize: '0.9rem'
                        }}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {filteredQuestions.map(item => (
                    <QuestionCard key={item.id} data={item} onUpvote={handleUpvote} getCategoryColor={getCategoryColor} />
                ))}
            </div>

            {showAskModal && (
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
                    padding: '20px'
                }}>
                    <div className="glass-panel" style={{
                        padding: '30px',
                        maxWidth: '500px',
                        width: '100%',
                        background: 'white',
                        maxHeight: '90vh',
                        overflowY: 'auto'
                    }}>
                        <h2 style={{ marginTop: 0 }}>Ask Your Question</h2>
                        <p style={{ color: '#666', fontSize: '0.9rem' }}>
                            Your identity will remain completely anonymous 🔒
                        </p>

                        <div style={{ marginTop: '20px' }}>
                            <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px' }}>
                                Category
                            </label>
                            <select
                                value={newQuestion.category}
                                onChange={(e) => setNewQuestion({ ...newQuestion, category: e.target.value })}
                                style={{
                                    width: '100%',
                                    padding: '12px',
                                    borderRadius: '8px',
                                    border: '1px solid #90caf9',
                                    fontSize: '15px',
                                    marginBottom: '15px'
                                }}
                            >
                                {categories.filter(c => c !== 'All').map(cat => (
                                    <option key={cat} value={cat}>{cat}</option>
                                ))}
                            </select>

                            <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px' }}>
                                Your Question
                            </label>
                            <textarea
                                value={newQuestion.question}
                                onChange={(e) => setNewQuestion({ ...newQuestion, question: e.target.value })}
                                placeholder="আপনার প্রশ্ন লিখুন..."
                                rows="5"
                                style={{
                                    width: '100%',
                                    padding: '12px',
                                    borderRadius: '8px',
                                    border: '1px solid #90caf9',
                                    fontSize: '15px',
                                    resize: 'vertical'
                                }}
                            />
                        </div>

                        <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
                            <button
                                onClick={handleAskQuestion}
                                disabled={!newQuestion.question.trim()}
                                className="btn btn-primary"
                                style={{ flex: 1 }}
                            >
                                Submit Question
                            </button>
                            <button
                                onClick={() => setShowAskModal(false)}
                                className="btn"
                                style={{ flex: 1, background: '#f5f5f5', color: '#666' }}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

function QuestionCard({ data, onUpvote, getCategoryColor }) {
    const [showAnswer, setShowAnswer] = useState(false);
    const [upvoted, setUpvoted] = useState(false);

    const handleUpvoteClick = () => {
        if (!upvoted) {
            onUpvote(data.id);
            setUpvoted(true);
        }
    };

    return (
        <div className="card-glass" style={{ padding: '25px' }}>
            <span style={{
                display: 'inline-block',
                padding: '4px 12px',
                borderRadius: '12px',
                background: getCategoryColor(data.category),
                color: 'white',
                fontSize: '0.75rem',
                fontWeight: '600',
                marginBottom: '12px'
            }}>
                {data.category}
            </span>

            <h3 style={{ margin: '0 0 15px 0', fontSize: '1.2rem', lineHeight: '1.5' }}>
                {data.question}
            </h3>

            <div style={{
                display: 'flex',
                gap: '20px',
                fontSize: '0.85rem',
                color: '#999',
                marginBottom: '15px',
                alignItems: 'center'
            }}>
                <span>👤 {data.askedBy}</span>
                <span>📅 {data.askedDate}</span>
                <button
                    onClick={handleUpvoteClick}
                    disabled={upvoted}
                    style={{
                        background: upvoted ? '#48bb78' : 'transparent',
                        border: upvoted ? 'none' : '1px solid #e2e8f0',
                        color: upvoted ? 'white' : '#666',
                        padding: '4px 12px',
                        borderRadius: '12px',
                        cursor: upvoted ? 'default' : 'pointer',
                        fontSize: '0.85rem',
                        fontWeight: '600'
                    }}
                >
                    👍 {data.upvotes} {upvoted && '✓'}
                </button>
            </div>

            {data.answers && data.answers.length > 0 && (
                <>
                    <button
                        onClick={() => setShowAnswer(!showAnswer)}
                        className="btn"
                        style={{
                            background: showAnswer ? '#f5f5f5' : 'var(--primary)',
                            color: showAnswer ? '#666' : 'white',
                            padding: '10px 20px',
                            fontSize: '0.9rem'
                        }}
                    >
                        {showAnswer ? '▲ Hide Answer' : '▼ View Doctor\'s Answer'}
                    </button>

                    {showAnswer && data.answers.map(answer => (
                        <div key={answer.id} style={{
                            marginTop: '20px',
                            padding: '20px',
                            background: 'linear-gradient(135deg, #e8f5e9 0%, #f1f8e9 100%)',
                            borderRadius: '12px',
                            borderLeft: '4px solid #48bb78'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                                <div style={{
                                    width: '50px',
                                    height: '50px',
                                    borderRadius: '50%',
                                    background: 'linear-gradient(135deg, #48bb78 0%, #38a169 100%)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'white',
                                    fontWeight: '700',
                                    fontSize: '1.2rem'
                                }}>
                                    👨‍⚕️
                                </div>
                                <div>
                                    <h4 style={{ margin: 0, fontSize: '1rem' }}>{answer.answeredBy}</h4>
                                    <p style={{ margin: 0, fontSize: '0.85rem', color: '#666' }}>{answer.specialty}</p>
                                </div>
                            </div>
                            <p style={{ margin: '0 0 10px 0', lineHeight: '1.7', color: '#2d3748' }}>
                                {answer.answer}
                            </p>
                            <div style={{ fontSize: '0.8rem', color: '#999' }}>
                                📅 {answer.answeredDate} • 👍 {answer.helpful} found this helpful
                            </div>
                        </div>
                    ))}
                </>
            )}
        </div>
    );
}

export default Forum;
