import type { NextApiRequest, NextApiResponse } from "next";
import { COMPANIES } from "@/app/lib/mock";
import { getCompanyById } from "@/app/lib/helpers";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const id = Number(req.query.id);

  const company = getCompanyById(COMPANIES, id);

  if (!company) {
    return res.status(404).json({ error: "Company not found" });
  }

  res.status(200).json({ company });
}
