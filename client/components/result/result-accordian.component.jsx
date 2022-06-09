import { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody
} from "@material-tailwind/react";

export default function ResultList() {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <>
      <Accordion open={open === 1} onClick={() => handleOpen(1)}>
        <AccordionHeader className='bg-slate-200 text-state-800 px-5'>Result 3</AccordionHeader>
        <AccordionBody>
          We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our 
          dreams.
        </AccordionBody>
      </Accordion>
      <Accordion className='py-1' open={open === 2} onClick={() => handleOpen(2)}>
        <AccordionHeader className='bg-slate-200 text-slate-800 px-5'>Result 2</AccordionHeader>
        <AccordionBody>
          We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our
          dreams.
        </AccordionBody>
      </Accordion>
      <Accordion className='py-1' open={open === 3} onClick={() => handleOpen(3)}>
        <AccordionHeader className='bg-slate-200 text-slate-800 px-5'>Result 1</AccordionHeader>
        <AccordionBody>
          We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our
          dreams.
        </AccordionBody>
      </Accordion>
    </>
  );
}