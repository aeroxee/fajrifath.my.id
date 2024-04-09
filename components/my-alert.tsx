"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";

export default function MyAlert() {
  const [open, setOpen] = useState(true);

  return (
    <Dialog open={open}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Pemberitahuan!</DialogTitle>
          <DialogDescription>
            Website ini masih dalam pengembangan, semua fitur mungkin belum
            tersedia.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button type="submit" onClick={() => setOpen(false)}>
            Oke
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
