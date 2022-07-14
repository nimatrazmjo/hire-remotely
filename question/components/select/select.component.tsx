import React from 'react';
import Label from '../label/label.component';

interface SelectProps {

}

const Select: React.FC<SelectProps> = () => {
    return (
        <div className="inline-block relative w-full justify-end my-5">
            <select className="block appearance-none justify-end bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                <option>Select an Language</option>
                <option>Option 2</option>
                <option>Option 3</option>
            </select>
        </div>
    )
}

export default Select