import { NextApiResponse, NextApiRequest } from 'next'
import { people } from '../../../data'
import { Person } from '../../../interfaces'
// @ts-ignore
import tracker from '@middleware.io/agent-apm-nextjs';

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Person[]>
) {
        tracker.info("Info-People page opened..");
        tracker.warn("Warn-People page opened..", {
            "tester": "Jagrut",
        });
        tracker.debug("Debug Sample");
        tracker.error("Error Sample");
  return res.status(200).json(people)
}
