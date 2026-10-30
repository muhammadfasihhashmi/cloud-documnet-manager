import type { Metadata } from "next";
import { Geist } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import type { CSSProperties } from "react";

import { AppHeader } from "@/components/layout/app-header";
import { AppSidebar } from "@/components/layout/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Cloud Document Manager",
  description: "Manage your documents in the cloud.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={cn("h-full", "font-sans", geist.variable)}>
      <body className="min-h-full flex flex-col">
        <TooltipProvider>
          <NextTopLoader color="#7dd3fc" showSpinner={false} />
          <SidebarProvider
            style={
              {
                "--sidebar-width": "20rem",
              } as CSSProperties
            }
          >
            <AppSidebar />
            <SidebarInset className="min-w-0 bg-slate-50/70">
              <div className="min-h-svh">
                <AppHeader />
                <main className="w-full space-y-6 p-4 sm:p-6 lg:p-8">
                  {children}
                  <p className="pt-1 text-center text-xs text-slate-400">
                    CloudDesk · Student Cloud Computing Project · Demo workspace
                  </p>
                </main>
              </div>
            </SidebarInset>
          </SidebarProvider>
        </TooltipProvider>
      </body>
    </html>
  );
}
