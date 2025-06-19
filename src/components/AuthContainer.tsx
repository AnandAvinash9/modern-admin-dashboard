import React, { useState } from 'react';
import AuthForm from './AuthForm';
import WelcomePanel from './WelcomePanel';

interface AuthContainerProps {
  onLogin: () => void;
}

const AuthContainer: React.FC<AuthContainerProps> = ({ onLogin }) => {
  const [isLogin, setIsLogin] = useState(false);

  const toggleMode = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4" style={{ background: 'linear-gradient(135deg, #e8e9f3 0%, #d3d4e8 100%)' }}>
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden relative" style={{ height: '500px' }}>
        <div className="flex h-full">
          {/* Left side - Form */}
          <div className="w-1/2 p-8 flex flex-col justify-center">
            <AuthForm isLogin={isLogin} onToggleMode={toggleMode} onLogin={onLogin} />
          </div>
          
          {/* Right side - Welcome Panel with curved design */}
          <div className="w-1/2 relative">
            <div 
              className="h-full flex flex-col justify-center items-center text-white relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #3b82f6 100%)',
                clipPath: 'polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)'
              }}
            >
              <WelcomePanel isLogin={isLogin} onToggleMode={toggleMode} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthContainer;