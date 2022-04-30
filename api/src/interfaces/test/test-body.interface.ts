export interface ITestBody {
    redirect_stderr_to_stdout: boolean;
    source_code: string;
    language_id: string;
    stdin: string;
    expected_output: string;
}