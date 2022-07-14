import React from 'react';

interface inputProps {
    label: string,
    value: string | number,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    className?: string
}

const Input: React.FC<inputProps> = ({ label, value, onChange, className= '' }) => {
    return (
        <div className={`${className} m-3 inline-block w-full`}>
            <label className='block text-gray-700 text-sm font-bold mb-2'>
                {label}
            </label>
            <input
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                type='text'
                placeholder={label}
                value={value}
                onChange={onChange}
            />
        </div>
    )
}

export default Input;