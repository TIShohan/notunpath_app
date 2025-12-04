import React from 'react';
import { useParams } from 'react-router-dom';
import moduleData from '../data/modules.json';

function ModuleDetails() {
  const { id } = useParams();
  const module = moduleData.find(item => item.id === parseInt(id));

  if (!module) {
    return <h2>Module not found</h2>;
  }

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>{module.title}</h1>
      <p><strong>Summary:</strong> {module.description}</p>
      <p>{module.content}</p>
    </div>
  );
}

export default ModuleDetails;
