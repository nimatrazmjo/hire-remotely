import React from 'react';

import Image from 'next/image';

const ResultTable = ({ results }) => {
    return (
        <div className="mx-10  my-10 overflow-hidden">
            <div className="my-5 min-w-full flex justify-between">
                <div className="font-extrabold">Example Test</div>
                <div className="flex">
                    <Image height={25} width={25} src="/star.svg" alt="score" className="px-3 pr-10" />
                    <div className="font-semibold">98% score</div>
                </div>
            </div>
            <table className="min-w-full border">
                <thead className="border-b bg-slate-200 font-light py-10">
                    <tr>
                        <th className="text-sm font-medium text-slate-500 px-6 py-4 text-left">Name of Test</th>
                        <th className="text-sm font-medium text-slate-500 px-6 py-4 text-left">Done</th>
                        <th className="text-sm font-medium text-slate-500 px-6 py-4 text-left">Time</th>
                        <th className="text-sm font-medium text-slate-500 px-6 py-4 text-left">Points</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b align-middle">
                        <td scope="col" className="  text-sm font-normal text-gray-900 px-6 py-4 text-left">
                            <div className="pb-2">Name of the test</div>
                            <span className="text-xs text-gray-400">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</span>
                        </td>
                        <td scope="col" className="text-sm font-normal text-gray-900 px-6 py-4 text-left flex">
                            <Image height={25} width={25} src="/success.svg" alt=" success" />
                            <span className="pl-1">Ok</span>
                        </td>
                        <td scope="col" className="text-sm font-normal text-gray-900 px-6 py-4 text-left ">
                            <div className="flex flex-col">
                            <div className="time pb-2">1.0021s</div>
                            <div className="more text-xs text-gray-400">12 more</div>
                        </div>
                        </td>
                        <td scope="col" className="text-sm font-normal text-gray-900 px-6 py-4 text-left">21/22 points</td>
                    </tr>
                    <tr className="border-b align-middle">
                        <td scope="col" className="text-sm font-normal text-gray-900 px-6 py-4 text-left">
                            <div>Name of the test</div>
                            <span className="text-xs text-gray-400">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</span>
                        </td>
                        <td scope="col" className="text-sm font-normal text-gray-900 px-6 py-4 text-left flex">
                            <Image height={25} width={25} src="/fail.svg" alt=" success" />
                            <span className="pl-1">Ok</span>
                        </td>
                        <td scope="col" className="text-sm font-normal text-gray-900 px-6 py-4 text-left ">
                            <div className="flex flex-col">
                            <div className="time">1.0021s</div>
                            <div className="more text-xs text-gray-400">12 more</div>
                        </div>
                        </td>
                        <td scope="col" className="text-sm font-normal text-gray-900 px-6 py-4 text-left">21/22 points</td>
                    </tr>
                    <tr className="border-b align-middle">
                        <td scope="col" className="text-sm font-normal text-gray-900 px-6 py-4 text-left">
                            <div>Name of the test</div>
                            <span className="text-xs text-gray-400">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</span>
                        </td>
                        <td scope="col" className="text-sm font-normal text-gray-900 px-6 py-4 text-left flex">
                            <Image height={25} width={25} src="/success.svg" alt=" success" />
                            <span className="pl-1">Ok</span>
                        </td>
                        <td scope="col" className="text-sm font-normal text-gray-900 px-6 py-4 text-left ">
                            <div className="flex flex-col">
                            <div className="time">1.0021s</div>
                            <div className="more text-xs text-gray-400">12 more</div>
                        </div>
                        </td>
                        <td scope="col" className="text-sm font-normal text-gray-900 px-6 py-4 text-left">21/22 points</td>
                    </tr>
                    <tr className="border-b align-middle">
                        <td scope="col" className="text-sm font-normal text-gray-900 px-6 py-4 text-left">
                            <div>Name of the test</div>
                            <span className="text-xs text-gray-400">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</span>
                        </td>
                        <td scope="col" className="text-sm font-normal text-gray-900 px-6 py-4 text-left flex">
                            <Image height={25} width={25} src="/fail.svg" alt=" success" />
                            <span className="pl-1">Ok</span>
                        </td>
                        <td scope="col" className="text-sm font-normal text-gray-900 px-6 py-4 text-left ">
                            <div className="flex flex-col">
                            <div className="time">1.0021s</div>
                            <div className="more text-xs text-gray-400">12 more</div>
                        </div>
                        </td>
                        <td scope="col" className="text-sm font-normal text-gray-900 px-6 py-4 text-left">21/22 points</td>
                    </tr>
                    <tr className="border-b align-middle">
                        <td scope="col" className="text-sm font-normal text-gray-900 px-6 py-4 text-left">
                            <div>Name of the test</div>
                            <span className="text-xs text-gray-400">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</span>
                        </td>
                        <td scope="col" className="text-sm font-normal text-gray-900 px-6 py-4 text-left flex">
                            <Image height={25} width={25} src="/success.svg" alt=" success" />
                            <span className="pl-1">Ok</span>
                        </td>
                        <td scope="col" className="text-sm font-normal text-gray-900 px-6 py-4 text-left ">
                            <div className="flex flex-col">
                            <div className="time">1.0021s</div>
                            <div className="more text-xs text-gray-400">12 more</div>
                        </div>
                        </td>
                        <td scope="col" className="text-sm font-normal text-gray-900 px-6 py-4 text-left">21/22 points</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ResultTable;