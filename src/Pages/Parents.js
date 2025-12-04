import React from 'react';
import parentTips from '../data/parents.json';

function Parents() {
  return (
    <div>
      <h1>Guidance for Parents</h1>
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
