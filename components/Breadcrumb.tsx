"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Breadcrumb() {
  const pathname = usePathname();

  let pathSegments: string[] = [];

  if (pathname === "/") {
    pathSegments = ["README.md"];
  } else if (pathname === "/root") {
    pathSegments = [];
  } else {
    pathSegments = pathname.slice(1).split("/").filter(seg => seg !== "root");
  }

  const breadcrumbs = ["home", ...pathSegments];

  return (
    <nav className="flex items-center space-x-1 text-2xl font-sans text-black mb-4">
      {breadcrumbs.map((segment, index) => {
        const href =
          index === 0
            ? "/root"
            : "/" + pathSegments.slice(0, index).join("/");

        return (
          <span key={index} className="flex items-center">
            {index > 0 && <span className="mx-1">&lt;</span>}

            {index === breadcrumbs.length - 1 ? (
              <span className="font-bold">{segment}</span>
            ) : (
              <Link href={href} className="hover:underline">
                {segment}
              </Link>
            )}
          </span>
        );
      })}
    </nav>
  );
}