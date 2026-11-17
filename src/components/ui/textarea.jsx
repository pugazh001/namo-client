import React from "react";

export const Textarea = React.forwardRef(({ className = "", ...props }, ref) => (
  <textarea
    ref={ref}
    className={`w-full block border border-gray-300 rounded-xl px-4 py-3 text-gray-900 bg-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--secondary)] focus:border-transparent transition-all shadow-sm resize-y ${className}`}
    {...props}
  />
));
