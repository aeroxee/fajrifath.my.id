import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="w-full h-[600px] relative">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <Loader2 size={70} className="animate-spin" />
      </div>
    </div>
  );
}
