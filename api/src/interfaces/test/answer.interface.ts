export interface IResult {
    text: string;
    input: string;
    output: string;
    testType: string;
    stdout: string;
    time: string;
    memory: string;
    stderr: string | null;
    message: string;
    status: {
      id: number,
      description: string
    }
  }
  
  export type ResultCategory = "example" | "basic" | "advanced" | "memory" | "performance"
export interface IAnswer { 
    code: string;
    testResult: Partial<Record<ResultCategory, IResult[]>>;
}