import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";

export function DocumentSearch() {
  return (
    <div className="relative w-full sm:w-72">
      <Search
        size={17}
        className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
      />
      <Input
        disabled
        placeholder="Search documents..."
        aria-label="Search documents"
        title="Search functionality will be added later"
        className="h-10 border-slate-200 bg-white py-2.5 pl-9 text-sm placeholder:text-slate-400 focus-visible:border-blue-400 focus-visible:ring-blue-100"
      />
    </div>
  );
}
