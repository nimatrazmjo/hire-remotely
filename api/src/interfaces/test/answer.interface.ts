export interface IJudge0Result {
    text?: string;
    input?: string;
    output?: string;
    testType?: string;
    stdout?: string;
    time?: number;
    memory?: string;
    stderr?: string | null;
    message?: string;
    status?: {
      id: number,
      description: string
    };
    score?: string;
  }

export type ResultCategory = "example" | "basic" | "advanced" ;
export type ResultStatus = "success" | "failure" | "error";
export type ResultMessage = "In Queue" | "Accepted" | "Wrong Answer" | "Time Limit Exceeded" | "Compilation Error" | "Runtime Error (SIGSEGV)" | "Runtime Error (SIGXFSZ)" | "Runtime Error (SIGFPE)" | "Internal Error" | "Exec Format Error";
export interface IResult {
  text: string;
  input: string;
  stdout: string;
  status: ResultStatus;
  message: ResultMessage;
  score?: string;
  time?: number;
}
export interface IAnswer {
    code: string;
    testResult: Partial<Record<ResultCategory, IResult[]>>;
}