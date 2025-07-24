import React from 'react';
import '../css/Frame.css';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import { Menu, X, Square, Minus } from 'lucide-react';

const Background = ({ children }) => {
  const navigate = useNavigate();

  // Optional: toggleable menu handler can go here

  return (
    <div className="background">
      {/* 🔧 Custom Title Bar */}
      <div className='top-nav'>

        <div className='mid-nav'>
          <div
            className='nav-icon home-icon'
            style={{ cursor: 'pointer' }}
            onClick={() => navigate('/home')}
          >
            <img src={logo} className="nav-logo" alt="Logo" />
          </div>
        </div>
        <div className='right-nav'>
          <Minus
            className='nav-icon minus-icon'
            onClick={() => window.electronAPI?.minimize?.()}
          />
          <Square
            className='nav-icon square-icon'
            onClick={() => window.electronAPI?.toggleMaximize?.()}
          />
          <X
            className='nav-icon close-icon'
            onClick={() => window.electronAPI?.close?.()}
          />
        </div>
      </div>

      {/* 🔽 Page Content */}
      <div className='scrollable-content'>
        <div className='content'>{children}</div>
      </div>
    </div>
  );
};

export default Background;
