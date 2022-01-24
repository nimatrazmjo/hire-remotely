import { exec, spawn } from "child_process";

const executeJS = (filePath: string) => {
  return new Promise((resolve, reject) => {
    const child = spawn("node", [filePath]);
    
    child.stdout.on("data", (data) => resolve(data));
    child.stderr.on("data", (data) => reject(data.toString()));
    child.stderr.on("exit", (data) => reject(data));
  });
};

export {
  executeJS
}