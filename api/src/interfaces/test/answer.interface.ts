export interface IJudge0Result {
    text?: string;
    input?: string;
    output?: string;
    testType?: string;
    stdout?: string;
    time?: string;
    memory?: string;
    stderr?: string | null;
    message?: string;
    status?: {
      id: number,
      description: string
    }
  }
  
export type ResultCategory = "example" | "basic" | "advanced" ;
export type ResultType = "pass" | "fail" | "error";
export type ResultStatus = "success" | "failure" | "error";
export type ResultMessage = "Correct Answer" | "Wrong Answer" | "Time Limit Exceeded" | "Memory Limit Exceeded" | "Runtime Error" | "Compile Error";
export interface IResult {
  text: string;
  input: string;
  output: string;
  stdout: string;
}
export interface IAnswer { 
    code: string;
    testResult: Partial<Record<ResultCategory, IResult[]>>;
}