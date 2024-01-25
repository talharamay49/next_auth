"use client"

import React from 'react'
import { Button } from './ui/button'
import { signOut } from 'next-auth/react'

const LogoutButton = () => {
    return (
        <>
            <Button onClick={() => signOut({ callbackUrl: `${window.location.origin}/auth` })} variant="default" className="mt-4">Log Out</Button>
        </>
    )
}

export default LogoutButton