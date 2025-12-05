import React from 'react';
import parentTips from '../data/parents.json';

function Parents() {
  return (
    <div>
      <h1>Guidance for Parents</h1>
      <div style={{ textAlign: 'center', margin: '20px 0' }}>
        <img
          src="/images/Friends Group.png"
          alt="Teen Friendship"
          style={{
            width: '250px',
            height: '200px',
            objectFit: 'contain',
            marginBottom: '20px'
          }}
        />
      </div>
      {parentTips.map((item) => (
        <div className="module-box" key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.content}</p>
        </div>
      ))}
    </div>
  );
}

export default Parents;
