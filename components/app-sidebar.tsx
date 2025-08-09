"use client"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarHeader,
  SidebarFooter,
  SidebarRail,
} from "@/components/ui/sidebar"
import { Github, Send } from "lucide-react"

export function AppSidebar() {
  const socials = [
    {
      title: "GitHub",
      url: "https://github.com/Takeshi68",
      icon: Github,
      tooltip: "Open GitHub profile",
    },
    {
      title: "Telegram",
      url: "https://t.me/hiyuux",
      icon: Send,
      tooltip: "Message on Telegram",
    },
  ]

  return (
    <Sidebar variant="floating" collapsible="icon" side="left" className="bg-zinc-950 text-zinc-100">
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-zinc-400">Social</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {socials.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild tooltip={item.tooltip} className="hover:bg-emerald-500/10">
                    <a href={item.url} target="_blank" rel="noopener noreferrer" aria-label={item.title}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
      <SidebarRail />
    </Sidebar>
  )
}
