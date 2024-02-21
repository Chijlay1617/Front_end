// src/components/Navbar/index.js

import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { HomeOutlined, ScheduleOutlined, MessageOutlined, CommentOutlined, UserOutlined } from '@ant-design/icons';
import SettingsModal from '../../pages/modals/settings';

const { Header } = Layout;

const Navbar = ({ username }) => {
    const [isSettingsModalVisible, setSettingsModalVisible] = useState(false);

    const showSettingsModal = () => {
      setSettingsModalVisible(true);
    };
  
    const closeSettingsModal = () => {
      setSettingsModalVisible(false);
    };

    return (
        <Header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 50px' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['3']}>
                    <Menu.Item key="1" icon={<HomeOutlined />}>
                        Home
                    </Menu.Item>
                    <Menu.Item key="2" icon={<ScheduleOutlined />}>
                        Schedule
                    </Menu.Item>
                    <Menu.Item key="3" icon={<CommentOutlined />}>
                        ChatBot
                    </Menu.Item>
                </Menu>
            </div>
            <div style={{ display: 'flex', marginLeft: 'auto' }}>
                <Menu theme="dark" mode="horizontal">
                    <Menu.Item key="4" icon={<MessageOutlined />}>
                        Message
                    </Menu.Item>
                </Menu>
                <div style={{ display: 'flex', alignItems: 'center', marginLeft: '24px' }} onClick={showSettingsModal}>
                    <UserOutlined style={{ fontSize: '24px', color: '#fff' }} />
                    <span style={{ color: '#fff', marginLeft: '10px' }}>{username}</span>
                </div>
                <SettingsModal visible={isSettingsModalVisible} onClose={closeSettingsModal} />
            </div>
        </Header>
    );
};

export default Navbar;
