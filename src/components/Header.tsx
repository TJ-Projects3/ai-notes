import Image from "next/image"
import Link from "next/link"


function Header() {
  return (
    <header>
        <Link href={"/"}>
            <Image 
            src="/schoolnotes-logo.png" 
            height={60} 
            width={60} 
            alt="AI Notes App Logo" 
            className="rounded-full" 
            priority/>
        </Link>
    </header>
  )
}

export default Header