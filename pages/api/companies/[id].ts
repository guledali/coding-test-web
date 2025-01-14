import type { NextApiRequest, NextApiResponse } from "next";
import { COMPANIES as data } from "@/app/lib/mock";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const { id } = req.query;

  const company = data.find((x) => x.companyId == Number(id));

  if (!company) {
    return res.status(404).json({ error: "Company not found" });
  }

  res.status(200).json({ company });
}
