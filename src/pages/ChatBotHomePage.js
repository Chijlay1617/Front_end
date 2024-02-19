import React from 'react';
import { Layout } from 'antd';
import RobotLogo from '../components/MainPage/RobotLogo';
import QuickAccessButtons from '../components/MainPage/QuickAccessButtons';
import MessageInput from '../components/MainPage/MessageInput';

const { Content } = Layout;

const HomePage = () => {
  return (
    <Content style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: 'auto' }}>
      <div style={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <RobotLogo />
      </div>
      <div style={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <QuickAccessButtons />
      </div>
      <div style={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <MessageInput />
      </div>
    </Content>
  );
};

export default HomePage;
