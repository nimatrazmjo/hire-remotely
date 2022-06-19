export interface IJudge0Result {
  text?: string;
  input?: string;
  expected_output?: string;
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

export type ResultCategory = "example" | "basic" | "advanced";
export type ResultStatus = "success" | "failure" | "error";
export type ResultMessage = "In Queue" | "Accepted" | "Wrong Answer" | "Time Limit Exceeded" | "Compilation Error" | "Runtime Error (SIGSEGV)" | "Runtime Error (SIGXFSZ)" | "Runtime Error (SIGFPE)" | "Internal Error" | "Exec Format Error";
export interface IResult {
  text: string;
  input: string;
  stdout: string; // judge0 output
  output: string; // expected output
  status: ResultStatus;
  message: ResultMessage;
  totalScore?: number;
  takenScore: number
  time?: number;
}

export interface IFormattedResult {
  testType: string;
  totalScore: number;
  takenScore: number;
  languageId: string;
  results: IResult[];
}

export interface IAnswer {
  totalScore: number;
  takenScore: number;
  code: string;
  languageId: string;
  results: IFormattedResult[];
}