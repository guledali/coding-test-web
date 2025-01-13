import { Metadata } from "next";
import { getCompanies } from "@/app/lib/data";
import { CompanyList } from "@/app/ui";

export const metadata: Metadata = {
  title: "Companies - list",
  description: "Showing a list of companies",
};

export default async function Page() {
  const { data: companies } = await getCompanies();

  return (
    <>
      <CompanyList companies={companies} />
    </>
  );
}
