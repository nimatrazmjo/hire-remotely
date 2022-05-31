export interface Judge0Output {
    stdout: string;
    stderr: string | null;
    status_id: string;
    language_id: number;
    stdin: string;
    expected_output: string;
    message: string | null;
    status: {
        id: number;
        status: string
    };
    token: string
}