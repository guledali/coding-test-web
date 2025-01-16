import { Suspense } from "react";
import { Metadata } from "next";
import { getCompanies } from "@/app/lib/actions";
import { CompanyList } from "@/app/ui";

export const metadata: Metadata = {
  title: "Companies - list",
  description: "Showing a list of companies",
};

export default async function Page() {
  const { data: companies } = await getCompanies();
  console.log("companies: ", companies);

  return (
    <>
      <Suspense fallback={<p>Loading companies...</p>}>
        <CompanyList companies={companies} />
      </Suspense>
    </>
  );
}
