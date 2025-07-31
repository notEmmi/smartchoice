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
        {/* Tab 1 - Logo/Home */}
        <div className='tab1'>
          <div
            className='nav-icon home-icon'
            style={{ cursor: 'pointer' }}
            onClick={() => {
              navigate('/home');
              window.location.reload();
            }}
          >
            <img src={logo} className="nav-logo" alt="Logo" />
            <span>SmartChoice</span>
          </div>
        </div>
        
        {/* Tab 2 - About */}
        <div className='tab2'>
          <div
            className='nav-tab'
            onClick={() => navigate('/about')}
          >
            About
          </div>
        </div>
        
        {/* Tab 3 - Help */}
        <div className='tab3'>
          <div
            className='nav-tab'
            onClick={() => navigate('/help')}
          >
            Help
          </div>
        </div>
        
        {/* Tab 4 - Window Controls */}
        <div className='tab4'>
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
