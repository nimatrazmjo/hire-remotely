import test from 'node:test';
import React from 'react';
import { useSelector } from 'react-redux';
import { QuestionTestInterface } from '../../interface/question.interface';
import Table from '../table/table.component';

interface ListQuestionTestCaseProps {
}

const ListQuestionTestCases: React.FC<ListQuestionTestCaseProps> = () => {
    const {tests} = useSelector((state: any) => state.question);
    const column:{title: string, key: string}[]=  [
        {
            title:'Test Case',
            key: 'text'
        },
        {
            title: 'Input',
            key: 'input'
        },
        {
            title: 'Output',
            key: 'output'
        },
        {
            title: 'Score',
            key: 'score'
        }];

    return (
        <div>
            <Table columns={column} data={tests}/>
        </div>
    );
}

export default ListQuestionTestCases;