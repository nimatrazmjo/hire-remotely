import Image from 'next/image';
import React from 'react';

const ResultTableRow = (result) => {
    const { input, output, score, status, stdout, text, time } = result;
    let takenScore = score
    if (status !== 'success') {
        takenScore = 0
    }
    return (
        <tr className="border-b align-middle">
            <td scope="col" className="  text-sm font-normal text-gray-900 px-6 py-4 text-left">
                <div className="pb-2">{text}</div>
                {/* <span className="text-xs text-gray-400">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</span> */}
            </td>
            <td scope="col" className="text-sm font-normal text-gray-900 px-6 py-4 text-left flex">
                {
                    status === 'success' ?
                        <>
                            <Image height={25} width={25} src="/success.svg" alt=" success" />
                            <span className="pl-1">Ok</span>
                        </>
                        :
                        <>
                            <Image height={25} width={25} src="/fail.svg" alt=" success" />
                            <span className="pl-1">Fail</span>
                        </>
                }

            </td>
            <td scope="col" className="text-sm font-normal text-gray-900 px-6 py-4 text-left ">
                <div className="flex flex-col">
                    <div className="time pb-2">{time}s</div>
                    {/* <div className="more text-xs text-gray-400">12 more</div> */}
                </div>
            </td>
            <td scope="col" className="text-sm font-normal text-gray-900 px-6 py-4 text-left">{takenScore}/{score} points</td>
        </tr>
    )
}

export default ResultTableRow;