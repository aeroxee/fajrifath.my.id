import { Facebook, Instagram, LinkedinIcon, Twitter } from "lucide-react";
import Link from "next/link";
import Container from "./container";

export default function Footer() {
  return (
    <footer>
      <Container>
        <div className="flex items-center justify-center mb-3">
          <div className="flex items-center gap-3">
            <Link href="" className="">
              <Facebook className="w-[1.2rem] h-[1.2rem]" />
            </Link>
            <Link href="" className="">
              <Instagram className="w-[1.2rem] h-[1.2rem]" />
            </Link>
            <Link href="" className="">
              <Twitter className="w-[1.2rem] h-[1.2rem]" />
            </Link>
            <Link href="" className="">
              <LinkedinIcon className="w-[1.2rem] h-[1.2rem]" />
            </Link>
          </div>
        </div>
        <p className="text-xs text-center">&copy; 2024, fajrifath.my.id</p>
      </Container>
    </footer>
  );
}
