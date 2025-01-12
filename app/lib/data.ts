export async function getCompanies() {
  try {
    const data = await fetch("http://localhost:3000/api/companies");
    return data.json();
  } catch (error) {
    console.error("Error fetching companies:", error);
    throw new Error(`Failed to fetch list companies: ${error}`);
  }
}
