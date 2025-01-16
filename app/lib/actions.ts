"use server";

import { CompaniesResponse, Company } from "@/app/lib/types";
import { BASE_URL } from "@/app/lib/constant";

/**
 * Fetches a list of companies from the API,
 * should throw an error if not
 *
 */
export async function getCompanies(): Promise<CompaniesResponse> {
  console.log(BASE_URL, "BASE_URL");
  try {
    const response = await fetch(`${BASE_URL}/api/companies`, {
      headers: {
        "Content-Type": "application/json",
      },
      next: { revalidate: 0 },
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("API Error Response:", errorText);
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    console.log("response: ", response);

    return response.json();
  } catch (error) {
    console.error("Full error details:", error);
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
    const response = await fetch(`${BASE_URL}/api/companies/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.json();
  } catch (error) {
    throw new Error(`Failed to fetch company with ID ${id}: ${error}`);
  }
}
