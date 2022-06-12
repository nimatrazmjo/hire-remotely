import Image from 'next/image';
import React, { useState } from 'react';
import { slideDown, slideUp } from '../../utils/anim';

const ResultTableRow = (result) => {
    const { input, output, score, status, stdout, text, time, index, testType } = result;
    const [expand, setExpand] = useState(false);
    let takenScore = score;
    let refs = React.createRef();

    if (status !== 'success') {
        takenScore = 0
    }
    function expandRow() {
        setExpand(!expand);
        // if (refs.expanderBody) {
        //     slideDown(refs.expanderBody);
        // } else {
        //     slideUp(refs.expanderBody);
        // }
    }
    return (
        <>
            <tr id={`${testType}-${index}`} onClick={expandRow} className="border-b align-middle" >
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
                <td>
                    <span className='w-5 h-5'>
                        {!expand && <svg width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.7071 1.70711C16.0976 1.31658 16.0976 0.683417 15.7071 0.292893C15.3166 -0.0976311 14.6834 -0.0976311 14.2929 0.292893L15.7071 1.70711ZM8 8L7.29289 8.70711C7.48043 8.89464 7.73478 9 8 9C8.26522 9 8.51957 8.89464 8.70711 8.70711L8 8ZM1.70711 0.292893C1.31658 -0.0976311 0.683417 -0.0976311 0.292893 0.292893C-0.0976311 0.683417 -0.0976311 1.31658 0.292893 1.70711L1.70711 0.292893ZM14.2929 0.292893L7.29289 7.29289L8.70711 8.70711L15.7071 1.70711L14.2929 0.292893ZM8.70711 7.29289L1.70711 0.292893L0.292893 1.70711L7.29289 8.70711L8.70711 7.29289Z" fill="#171C45" /></svg>}
                        {expand && <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.292893 7.9323C-0.0976315 8.32282 -0.0976314 8.95599 0.292893 9.34651C0.683417 9.73704 1.31658 9.73704 1.70711 9.34651L0.292893 7.9323ZM8 1.6394L8.70711 0.932298C8.51957 0.744761 8.26522 0.639404 8 0.639405C7.73478 0.639405 7.48043 0.744761 7.29289 0.932298L8 1.6394ZM14.2929 9.34651C14.6834 9.73704 15.3166 9.73704 15.7071 9.34651C16.0976 8.95599 16.0976 8.32282 15.7071 7.9323L14.2929 9.34651ZM1.70711 9.34651L8.70711 2.34651L7.29289 0.932298L0.292893 7.9323L1.70711 9.34651ZM7.29289 2.34651L14.2929 9.34651L15.7071 7.9323L8.70711 0.932298L7.29289 2.34651Z" fill="#171C45" /></svg>}
                    </span>
                </td>
            </tr>
            {
                expand && (
                    <tr id={`${testType}-${index}-expland`}>
                        <td colSpan={5} className="px-5 py-5 bg-zinc-100">
                            <div ref={refs}>
                                <table className='min-w-full '>
                                    <tbody>
                                        <tr className='flex'>
                                            <th className='pr-10 text-left'>Input:</th>
                                            <td>{input}</td>
                                        </tr>
                                        <tr className='flex'>
                                            <th className='pr-10 text-left'>Expected Output:</th>
                                            <td>{output}</td>
                                        </tr>

                                        <tr className='flex'>
                                            <th className='pr-10 text-left'>Given Output:</th>
                                            <td className={status === 'success' ? 'text-teal-400': 'text-red-600'}>{stdout}</td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </td>
                    </tr>
                )
            }
        </>
    )
}

export default ResultTableRow;