// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { COMPANIES } from "@/app/lib/mock";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  res.status(200).json({ data: COMPANIES });
}
