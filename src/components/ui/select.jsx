import React, { useState } from "react";

export function Select({ value, onValueChange, children, className = "", ...props }) {
  return (
    <select
      value={value}
      onChange={e => onValueChange && onValueChange(e.target.value)}
      className={`border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      {...props}
    >
      {children}
    </select>
  );
}

// Dummy components for compatibility with your usage
export const SelectTrigger = ({ children, ...props }) => <>{children}</>;
export const SelectValue = ({ placeholder }) => <option value="">{placeholder}</option>;
export const SelectContent = ({ children }) => <>{children}</>;
export const SelectItem = ({ value, children }) => <option value={value}>{children}</option>;