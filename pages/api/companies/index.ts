// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiResponse } from "next";
import { COMPANIES } from "@/app/lib/mock";

export default function handler(res: NextApiResponse<any>) {
  res.status(200).json({ ...COMPANIES });
}
