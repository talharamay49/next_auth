"use client"

import React from 'react'
import { Button } from './ui/button'
import { GoalIcon } from 'lucide-react'
import { signIn } from 'next-auth/react'

const SignInWithGoogle = () => {
    return (
        <>
            <Button onClick={() => signIn("google", { callbackUrl: `${window.location.origin}` })} variant="secondary" className="mt-4">Login With google <GoalIcon className="w-4 h-4 ml-4" /> </Button>
        </>
    )
}

export default SignInWithGoogle