import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log('req-', req);
  res.status(200).json({ status: 'pong' });
}
