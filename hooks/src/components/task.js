import React from 'react';

const Task = ({ title, completed, onToggle }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <input
        type="checkbox"
        checked={completed}
        onChange={onToggle}
      />
      <span style={{ textDecoration: completed ? 'line-through' : 'none', marginLeft: '8px' }}>
        {title}
      </span>
    </div>
  );
};

export default Task;
