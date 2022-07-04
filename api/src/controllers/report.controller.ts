import { Request, Response } from 'express';
import NotFoundError from '../errors/not-found.error';

import Test from '../models/tests';
import { arrangeTestSubmission } from '../utils/top-answer';

const getReportByHashController = async (req: Request, res: Response) => {
  const { hash } = req.params;
  const report = await Test.find({ hash });
  if (!report) {
    throw new NotFoundError('Report does not found');
  }

  const topAnswer = arrangeTestSubmission(report);
  
  res.status(200).json(topAnswer);
}

export { getReportByHashController };
