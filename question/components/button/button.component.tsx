import React from 'react';
interface buttonProps {
    className?: string;
    onClick?: () => void;
    children: string;

}

const Button: React.FC<buttonProps> = ({className, children, onClick}) => {
    return (<>
        <button onClick={onClick} className={` hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded ${className} `}>
            {children}
        </button>
    </>);
}

export default Button