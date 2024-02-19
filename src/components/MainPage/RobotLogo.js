import React from 'react';
import robotImage from '../assets/chatbot.png';

const RobotLogo = () => {
  return (
    <div>
      <img src={robotImage} alt="Robot Logo" style={{ maxWidth: '100%', height: 'auto' }} />
    </div>
  );
};

export default RobotLogo;
