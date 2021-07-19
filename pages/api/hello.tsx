// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiResponse, NextApiRequest } from "next";

export default function handler(_: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ name: "John Doe" });
}
