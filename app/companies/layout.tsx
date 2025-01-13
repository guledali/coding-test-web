"use client";

import { Inter } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { isCompanyDetailRoute } from "@/app/lib/helpers";

const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <main>
      <h2 className={inter.className}>Quartr</h2>
      <p className={inter.className}>Trending companies</p>
      <div>{children}</div>

      {isCompanyDetailRoute(pathname) && (
        <Link href="/companies" className="back-button">
          ← Back to Companies
        </Link>
      )}
    </main>
  );
}
