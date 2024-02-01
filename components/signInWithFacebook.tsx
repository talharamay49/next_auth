"use client"

import React from 'react'
import { Button } from './ui/button'
import { LucideFacebook } from 'lucide-react'
import { signIn } from 'next-auth/react'

const SignInWithFacebook = () => {
    return (
        <Button onClick={() => signIn("facebook", { callbackUrl: `${window.location.origin}` })} variant="secondary" className="w-full">facebook Login <LucideFacebook className="w-4 h-4 ml-4" /> </Button>
    )
}

export default SignInWithFacebook