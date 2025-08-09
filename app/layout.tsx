import type React from "react"
import type { Metadata } from "next"
import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import "./globals.css"

export const metadata: Metadata = {
  title: "Hyuu Profile",
  description: "A simple portfolio",
    generator: 'v0.dev'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-svh antialiased bg-zinc-950 text-zinc-100",
          "selection:bg-emerald-400/30 selection:text-emerald-100",
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <SidebarProvider defaultOpen={true}>
            <AppSidebar />
            <SidebarInset className="relative">
              {/* Futuristic background layers */}
              <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
                {/* Grid */}
                <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.08),transparent_40%)]" />
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:24px_24px]" />
                </div>
                {/* Glow blobs */}
                <div className="absolute -top-24 -left-24 size-[32rem] rounded-full bg-emerald-500/20 blur-3xl" />
                <div className="absolute -bottom-24 -right-24 size-[32rem] rounded-full bg-fuchsia-500/20 blur-3xl" />
              </div>

              <header className="sticky top-0 z-20 border-b border-white/5 bg-zinc-950/60 backdrop-blur supports-[backdrop-filter]:bg-zinc-950/40">
                <div className="container mx-auto flex items-center gap-3 px-4 py-3">
                  <SidebarTrigger className="text-zinc-300 hover:text-white" />
                  <div className="h-6 w-px bg-white/10" />
                  <span className="text-sm uppercase tracking-widest text-zinc-400">H Y U U</span>
                  <div className="ml-auto text-xs text-zinc-500">Personal Website</div>
                </div>
              </header>

              <main className="container mx-auto px-4 py-10">{children}</main>
            </SidebarInset>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
