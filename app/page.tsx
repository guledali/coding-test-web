import { Inter } from "next/font/google";
import { getCompanies } from "@/app/lib/data";
const inter = Inter({ subsets: ["latin"] });

export default async function Page() {
  const companies = await getCompanies();
  console.log(companies, "companies");

  // const [stuff1, setStuff1] = useState<any>([]);
  // useEffect(() => {
  //   // declare the data fetching function
  //   const fetchData = async () => {
  //     const data = await fetch("/api/companies");
  //     const data2 = await data.json();
  //     console.log(data2);
  //     setStuff1(data2);
  //   };

  //   // call the function
  //   fetchData()
  //     // make sure to catch any error
  //     .catch(console.error);
  // }, []);

  return (
    <main>
      <h2 className={inter.className}>Quartr</h2>
      <p className={inter.className}>Trending companies</p>
      <p>{JSON.stringify(companies)}</p>
    </main>
  );
}
