import React from 'react';
import Label from '../label/label.component';

interface SelectProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    options: {key: string, value: string}[];
    className?: string;
    label?: string;

}
const Select: React.FC<SelectProps> = ({value, onChange, className, label, options}) => {
    return (
        <div className={`inline-block relative my-5 ${className}`}>
             { label &&  <label className='block text-gray-700 text-sm font-bold mb-2'>
                {label}
            </label> }
            <select value={value} onChange={onChange} className="block appearance-none justify-end bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline w-full">
                <option>Select an Option</option>
                {
                   options && options.length && options.map(option => <option key={option.key} value={option.key}>{option.value}</option>)
                }
            </select>
        </div>
    )
}

export default Select