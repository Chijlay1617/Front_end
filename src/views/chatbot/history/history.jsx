import React from 'react';
import './history.css';

const History = () => {
  return (
    <div className="history">
      <input type="search" placeholder="Search" />
      <div className="username">Username</div>
      <div className="topics">
        <div className="topic">Topic 1</div>
        <div className="topic">Topic 2</div>
      </div>
    </div>
  );
}

export default History;
