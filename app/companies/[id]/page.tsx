import { Suspense } from "react";
import { getCompany } from "@/app/lib/data";
import { DetailCompany } from "@/app/ui";
import { notFound } from "next/navigation";

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = params.id;

  const { company } = await getCompany(id);

  if (!company) {
    return notFound();
  }

  return (
    <>
      <Suspense fallback={<p>Loading detail page...</p>}>
        <DetailCompany company={company} />
      </Suspense>
    </>
  );
}
