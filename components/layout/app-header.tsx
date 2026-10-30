"use client";

import { usePathname } from "next/navigation";
import { Circle, Upload } from "lucide-react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";

export function AppHeader() {
  const pathname = usePathname();
  const activePage = pathname === "/documents" ? "My Documents" : "Overview";

  return (
    <header className="sticky top-0 z-20 flex h-16 items-center justify-between gap-4 border-b bg-background/95 px-4 backdrop-blur supports-backdrop-filter:bg-background/80 sm:px-6">
      <div className="flex min-w-0 items-center gap-3">
        <SidebarTrigger aria-label="Toggle sidebar" className="-ml-1" />
        <Separator orientation="vertical" className="h-5" />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem className="hidden sm:block">
              <span className="text-muted-foreground">Workspace</span>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="hidden sm:block" />
            <BreadcrumbItem>
              <BreadcrumbPage className="truncate text-sm font-medium">
                {activePage}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="flex items-center gap-3">
        <Badge
          variant="outline"
          className="hidden gap-1.5 border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-normal text-slate-600 sm:flex"
        >
          <Circle className="size-1.5 fill-emerald-500 text-emerald-500" />
          Demo mode
        </Badge>
        <Button
          disabled
          title="Upload functionality will be added later"
          className="h-9 gap-2 bg-blue-600 px-3 text-sm font-medium text-white shadow-sm hover:bg-blue-700 sm:px-4"
        >
          <Upload size={16} />
          <span className="hidden sm:inline">Upload document</span>
          <span className="sm:hidden">Upload</span>
        </Button>
      </div>
    </header>
  );
}
