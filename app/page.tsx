import { Metadata } from "next";
import { getCompanies } from "@/app/lib/actions";
import { listOfCompanies } from "@/app/lib/helpers";
import { Showcase } from "@/app/ui";

export const metadata: Metadata = {
  title: "Homepage",
  description: "Home banner for the company listing",
};

export default async function Page() {
  const { data: companies } = await getCompanies();
  console.log("companies: ", companies);

  const companiesListed = listOfCompanies(companies);

  return (
    <main>
      <Showcase companiesListed={companiesListed} />
    </main>
  );
}
