import { Request, Response } from "express";
import BadRequestError from "../errors/bad-request.error";
import { Buffer } from "buffer";
import axios from "axios";

const Judge0RunController = async (req: Request, res: Response) => {
  const { language_id, source_code } = req.body;

  try {
    const { data } = await axios.post(
      "http://104.154.92.155//submissions?base64_encoded=true&wait=true",
      {
        command_line_arguments: "",
        compiler_options: "",
        redirect_stderr_to_stdout: true,
        source_code: Buffer.from(source_code).toString('base64'),
        language_id,
        stdin: "MwozIDIKMSAyIDUKMiAzIDcKMSAzCjMgMwoxIDIgNAoxIDMgNwoyIDMgMQoxIDMKMyAxCjEgMiA0CjEgMwo="
      }
    );
    const message = Buffer.from(data.stdout,'base64').toString('utf-8');
    console.log(message, 'Messageeee');
    
    res.send(message);
  } catch (error) {
    new BadRequestError(error.message);
  }
};

export { Judge0RunController };
