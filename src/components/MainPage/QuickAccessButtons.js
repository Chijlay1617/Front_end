import React from 'react';
import { Button } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';


const QuickAccessButtons = () => {
    const buttons = [
        { key: '1', label: 'Function 1', icon: <AppstoreOutlined />, onClick: () => { /* function 1 */ } },
        { key: '2', label: 'Function 2', icon: <MailOutlined />, onClick: () => { /* function 2 */ } },
        { key: '3', label: 'Function 3', icon: <SettingOutlined />, onClick: () => { /* function 3 */ } },
        { key: '4', label: 'Function 4', icon: <UserOutlined />, onClick: () => { /* function 4 */ } }
    ];

    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gridTemplateRows: '1fr 1fr', 
            gap: '40px',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '40px',
            height: '240px',
        }}>
            {buttons.map((button) => (
                <Button 
                    key={button.key} 
                    type="default" 
                    onClick={button.onClick}
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'flex-start',
                        justifyContent: 'flex-start',
                        fontSize: '16px',
                        color: 'black',
                        height: '100px',
                        width: '360px',
                        border: '1px solid #d9d9d9',
                        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.3)',
                        padding: '10px',
                        textAlign: 'left',
                    }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        {button.icon}
                        <span>{button.label}</span>
                    </div>
                </Button>
            ))}
        </div>
    );
};

export default QuickAccessButtons;