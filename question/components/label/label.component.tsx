import React from 'react';
interface labelProps {
    children: string | undefined;
    className?: string
}
const Label: React.FC<labelProps> = ({ children, className = '' }) => (
    <label className={'block text-slate-400 mb-2 '+ className}>{children} </label>
);

export default Label