import React, { useState } from 'react';
import AuthContainer from './components/AuthContainer';
import Dashboard from './components/Dashboard';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <div className="min-h-screen">
      {isAuthenticated ? (
        <Dashboard onLogout={handleLogout} />
      ) : (
        <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
          <AuthContainer onLogin={handleLogin} />
        </div>
      )}
    </div>
  );
}

export default App;