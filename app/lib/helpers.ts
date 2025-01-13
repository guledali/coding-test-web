import { Company } from "./types";

/**
 * get list of available companies
 * can be used in showcase companoes
 *
 */
export function listOfCompanies(companies: Company[]): number {
  return companies.length;
}
/**
 * Used for checking if this is an detail page
 * can be used for displaying home button
 *
 */
export const isCompanyDetailRoute = (pathname: string | null): boolean => {
  if (!pathname) {
    return false;
  }

  return /^\/companies\/\d+$/.test(pathname);
};
