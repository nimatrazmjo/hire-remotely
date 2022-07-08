

export interface QuestionSnippetInterface {
    language: string;
    snippet: string;
}

export interface QuestionTestInterface {
    text: string;
    testType: string;
    input: string;
    output: string;
    score: number;
}

export interface QuestionInterface {
    question: string;
    snippets: QuestionSnippetInterface[];
    tests: QuestionTestInterface[];
}
