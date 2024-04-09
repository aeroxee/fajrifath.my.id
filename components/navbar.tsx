"use client";

import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";
import Container from "./container";
import SearchDialog from "./search-dialog";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export default function Navbar() {
  const { setTheme } = useTheme();
  const [show, setShow] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    const navLinks = document.querySelectorAll("#navLinks");
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        setShow(false);
      });
    });
  });

  return (
    <>
      <nav className="bg-background">
        <Container>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Link
                href="/"
                className="text-lg md:text-xl lg:text-2xl xl:text-4xl"
              >
                FajriFath
              </Link>
            </div>

            <div className="flex items-center gap-4">
              {/* links */}
              <div
                className={`flex items-start md:items-center flex-col md:flex-row gap-4 absolute z-40 md:static top-0 ${
                  show ? "left-0 ease-out" : "-left-[1000px] ease-in"
                } right-0 bottom-0 w-full min-h-screen md:w-auto md:min-h-0 bg-background px-10 transition-all duration-200`}
              >
                <div className="w-full flex flex-row-reverse md:hidden py-10">
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={() => setShow(false)}
                  >
                    <X size={60} />
                  </Button>
                </div>
                <Link
                  href="/blog"
                  className="text-2xl md:text-sm"
                  id="navLinks"
                >
                  Blog
                </Link>
                <Link
                  href="/projects"
                  className="text-2xl md:text-sm"
                  id="navLinks"
                >
                  Projects
                </Link>
                <Link
                  href="/about"
                  className="text-2xl md:text-sm"
                  id="navLinks"
                >
                  Tentang
                </Link>
              </div>
              {/* links */}

              {/* Search */}
              <SearchDialog />
              {/* Search */}

              {/* Dark */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">Toggle theme</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => setTheme("light")}>
                    Light
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme("dark")}>
                    Dark
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme("system")}>
                    System
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              {/* Dark */}

              {/* Menu */}
              <Button
                type="button"
                variant="outline"
                size="icon"
                onClick={() => setShow(true)}
                className="md:hidden"
              >
                <Menu className="h-[1.2rem] w-[1.2rem]" />
              </Button>
              {/* Menu */}
            </div>
          </div>
        </Container>
      </nav>
    </>
  );
}
