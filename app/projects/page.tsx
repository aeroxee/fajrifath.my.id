import Container from "@/components/container";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import googleImage from "@/public/google.webp";
import machineImage from "@/public/time-machine.webp";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projek - Fajri Fath",
  description: "Ini adalah proyek-proyek saya yang sudah saya buat.",
};

export default function Home() {
  return (
    <Container>
      <header className="mb-4 space-y-4">
        <h1 className="text-xl md:text-5xl font-bold">Proyek</h1>
        <p className="text-gray-500">
          Ini adalah proyek-proyek saya yang sudah saya buat.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-10 border-t">
        <Card>
          <Image
            src={googleImage}
            className="w-full h-[300px] rounded-t-sm"
            alt=""
            width={1200}
            height={800}
            placeholder="blur"
            blurDataURL={googleImage.blurDataURL}
          />
          <CardHeader>
            <CardTitle>A Search Engine</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-500">
              What if you could look up any information in the world? Webpages,
              images, videos and more. Google has many features to help you find
              exactly what you&apos;re looking for.
            </p>
          </CardContent>
          <CardFooter>
            <Button>Pelajari Selengkapnya →</Button>
          </CardFooter>
        </Card>

        <Card>
          <Image
            src={machineImage}
            className="w-full h-[300px] rounded-t-sm"
            alt=""
            width={1200}
            height={800}
            placeholder="blur"
            blurDataURL={machineImage.blurDataURL}
          />
          <CardHeader>
            <CardTitle>The Time Machine</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-500">
              Imagine being able to travel back in time or to the future. Simple
              turn the knob to the desired date and press &quot;Go&quot;. No
              more worrying about lost keys or forgotten .
            </p>
          </CardContent>
          <CardFooter>
            <Button>Pelajari Selengkapnya →</Button>
          </CardFooter>
        </Card>
      </div>
    </Container>
  );
}
