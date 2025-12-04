import React from 'react';
import { Link } from 'react-router-dom';
import moduleData from '../data/modules.json';

function Modules() {
  return (
    <div>
      <h1>Learning Modules</h1>
      {moduleData.map((item) => (
        <div className="module-box" key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <Link to={`/modules/${item.id}`}>Read More</Link>
        </div>
      ))}
    </div>
  );
}

export default Modules;
