import Container from "@/components/container";
import Link from "next/link";

export default function Home() {
  return (
    <Container>
      <header className="mb-4 space-y-4">
        <h1 className="text-xl md:text-5xl font-bold">Postingan terbaru</h1>
        <p className="text-gray-500">
          Sebuah blog yang dibuat dengan Next.js dan Tailwind.css
        </p>
      </header>

      {Array.from({ length: 5 }).map((_, index) => (
        <article
          key={index}
          className="py-4 border-t flex items-start flex-col md:flex-row"
        >
          <span className="text-gray-600 text-sm md:w-[350px] md:mt-1">
            5 Agustus 2023
          </span>
          <div>
            <h4 className="text-lg font-semibold capitalize">
              Release of Tailwind Nextjs Starter Blog v2.0
            </h4>
            <div className="flex items-center flex-wrap mb-3">
              <Link href="" className="text-pink-600 uppercase text-sm me-3">
                NEXT-JS
              </Link>
              <Link href="" className="text-pink-600 uppercase text-sm me-3">
                Tailwind
              </Link>
              <Link href="" className="text-pink-600 uppercase text-sm me-3">
                Guide
              </Link>
              <Link href="" className="text-pink-600 uppercase text-sm me-3">
                Feature
              </Link>
            </div>

            <div className="space-y-3">
              <p className="text-sm text-gray-500">
                Release of Tailwind Nextjs Starter Blog template v2.0,
                refactored with Nextjs App directory and React Server Components
                setup.Discover the new features and how to migrate from V1.
              </p>
              <p>
                <Link
                  href="/blog/release-of-tailwind-nextjs-starter-blog-v2.0"
                  className="text-pink-600 hover:text-pink-400 text-sm"
                >
                  Baca selengkapnya →
                </Link>
              </p>
            </div>
          </div>
        </article>
      ))}

      <div className="mt-4 flex flex-row-reverse w-full">
        <Link href="" className="text-pink-600 hover:text-pink-500">
          Semua postingan →
        </Link>
      </div>
    </Container>
  );
}
