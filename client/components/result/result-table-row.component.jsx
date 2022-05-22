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
            </tr>
            {
                expand && (
                    <tr id={`${testType}-${index}-expland`}>
                        <td colSpan={4} className="px-5 shadow-inner py-5 bg-slate-100">
                            <div ref={refs}>

                            Hello Hellllo
                            </div>
                            </td>
                    </tr>
                )
            }
        </>
    )
}

export default ResultTableRow;