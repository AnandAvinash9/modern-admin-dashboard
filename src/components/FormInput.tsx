import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface FormInputProps {
  icon: LucideIcon;
  type: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  rightIcon?: LucideIcon;
  onRightIconClick?: () => void;
}

const FormInput: React.FC<FormInputProps> = ({
  icon: Icon,
  type,
  placeholder,
  value,
  onChange,
  error,
  rightIcon: RightIcon,
  onRightIconClick,
}) => {
  return (
    <div className="space-y-1">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Icon className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`block w-full pl-10 pr-${RightIcon ? '10' : '3'} py-3 border rounded-xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
            error 
              ? 'border-red-300 bg-red-50' 
              : 'border-gray-300 bg-gray-50 hover:bg-white focus:bg-white'
          }`}
        />
        {RightIcon && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
            <button
              type="button"
              onClick={onRightIconClick}
              className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
            >
              <RightIcon className="h-5 w-5" />
            </button>
          </div>
        )}
      </div>
      {error && (
        <p className="text-sm text-red-600 ml-1">{error}</p>
      )}
    </div>
  );
};

export default FormInput;