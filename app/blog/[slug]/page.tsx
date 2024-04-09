import Container from "@/components/container";
import { Metadata, ResolvingMetadata } from "next";
import Link from "next/link";

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  _parent: ResolvingMetadata
): Promise<Metadata> {
  return {
    title: "Blog Detail - Fajri Fath",
    description: "",
  };
}

export default function BlogDetail({ params, searchParams }: Props) {
  return (
    <Container>
      <div className="pt-10 pb-5 border-b">
        <p className="text-center text-sm text-gray-500">
          Sabtu, 5 Agustus, 2023
        </p>
        <h1 className="text-2xl lg:text-4xl capitalize font-semibold text-center">
          Release of Tailwind Nextjs Starter Blog v2.0
        </h1>
      </div>
      <div className="flex flex-col-reverse lg:flex-row lg:space-x-24 py-8">
        <div className="lg:min-w-[280px] lg:max-w-[280px]">
          <div className="p-4 border-t lg:border-t-0">
            <span className="text-xs text-gray-500">TAGS</span>
            <div className="flex items-center flex-wrap">
              <Link
                href=""
                className="uppercase me-3 text-pink-600 hover:text-pink-500"
              >
                NEXT-JS
              </Link>
              <Link
                href=""
                className="uppercase me-3 text-pink-600 hover:text-pink-500"
              >
                tailwindcss
              </Link>
              <Link
                href=""
                className="uppercase me-3 text-pink-600 hover:text-pink-500"
              >
                GUIDE
              </Link>
              <Link
                href=""
                className="uppercase me-3 text-pink-600 hover:text-pink-500"
              >
                FEATURED
              </Link>
            </div>
            <div className="mt-10">
              <Link href="/blog" className="text-pink-600 hover:text-pink-500">
                ← Kembali ke blog
              </Link>
            </div>
          </div>
        </div>

        <div className="prose max-w-none pb-8 dark:prose-invert">
          <h2>Introduction</h2>
          <p>
            Welcome to the release of Tailwind Nextjs Starter Blog template
            v2.0. This release is a major refactor of the codebase to support
            Nextjs App directory and React Server Components. Read on to
            discover the new features and how to migrate from V1.
          </p>
          <p>
            The template was first released in January 2021 and has since been
            used by thousands of users. It is featured on Next.js Templates,
            Tailwind Awesome among other listing sites. It attracts 200+ unique
            visitors daily notching 1500-2000 page views, with 1.3k forks and
            many other clones.
          </p>
        </div>
      </div>
    </Container>
  );
}
