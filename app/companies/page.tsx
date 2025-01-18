import { Suspense } from "react";
import { Metadata } from "next";
import { getCompanies } from "@/app/lib/actions";
import { CompanyList } from "@/app/ui";

export const metadata: Metadata = {
  title: "Companies - list",
  description: "Showing a list of companies",
};

export default async function Page() {
  const { companies } = await getCompanies();

  return (
    <>
      <Suspense fallback={<p>Loading companies...</p>}>
        <CompanyList companies={companies} />
      </Suspense>
    </>
  );
}
