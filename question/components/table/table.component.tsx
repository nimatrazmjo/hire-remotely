import { Button } from '@material-tailwind/react';
import React from 'react';
import { useDispatch } from 'react-redux';
import { QuestionTestInterface } from '../../interface/question.interface';
import { TableColumnInterface } from '../../interface/table.interface';
import { deleteTest } from '../../redux/question/question.action';

interface tableProps {
    data: any;
    columns: any;
    className?: string;
    onClick?: (e: React.MouseEvent<HTMLTableRowElement, MouseEvent>) => void;
    onDoubleClick?: (e: React.MouseEvent<HTMLTableRowElement, MouseEvent>) => void;
    onContextMenu?: (e: React.MouseEvent<HTMLTableRowElement, MouseEvent>) => void;
    onMouseEnter?: (e: React.MouseEvent<HTMLTableRowElement, MouseEvent>) => void;
    onMouseLeave?: (e: React.MouseEvent<HTMLTableRowElement, MouseEvent>) => void;
    onMouseOver?: (e: React.MouseEvent<HTMLTableRowElement, MouseEvent>) => void;
    onMouseOut?: (e: React.MouseEvent<HTMLTableRowElement, MouseEvent>) => void;
    onDragStart?: (e: React.DragEvent<HTMLTableRowElement>) => void;
    onDrag?: (e: React.DragEvent<HTMLTableRowElement>) => void;
    onDragEnd?: (e: React.DragEvent<HTMLTableRowElement>) => void;
    onDragEnter?: (e: React.DragEvent<HTMLTableRowElement>) => void;
    onDragExit?: (e: React.DragEvent<HTMLTableRowElement>) => void;
    onDragLeave?: (e: React.DragEvent<HTMLTableRowElement>) => void;
    onDragOver?: (e: React.DragEvent<HTMLTableRowElement>) => void;
    onDrop?: (e: React.DragEvent<HTMLTableRowElement>) => void;
    onSelect?: (e: React.MouseEvent<HTMLTableRowElement, MouseEvent>) => void;
    onSelectStart?: (e: React.MouseEvent<HTMLTableRowElement, MouseEvent>) => void;
    onSelectEnd?: (e: React.MouseEvent<HTMLTableRowElement, MouseEvent>) => void;
}

const Table: React.FC<tableProps> = ({
    data,
    columns,
    className,
}) => {
    const dispatch = useDispatch();
    const deleteTestByIndex = (index: number) => dispatch(deleteTest(index));

    return (
        <table className={`table-auto w-full ${className}`}>
            <thead className='border-b bg-slate-200 font-light py-10 justify-start'>
                <tr>
                    {columns.map((column:TableColumnInterface) => (
                        <th key={column.key}>{column.title}</th>
                    ))}
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {data && data.length ? data.map((row:any, index:number) => (
                    <tr key={index} className="border-b align-middle">
                        {columns.map((column: TableColumnInterface) => (
                            <td key={column.key} className="text-sm font-normal text-gray-900 px-6 py-4 text-center">{row[column.key]}</td>
                        ))}
                        <td className="text-sm font-normal text-gray-900 px-6 py-4 text-center">
                        <Button onClick={() => deleteTestByIndex(index)}   className='bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-1 px-2 border border-red-500 hover:border-transparent rounded'> Delete </Button>
                        </td>
                    </tr>
                )):
                <tr>
                    <td colSpan={columns.length} className="text-center text-slate-500 px-6 py-4">No test has been added yet</td>
                </tr>
                }
            </tbody>
        </table>
    );
};

export default Table;