"use client"
import React from 'react'
import { Button } from './ui/button'
import { signIn } from 'next-auth/react'
import { GitHubLogoIcon } from '@radix-ui/react-icons'

const SignInWithGithub = () => {
    return (
        <Button onClick={() => signIn("github", { callbackUrl: `${window.location.origin}` })} variant="secondary" className="w-full">github login<GitHubLogoIcon className="w-4 h-4 ml-4" /> </Button>
    )
}

export default SignInWithGithub