import { getCompanies } from "@/app/lib/data";
import { CompanyList } from "@/app/ui";

export default async function Page() {
  const { data: companies } = await getCompanies();

  return (
    <>
      <CompanyList companies={companies} />
    </>
  );
}
