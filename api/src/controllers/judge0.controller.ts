import { Request, Response } from "express";
import BadRequestError from "../errors/bad-request.error";
import { Buffer } from "buffer";
import axios from "axios";

const Judge0RunController = async (req: Request, res: Response) => {
  const { language_id, source_code } = req.body;

  try {
    const { data } = await axios.post(
      "http://judge0-service:2358/submissions?base64_encoded=true&wait=true",
      {
        command_line_arguments: "",
        compiler_options: "",
        redirect_stderr_to_stdout: true,
        source_code: Buffer.from(source_code).toString('base64'),
        language_id,
        stdin: "MwozIDIKMSAyIDUKMiAzIDcKMSAzCjMgMwoxIDIgNAoxIDMgNwoyIDMgMQoxIDMKMyAxCjEgMiA0CjEgMwo="
      }
    );
    console.log(data, "dddd");

    res.send(data);
  } catch (error) {
    new BadRequestError(error.message);
  }
};

export { Judge0RunController };
