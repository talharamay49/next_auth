"use client"

import React from 'react'
import { Button } from './ui/button'
import { Instagram } from 'lucide-react'
import { signIn } from 'next-auth/react'

const SignInWithInstagram = () => {
    return (
        <Button onClick={() => signIn("instagram", { callbackUrl: `${window.location.origin}` })} variant="secondary" className="w-full">instagram login<Instagram className="w-4 h-4 ml-4" /> </Button>
    )
}

export default SignInWithInstagram