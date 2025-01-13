import { getCompanies } from "@/app/lib/data";
import { listOfCompanies } from "@/app/lib/helpers";
import { Showcase } from "@/app/ui";

export default async function Page() {
  const { data: companies } = await getCompanies();

  const companiesListed = listOfCompanies(companies);

  return (
    <main>
      <Showcase companiesListed={companiesListed} />
    </main>
  );
}
