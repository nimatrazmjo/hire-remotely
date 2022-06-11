import React from 'react';
import { useSelector } from 'react-redux';
import { selectCompileResult } from '../../state/compile-result/compile-result.reselector';
import { calculatePercenTage } from '../../utils/calculate-percentage';

const Score = () => {

    const { compile } = useSelector(selectCompileResult);
    let takenScore = 0;
    let totalScore = 100;
    console.log(compile, 'complile');
    if (compile) {
        takenScore = compile.takenScore;
        totalScore = compile.totalScore;
    }
    const percentage = calculatePercenTage(takenScore, totalScore);
    const color = percentage < 50 ? 'orange' : percentage < 80 ? 'blue' : 'green';

    return (
        <div className='bg-slate-200 py-10 px-10 rounded-lg'>
            <svg viewBox="0 0 36 36" className={`circular-chart ${color}`}>
                <path className="circle-bg"
                    d="M18 2.0845
      a 15.9155 15.9155 0 0 1 0 31.831
      a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path className="circle"
                    strokeDasharray={`${percentage} 100`}
                    d="M18 2.0845
      a 15.9155 15.9155 0 0 1 0 31.831
      a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <text x="18" y="20.35" className="percentage">{calculatePercenTage(takenScore, totalScore)}%</text>
                <text x="18" y="20.35" className="score">{takenScore}/{totalScore}</text>
            </svg>
        </div>
    );
}

export default Score;