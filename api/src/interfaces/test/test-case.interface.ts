export interface ITestCase {
    name: string; // messag of test case
    input: string; // input of test 
    expectedOutput: string; // expected output 
    status: {
        id: number; // 3: accepted, 4: wrong answer
        description: string // Accepted, Wrong Answer
    },
    time: string; // time it took to run
    memory: string; // memory it took to run
    givenOutput: string; // the output which has given by judge0
}