"use server";

import { Company } from "@/app/lib/types";
import { fetchAllCompanies, fetchCompanyById } from "@/app/lib/data";

/**
 * Fetches a list of companies from the API,
 * should throw an error if not
 *
 */
export async function getCompanies(): Promise<{ companies: Company[] }> {
  try {
    const response = await fetchAllCompanies();
    const companies = await response.json();

    return { companies };
  } catch (error) {
    throw new Error(`Failed to fetch list companies: ${error}`);
  }
}
/**
 * Fetches a single company by ID
 * should throw an error if not
 *
 */
export async function getCompany(
  id: string
): Promise<{ company: Company | null }> {
  const response = await fetchCompanyById(id);
  const company = await response.json();

  return { company };
}
