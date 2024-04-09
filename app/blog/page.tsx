import Container from "@/components/container";

import Link from "next/link";

export default function Blog() {
  return (
    <Container>
      <div className="flex sm:space-x-24 py-8">
        <div className="hidden h-full max-h-screen min-w-[280px] max-w-[280px] flex-wrap overflow-auto rounded bg-gray-50 pt-5 shadow-md dark:bg-gray-900/70 dark:shadow-gray-800/40 sm:flex">
          <div className="px-6 py-4">
            <h3 className="font-bold uppercase text-pink-500">
              Semua Postingan
            </h3>
            <ul>
              <li className="my-3">
                <Link
                  href=""
                  className="px-3 py-2 text-sm font-medium uppercase text-gray-500 hover:text-pink-500 dark:text-gray-300 dark:hover:text-pink-500"
                >
                  NEXT-JS(6)
                </Link>
              </li>
              <li className="my-3">
                <Link
                  href=""
                  className="px-3 py-2 text-sm font-medium uppercase text-gray-500 hover:text-pink-500 dark:text-gray-300 dark:hover:text-pink-500"
                >
                  NEXT-JS(6)
                </Link>
              </li>
              <li className="my-3">
                <Link
                  href=""
                  className="px-3 py-2 text-sm font-medium uppercase text-gray-500 hover:text-pink-500 dark:text-gray-300 dark:hover:text-pink-500"
                >
                  NEXT-JS(6)
                </Link>
              </li>
              <li className="my-3">
                <Link
                  href=""
                  className="px-3 py-2 text-sm font-medium uppercase text-gray-500 hover:text-pink-500 dark:text-gray-300 dark:hover:text-pink-500"
                >
                  NEXT-JS(6)
                </Link>
              </li>
              <li className="my-3">
                <Link
                  href=""
                  className="px-3 py-2 text-sm font-medium uppercase text-gray-500 hover:text-pink-500 dark:text-gray-300 dark:hover:text-pink-500"
                >
                  NEXT-JS(6)
                </Link>
              </li>
              <li className="my-3">
                <Link
                  href=""
                  className="px-3 py-2 text-sm font-medium uppercase text-gray-500 hover:text-pink-500 dark:text-gray-300 dark:hover:text-pink-500"
                >
                  NEXT-JS(6)
                </Link>
              </li>
              <li className="my-3">
                <Link
                  href=""
                  className="px-3 py-2 text-sm font-medium uppercase text-gray-500 hover:text-pink-500 dark:text-gray-300 dark:hover:text-pink-500"
                >
                  NEXT-JS(6)
                </Link>
              </li>
              <li className="my-3">
                <Link
                  href=""
                  className="px-3 py-2 text-sm font-medium uppercase text-gray-500 hover:text-pink-500 dark:text-gray-300 dark:hover:text-pink-500"
                >
                  NEXT-JS(6)
                </Link>
              </li>
              <li className="my-3">
                <Link
                  href=""
                  className="px-3 py-2 text-sm font-medium uppercase text-gray-500 hover:text-pink-500 dark:text-gray-300 dark:hover:text-pink-500"
                >
                  NEXT-JS(6)
                </Link>
              </li>
              <li className="my-3">
                <Link
                  href=""
                  className="px-3 py-2 text-sm font-medium uppercase text-gray-500 hover:text-pink-500 dark:text-gray-300 dark:hover:text-pink-500"
                >
                  NEXT-JS(6)
                </Link>
              </li>
              <li className="my-3">
                <Link
                  href=""
                  className="px-3 py-2 text-sm font-medium uppercase text-gray-500 hover:text-pink-500 dark:text-gray-300 dark:hover:text-pink-500"
                >
                  NEXT-JS(6)
                </Link>
              </li>
              <li className="my-3">
                <Link
                  href=""
                  className="px-3 py-2 text-sm font-medium uppercase text-gray-500 hover:text-pink-500 dark:text-gray-300 dark:hover:text-pink-500"
                >
                  NEXT-JS(6)
                </Link>
              </li>
              <li className="my-3">
                <Link
                  href=""
                  className="px-3 py-2 text-sm font-medium uppercase text-gray-500 hover:text-pink-500 dark:text-gray-300 dark:hover:text-pink-500"
                >
                  NEXT-JS(6)
                </Link>
              </li>
              <li className="my-3">
                <Link
                  href=""
                  className="px-3 py-2 text-sm font-medium uppercase text-gray-500 hover:text-pink-500 dark:text-gray-300 dark:hover:text-pink-500"
                >
                  NEXT-JS(6)
                </Link>
              </li>
              <li className="my-3">
                <Link
                  href=""
                  className="px-3 py-2 text-sm font-medium uppercase text-gray-500 hover:text-pink-500 dark:text-gray-300 dark:hover:text-pink-500"
                >
                  NEXT-JS(6)
                </Link>
              </li>
              <li className="my-3">
                <Link
                  href=""
                  className="px-3 py-2 text-sm font-medium uppercase text-gray-500 hover:text-pink-500 dark:text-gray-300 dark:hover:text-pink-500"
                >
                  NEXT-JS(6)
                </Link>
              </li>
              <li className="my-3">
                <Link
                  href=""
                  className="px-3 py-2 text-sm font-medium uppercase text-gray-500 hover:text-pink-500 dark:text-gray-300 dark:hover:text-pink-500"
                >
                  NEXT-JS(6)
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="space-y-10">
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="">
              <span className="text-gray-500">5 Desember, 2023</span>
              <Link href="/blog/release-of-tailwind-nextjs-starter-blog-v2.0">
                <h3 className="text-2xl font-semibold capitalize">
                  Release of Tailwind Nextjs Starter Blog v2.0
                </h3>
              </Link>
              <div className="flex items-center flex-wrap">
                <Link
                  href=""
                  className="text-pink-600 hover:text-pink-500 uppercase me-3"
                >
                  NEXT-JS
                </Link>
                <Link
                  href=""
                  className="text-pink-600 hover:text-pink-500 uppercase me-3"
                >
                  Tailwind
                </Link>
                <Link
                  href=""
                  className="text-pink-600 hover:text-pink-500 uppercase me-3"
                >
                  Guide
                </Link>
                <Link
                  href=""
                  className="text-pink-600 hover:text-pink-500 uppercase me-3"
                >
                  Featured
                </Link>
              </div>
              <p className="mt-3 text-gray-500 text-sm">
                Release of Tailwind Nextjs Starter Blog template v2.0,
                refactored with Nextjs App directory and React Server Components
                setup.Discover the new features and how to migrate from V1.
              </p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
