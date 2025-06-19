import React, { useState } from 'react';
import { User, Mail, Lock, Eye, EyeOff } from 'lucide-react';
import SocialButtons from './SocialButtons';

interface AuthFormProps {
  isLogin: boolean;
  onToggleMode: () => void;
  onLogin: () => void;
}

const AuthForm: React.FC<AuthFormProps> = ({ isLogin, onToggleMode, onLogin }) => {
  const [formData, setFormData] = useState({
    username: 'Enter Username',
    email: 'Enter your gmail',
    password: '••••••••',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!isLogin && !formData.username.trim()) {
      newErrors.username = 'Username is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (!isLogin && formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsLoading(true);
      
      setTimeout(() => {
        console.log('Form submitted:', formData);
        setIsLoading(false);
        onLogin();
      }, 1500);
    }
  };

  return (
    <div className="w-full max-w-sm mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-8">
        {isLogin ? 'Login' : 'Registration'}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {!isLogin && (
          <div className="relative">
            <input
              type="text"
              placeholder="Enter Username"
            
              onChange={(e) => handleInputChange('username', e.target.value)}
              className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all duration-200"
            />
            <User className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            {errors.username && (
              <p className="text-sm text-red-600 mt-1">{errors.username}</p>
            )}
          </div>
        )}

        <div className="relative">
          <input
            type="email"
            placeholder="Enter your gmail"
            onChange={(e) => handleInputChange('email', e.target.value)}
            className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all duration-200"
          />
          <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          {errors.email && (
            <p className="text-sm text-red-600 mt-1">{errors.email}</p>
          )}
        </div>

        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="••••••••"
            onChange={(e) => handleInputChange('password', e.target.value)}
            className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all duration-200"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
          </button>
          {errors.password && (
            <p className="text-sm text-red-600 mt-1">{errors.password}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-lg font-medium transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
          style={{ backgroundColor: '#6366f1' }}
        >
          {isLoading ? (
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
              {isLogin ? 'Signing In...' : 'Registering...'}
            </div>
          ) : (
            isLogin ? 'Login' : 'Register'
          )}
        </button>
      </form>

      <div className="mt-6">
        <p className="text-center text-sm text-gray-500 mb-4">
          or register with social platforms
        </p>
        <SocialButtons />
      </div>
    </div>
  );
};

export default AuthForm;