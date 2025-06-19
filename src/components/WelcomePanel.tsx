import React from 'react';

interface WelcomePanelProps {
  isLogin: boolean;
  onToggleMode: () => void;
}

const WelcomePanel: React.FC<WelcomePanelProps> = ({ isLogin, onToggleMode }) => {
  return (
    <div className="text-center z-10 px-8">
      <h2 className="text-4xl font-bold mb-4">
        {isLogin ? 'Hello, Friend!' : 'Welcome Back!'}
      </h2>
      <p className="text-lg mb-8 opacity-90">
        {isLogin 
          ? 'Enter your personal details and start your journey with us'
          : 'Already have an account?'
        }
      </p>
      <button
        onClick={onToggleMode}
        className="bg-transparent border-2 border-white text-white px-8 py-2 rounded-full font-medium hover:bg-white hover:text-blue-600 transition-all duration-300"
      >
        {isLogin ? 'Sign Up' : 'Login'}
      </button>
    </div>
  );
};

export default WelcomePanel;