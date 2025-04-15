"use client"

import { useRouter } from 'next/navigation'
import { Button } from './ui/button'
import { Loader2 } from 'lucide-react'
import { useState } from 'react'
import { toast } from "sonner"
import { logOutAction } from '@/actions/users'


function LogOutButton() {
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    const handleLogOut = async () => {
        setLoading(true)

        const { errorMessage } = await logOutAction();

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