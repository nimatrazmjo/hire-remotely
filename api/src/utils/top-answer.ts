import { IReport } from './../interfaces/report/report.interface';
import { ITest } from 'src/interfaces/test/test.interface';
import { IAnswer } from './../interfaces/test/answer.interface';
const returnTopAnswer = (answers: IAnswer[]): IAnswer | {} => {
    const topAnswer = answers.sort((a, b) => b.takenScore - a.takenScore)[0];
    if (!topAnswer) return {};
    return topAnswer;
}

const arrangeTestSubmission = (test: ITest[]): IReport[] => {
    const report: IReport[] = [];
    test.forEach(t => {
        const topAnswer = returnTopAnswer(t.submissions);
        report.push({
            hash: t.hash,
            question: t.question,
            submissions: topAnswer
        });
    }
    );
    return report;
}


export { arrangeTestSubmission };
  