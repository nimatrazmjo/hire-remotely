import { Request, Response } from "express";
import BadRequestError from "../errors/bad-request.error";

import axios from 'axios';

const Judge0RunController = async (req: Request, res: Response) => {
  const { language, code } = req.body;

  try {
    const {data} = await axios.post("http://judge0-service:2358/submissions", {
      source_code: code,
      lanuage_id: language,
    });
    console.log(data, "dddd");

    res.send(data);
  } catch (error) {
    new BadRequestError(error.message);
  }
};

export { Judge0RunController };
