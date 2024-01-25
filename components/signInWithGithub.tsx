"use client"
import React from 'react'
import { Button } from './ui/button'
import { Github } from 'lucide-react'
import { signIn } from 'next-auth/react'

const SignInWithGithub = () => {
    return (
        <>
            <Button onClick={() => signIn("github", { callbackUrl: `${window.location.origin}` })} variant="secondary" className="mt-4">Login With github <Github className="w-4 h-4 ml-4" /> </Button>
        </>
    )
}

export default SignInWithGithub