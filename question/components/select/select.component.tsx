import React from 'react';
import Label from '../label/label.component';

interface SelectProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;

}

const Select: React.FC<SelectProps> = ({value, onChange}) => {
    return (
        <div className="inline-block relative w-full my-5">
            <select value={value} onChange={onChange} className="block appearance-none justify-end bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                <option>Select an Language</option>
                <option>Option 2</option>
                <option>Option 3</option>
            </select>
        </div>
    )
}

export default Select