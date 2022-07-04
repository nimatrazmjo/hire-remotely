import React from 'react';
import Image from 'next/image';

import ResultTableRow from './result-table-row.component';
import { calculatePercenTage } from '../../utils/calculate-percentage';

const ResultTable= ({testType, takenScore, totalScore, results  }) => {
    return (
        <div className="mx-10 py-10 overflow-hidden">
            <div className="my-5 min-w-full flex justify-between">
                <div className="font-extrabold">{testType.charAt(0).toUpperCase() + testType.slice(1)} Test</div>
                <div className="flex">
                    <Image height={25} width={25} src="/star.svg" alt="score" className="px-3 pr-10" />
                    <div className="font-semibold">{calculatePercenTage(takenScore,totalScore)}% score</div>
                </div>
            </div>
            <table className="min-w-full border">
                <thead className="border-b bg-slate-200 font-light py-10">
                    <tr>
                        <th className="text-sm font-medium text-slate-500 px-6 py-4 text-left">Name of Test</th>
                        <th className="text-sm font-medium text-slate-500 px-6 py-4 text-left">Done</th>
                        <th className="text-sm font-medium text-slate-500 px-6 py-4 text-left">Time</th>
                        <th className="text-sm font-medium text-slate-500 px-6 py-4 text-left">Points</th>
                        <th className="text-sm font-medium text-slate-500 px-6 py-4 text-left"></th>
                    </tr>
                </thead>
                <tbody>
                   {
                       results.map((result, index) => <ResultTableRow key={index} index={index} testType={testType}  {...result} />)
                   }
                </tbody>
            </table>
        </div>
    )
}

export default ResultTable;