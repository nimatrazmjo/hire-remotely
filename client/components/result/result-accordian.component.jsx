import { useState } from "react";
import { Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";
import { useSelector } from 'react-redux';
import { selectResult } from '../../state/result/result.reselector';
import ResultTable from './result-table.component';
import { calculatePercenTage } from '../../utils/calculate-percentage';

export default function ResultList({ index, ...item }) {
  index = index + 1;
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const { results } = item;
  if (!results) {
    return null;
  }
  return (
    <>
      <Accordion className='pb-1' open={open === index}>
        <AccordionHeader onClick={() => handleOpen(index)} className='bg-slate-200 text-state-800 px-5 d-flex text-slate-700'><div className='flex-grow text-left text-sm'>Result {index}</div>  <div className='mr-10 text-sm'>{calculatePercenTage(item.takenScore, item.totalScore)}% score </div></AccordionHeader>
        <AccordionBody className='bg-slate-50'>
          {results.map((result, index) => <ResultTable key={index} index={index} {...result} />)}
        </AccordionBody>
      </Accordion>
    </>
  );
}