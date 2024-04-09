import Container from "@/components/container";
import Image from "next/image";

import machineImage from "@/public/time-machine.webp";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tentang - Fajri Fath",
  description: "Ini adalah halaman untuk menampilkan tentang saya.",
};

export default function About() {
  return (
    <Container>
      <header className="mb-4 space-y-4">
        <h1 className="text-xl md:text-5xl font-bold">Tentang</h1>
      </header>

      <section className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0 py-10 border-t">
        <div className="flex items-center justify-center flex-col text-center gap-3">
          <Image
            src={machineImage}
            alt=""
            width={1200}
            height={800}
            placeholder="blur"
            blurDataURL={machineImage.blurDataURL}
            className="w-[250px] h-[250px] rounded-full"
          />
          <h4 className="text-2xl font-bold">Fajri Fath</h4>
          <p className="text-gray-500">
            Mahasiswa aktif di{" "}
            <Link
              href="http://metamedia.ac.id"
              target="_blank"
              className="text-pink-600 underline"
            >
              Universitas Metamedia
            </Link>
            .
          </p>
        </div>

        <div className="xl:col-span-2 space-y-6">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste at
            aperiam voluptates non illo ex dolorum quas. Rem facilis distinctio
            quos vero molestiae temporibus sed, laborum, nisi enim deserunt
            corporis.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi
            commodi sint necessitatibus ut harum itaque ipsam quis minus error
            incidunt cum veritatis aliquam repudiandae sunt vitae ex, nihil vero
            ducimus.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
            dignissimos quae eum aperiam quos suscipit nobis eligendi nemo
            doloribus illo fugit odit veritatis modi non possimus eaque sed, ea
            esse!
          </p>
        </div>
      </section>
    </Container>
  );
}
