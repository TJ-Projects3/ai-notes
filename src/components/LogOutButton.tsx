"use client"

import { useRouter } from 'next/navigation'
import { Button } from './ui/button'
import { Loader2 } from 'lucide-react'
import { resolve } from 'path'
import { useState } from 'react'
import { toast } from "sonner"


function LogOutButton() {
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    const handleLogOut = async () => {
        setLoading(true)
        console.log("Logging out...")

        await new Promise((resolve) => setTimeout(resolve, 2000))

        const errorMessage = null;

        if (!errorMessage) {
            toast("Logged out successfully!", {
              description: "You have been successfully logged out."
            });
            router.push("/");
          } else {
            toast("Error logging out", {
                description: errorMessage
            })
          }
          setLoading(false);
        }


    return (
    <Button 
    variant={"outline"}
    className='w-24'
    onClick={handleLogOut}
    disabled={loading}
    >
        {loading ? <Loader2 className="animate-spin" /> : "Log Out" }
    </Button>
  )
}

export default LogOutButton