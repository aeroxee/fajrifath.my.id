"use client";

import { Search } from "lucide-react";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { Input } from "./ui/input";

export default function SearchDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button type="button" variant="outline" size="icon">
          <Search className="h-[1.2rem] w-[1.2rem]" />
        </Button>
      </DialogTrigger>
      <DialogContent className="px-0 pt-1">
        <form action="">
          <div className="flex items-center px-2">
            <Button variant="outline" disabled>
              <Search className="h-[1.2rem] w-[1.2rem]" />
            </Button>
            <Input type="text" placeholder="Ketik untuk mencari konten..." />
          </div>
        </form>
        <div className="max-h-[400px] min-h-[400px] overflow-auto space-y-5">
          {Array.from({ length: 10 }).map((_, index) => (
            <div key={index} className="hover:bg-pink-500/50 px-5">
              <span className="text-xs text-gray-500">5 Agustus 2023</span>
              <h5 className="text-lg font-semibold">
                Release of Tailwind Nextjs Starter Blog v2.0
              </h5>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
