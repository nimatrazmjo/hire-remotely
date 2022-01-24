import { randomUUID } from "crypto"
import { Request, Response } from "express";
import { existsSync, mkdirSync, writeFileSync } from "fs";
import path from "path";
import { json } from "stream/consumers";
import BadRequestError from "../errors/bad-request.error";
import { executeJS } from "../executions/execute-js";
const dirCodes = path.join(__dirname, "../../codes");

if (!existsSync(dirCodes)) {
  mkdirSync(dirCodes, { recursive: true });
}

const generateFileController = async (req: Request, res: Response) =>{
  try {
    const {format = 'js', code} = req.body;
    
    const jobId = randomUUID();
    
    const filename = `${jobId}.${format}`;
    const filepath = path.join(dirCodes, filename);
    await writeFileSync(filepath, code);
    const result = await executeJS(filepath);
    
    res.send(result);
  } catch (error) {
    throw new BadRequestError(error);
  }
  
}

export {
  generateFileController
}