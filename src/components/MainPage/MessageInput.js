// src/components/MessageInput.js

import React from 'react';
import { Input, Button } from 'antd';
import { SendOutlined } from '@ant-design/icons';

const MessageInput = () => {
    const sendButton = {key: '1', icon: <SendOutlined />, onClick: () => { /* Send message function */ }};
    return (
        <div style={{ display: 'flex', alignItems: 'center', margin: '80px 0', gap: '10px', width: '100%', }}>
            <Input
                style={{
                borderRadius: '20px',
                padding: '10px 20px',
                width: '760px',
                height: '40px',
                backgroundColor: '#f0f0f0',
                border: '1px solid #d9d9d9',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                }}
                placeholder="Type your message here..."
            />
            <Button
                key={sendButton.key}
                type="primary"
                icon={sendButton.icon}
                style={{
                    borderRadius: '20%',
                    padding: '10px',
                    fontSize: '16px',
                    height: '40px',
                    width: '40px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center', 
                }}
            >
            </Button>
        </div>
    );
    };

export default MessageInput;
