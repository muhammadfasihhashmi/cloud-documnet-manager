"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Cloud, FileText, LayoutDashboard, MoreHorizontal } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Progress } from "@/components/ui/progress";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

type AppPage = "Overview" | "My Documents";

const navigation = [
  { label: "Overview" as const, href: "/", icon: LayoutDashboard },
  { label: "My Documents" as const, href: "/documents", icon: FileText },
];

export function AppSidebar() {
  const pathname = usePathname();
  const activePage: AppPage =
    pathname === "/documents" ? "My Documents" : "Overview";

  return (
    <Sidebar
      collapsible="offcanvas"
      className="border-r-0 text-slate-100 [&_[data-sidebar=sidebar]]:bg-[#111820] [&_[data-sidebar=sidebar]]:text-slate-100"
    >
      <SidebarHeader className="h-16 justify-center border-b border-[#28343f] bg-[#111820] px-3">
        <div className="flex items-center gap-2.5 px-1">
          <div className="flex size-8 items-center justify-center rounded-lg bg-sky-300 text-slate-950 shadow-sm shadow-sky-400/10">
            <Cloud size={23} />
          </div>
          <div className="min-w-0 group-data-[collapsible=icon]:hidden">
            <p className="text-sm font-semibold tracking-tight">CloudDesk</p>
            <p className="text-xs text-sidebar-foreground/60">
              Document manager
            </p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="bg-[#111820] px-2 py-4">
        <SidebarGroup>
          <SidebarGroupLabel>Workspace</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigation.map(({ label, href, icon: Icon }) => (
                <SidebarMenuItem key={label}>
                  <SidebarMenuButton
                    isActive={activePage === label}
                    render={<Link href={href} />}
                    tooltip={label}
                    className={
                      activePage === label
                        ? "bg-sky-300 font-semibold text-slate-950 shadow-sm shadow-sky-400/10 hover:bg-sky-200 hover:text-slate-950"
                        : "text-slate-300 hover:bg-white/[0.08] hover:text-white"
                    }
                  >
                    <Icon />
                    <span>{label}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="gap-3 border-t border-[#28343f] bg-[#111820] p-3">
        <div className="rounded-lg border border-[#28343f] bg-white/[0.03] p-3 group-data-[collapsible=icon]:hidden">
          <div className="flex items-center justify-between text-xs font-medium">
            <span>Storage</span>
            <span className="text-sidebar-foreground/60">32%</span>
          </div>
          <Progress
            value={32}
            className="mt-2 h-1.5 bg-white/10 [&_[data-slot=progress-indicator]]:bg-sky-300"
          />
          <p className="mt-2 text-[11px] text-sidebar-foreground/60">
            3.2 GB of 10 GB · Demo
          </p>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger
            aria-label="Open user menu"
            className="flex w-full items-center gap-2 rounded-md p-1 text-left outline-none hover:bg-sidebar-accent focus-visible:ring-2 focus-visible:ring-sidebar-ring"
          >
            <Avatar>
              <AvatarFallback className="bg-sky-300 text-xs font-semibold text-slate-950">
                DU
              </AvatarFallback>
            </Avatar>
            <span className="min-w-0 flex-1 group-data-[collapsible=icon]:hidden">
              <span className="block truncate text-sm font-medium">
                Demo User
              </span>
              <span className="block truncate text-xs text-sidebar-foreground/60">
                Personal workspace
              </span>
            </span>
            <MoreHorizontal className="size-4 text-sidebar-foreground/60 group-data-[collapsible=icon]:hidden" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuItem
              disabled
            >
              Settings
            </DropdownMenuItem>
            <DropdownMenuItem disabled>
              Help &amp; support
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem disabled>Demo workspace</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
