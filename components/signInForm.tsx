"use client"

import React, { useState } from 'react'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { signIn } from 'next-auth/react'
import { toast } from './ui/use-toast'

const SignInForm = () => {
    const [email, setEmail] = useState("")

    const signInWithEmail = async () => {
        const signInResult = await signIn("email", {
            email: email,
            callbackUrl: `${window.location.origin}`,
            redirect: false
        })

        if (!signInResult?.ok) {
            toast({
                title: "Well This Did Not Work....",
                description: "Something went wrong , please try again",
                variant: "destructive"
            })
        } else {
            toast({
                title: "Check Your Email",
                description: "A magic link has been send to you.",
                variant: "default"
            })
        }
    }
    return (
        <form action={signInWithEmail}>
            <div className="flex flex-col gap-y-2">
                <Label>Email</Label>
                <Input name="email" type="email" placeholder="name@gmail.com" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <Button type='submit' className="mt-4 w-full">Login With email</Button>
        </form>
    )
}
export default SignInForm