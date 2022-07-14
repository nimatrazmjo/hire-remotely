import React from 'react';
import Label from '../label/label.component';

interface SelectProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    className?: string;

}

const Select: React.FC<SelectProps> = ({value, onChange, className}) => {
    return (
        <div className={`inline-block relative my-5 ${className}`}>
            <select value={value} onChange={onChange} className="block appearance-none justify-end bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                <option>Select an Language</option>
                <option>Option 2</option>
                <option>Option 3</option>
            </select>
        </div>
    )
}

export default Select