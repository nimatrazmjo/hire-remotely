import React from 'react';
interface labelProps {
    children: string | undefined;
    className?: string
}
const Label: React.FC<labelProps> = ({ children, className = '' }) => (
    <label className={className + ' block text-slate-500 font-bold mb-2'}>{children} </label>
);

export default Label