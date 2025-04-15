import { shadow } from "@/styles/utils"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "./ui/DarkMode";
import LogOutButton from "./LogOutButton";
import { getUser } from "@/auth/server";



async function Header() {
  const user = await getUser();

  return (
    <header className="relative flex h-24 w-full items-center justify-between bg-popover px-3 
    sm:px-8"
    style={{
      boxShadow: shadow
    }}
    >
        <Link className="flex items-end" href={"/"}>
            <Image 
            src="/schoolnotes-logo.png" 
            height={80} 
            width={100} 
            alt="AI Notes App Logo" 
            className="rounded-full" 
            priority/>
            <h1 className="flex flex-col pb-8 text-2xl font-semibold">
              Schoolnotes
            </h1>
        </Link>

        <div className="flex gap-4">
          {user ? (
            <LogOutButton />
           ) : 
          (
            <>
            <Button asChild>
              <Link href="/sign-up" className="hidden sm:block">Sign Up</Link>
            </Button>
            <Button asChild variant={"outline"}>
              <Link href="/login">Login</Link>
            </Button>
            </>
          )
        }
        <ModeToggle />
        </div>
    </header>
  )
}

export default Header