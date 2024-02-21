// src/pages/modals/SettingsModal.js

import React, { useState } from 'react';
import { Modal, Menu, Avatar } from 'antd';
import { UserOutlined, SettingOutlined, SlidersOutlined } from '@ant-design/icons';

const SettingsModal = ({ visible, onClose }) => {
  const [currentMenu, setCurrentMenu] = useState('editProfile'); // Defauly show Edit Profile

  const menuItems = [
    { label: 'Edit Profile', key: 'editProfile', icon: <UserOutlined /> },
    { label: 'General', key: 'general', icon: <SettingOutlined /> },
    { label: 'Preferences', key: 'preferences', icon: <SlidersOutlined /> },
  ];

  const renderContent = () => {
    switch (currentMenu) {
      case 'editProfile':
        return <div>Edit Profile Content</div>;
      case 'general':
        return <div>General Settings Content</div>;
      case 'preferences':
        return <div>Preferences Content</div>;
      default:
        return <div>Content not found</div>;
    }
  };

  return (
    <Modal
      title={null}
      visible={visible}
      onCancel={onClose}
      footer={null}
      width={600}
      bodyStyle={{ padding: 0 }}
    >
      <div style={{ backgroundColor: '#f0f0f0', padding: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Avatar size={48} icon={<UserOutlined />} />
        <h1 style={{ margin: '16px 0', color: 'black' }}>Name</h1>
        <p style={{ color: 'grey' }}>Occupation, Department</p>
      </div>
      <Menu
        onClick={(e) => setCurrentMenu(e.key)}
        selectedKeys={[currentMenu]}
        mode="inline"
        items={menuItems}
      />
      <div style={{ padding: '16px' }}>
        {renderContent()}
      </div>
    </Modal>
  );
};

export default SettingsModal;
