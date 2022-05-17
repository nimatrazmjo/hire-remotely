import React from 'react';

const Score = () => {
    return (
        <div className='bg-gray-200 py-10 px-10 rounded-lg'>
            <svg viewBox="0 0 36 36" className="circular-chart green">
                <path className="circle-bg"
                    d="M18 2.0845
      a 15.9155 15.9155 0 0 1 0 31.831
      a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path className="circle"
                    stroke-dasharray="60, 100"
                    d="M18 2.0845
      a 15.9155 15.9155 0 0 1 0 31.831
      a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <text x="18" y="20.35" className="percentage">60%</text>
                <text x="18" y="20.35" className="score">97/103</text>
            </svg>
        </div>
    );
}

export default Score;