import { CompaniesResponse, Company } from "@/app/lib/types";

/**
 * Fetches a list of companies from the API,
 * should throw an error if not
 *
 */
export async function getCompanies(): Promise<CompaniesResponse> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
    const data = await fetch(`${baseUrl}/api/companies`, {
      cache: "force-cache",
    });

    return data.json();
  } catch (error) {
    throw new Error(`Failed to fetch list companies: ${error}`);
  }
}

/**
 * Fetches a single company by ID
 * should throw an error if not
 *
 */
export async function getCompany(id: string): Promise<{ company: Company }> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
    const response = await fetch(`${baseUrl}/api/companies/${id}`, {
      cache: "force-cache",
    });

    return response.json();
  } catch (error) {
    throw new Error(`Failed to fetch company with ID ${id}: ${error}`);
  }
}
