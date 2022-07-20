import React from 'react';

interface errorProps {
  errors: {
    field: string;
    message: string;
  }[]
}

const Error: React.FC<errorProps> = ({ errors }) => (
  <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
    {errors.map((error, index) => (
      <div key={index}>
        <span className='font-bold'>{error.field}:</span>
        <span className='block sm:inline px-4'>{error.message}</span>
      </div>
    ))}
  </div>
);

export default Error;