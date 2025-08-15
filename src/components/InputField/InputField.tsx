import React from 'react';
import { InputFieldProps } from '../../types/inputField';
import clsx from 'clsx';

const sizeClasses = {
  sm: 'px-2 py-1 text-sm',
  md: 'px-3 py-2 text-base',
  lg: 'px-4 py-3 text-lg'
};

const variantClasses = {
  filled: 'bg-gray-100 border border-transparent focus:border-blue-500',
  outlined: 'border border-gray-300 focus:border-blue-500',
  ghost: 'bg-transparent border-b border-gray-300 focus:border-blue-500'
};

export const InputField: React.FC<InputFieldProps> = ({
  value,
  onChange,
  label,
  placeholder,
  helperText,
  errorMessage,
  disabled,
  invalid,
  variant = 'outlined',
  size = 'md'
}) => {
  return (
    <div className="flex flex-col w-full">
      {label && <label className="mb-1 text-sm font-medium">{label}</label>}
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        className={clsx(
          'rounded outline-none transition',
          sizeClasses[size],
          variantClasses[variant],
          {
            'border-red-500': invalid,
            'opacity-50 cursor-not-allowed': disabled
          }
        )}
      />
      {invalid && errorMessage ? (
        <span className="mt-1 text-xs text-red-500">{errorMessage}</span>
      ) : helperText ? (
        <span className="mt-1 text-xs text-gray-500">{helperText}</span>
      ) : null}
    </div>
  );
};

export default InputField;