"use client"

import Login from "@/components/auth/Login"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/ui/mode-toggle"
import useUserStore from "@/hooks/useUserStore"
import { cn } from "@/lib/utils"
import { ChevronRight, LogOut } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const LINKS = [
  {
    name: "Dashboard",
    href: "/crm",
  },
  {
    name: "Contacts",
    href: "/crm/contacts",
  },
  {
    name: "Analytics",
    href: "/crm/analytics",
  },
  {
    name: "Templates",
    href: "/crm/templates",
  },
  {
    name: "Settings",
    href: "/crm/settings",
  },
]

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const { user, signOut } = useUserStore()
  if (user && !user.is_admin) return <div>Not Authorized</div>
  return user ? (
    <div className="w-screen h-screen">
      <header className="h-[3.5rem] bg-blue-700 shadow-md text-white dark:bg-card flex items-center justify-between px-4">
        <div>
          <span>
            <h1 className="text-2xl font-semibold">BrightSide CRM</h1>
          </span>
          <span></span>
        </div>
        <div className="flex items-center gap-4">
          <ModeToggle blue />
          <Button
            variant={"ghost"}
            size={"icon"}
            onClick={signOut}
            className="my-auto"
          >
            <LogOut />
          </Button>
        </div>
      </header>
      <div className="h-full flex">
        <nav className="p-4 flex flex-col gap-4 w-[18rem] h-full border-r bg-blue-700 text-white dark:bg-card">
          {LINKS.map(({ name, href }) => (
            <Link href={href} key={href}>
              <Button
                className={cn(
                  "px-2 flex items-center justify-between w-full",
                  pathname === href && "bg-primary/90 dark:hover:bg-primary"
                )}
                variant="ghost"
                size="lg"
              >
                <span>{name}</span>
                <ChevronRight />
              </Button>
            </Link>
          ))}
        </nav>
        <main className="p-8 h-[calc(100vh-3.5rem)] w-full overflow-y-auto bg-background">
          {children}
        </main>
      </div>
    </div>
  ) : (
    <Login />
  )
}
