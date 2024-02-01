import SignInWithFacebook from '@/components/signInWithFacebook'
import SignInWithGithub from '@/components/signInWithGithub'
import SignInWithGoogle from '@/components/signInWithGoogle'
import SignInWithInstagram from '@/components/signInWithInstagram'
import React from 'react'

const Socials = () => {
    return (
        <div className='grid grid-cols-2 items-center justify-center gap-4 w-full'>
            <SignInWithGithub />
            <SignInWithGoogle />
            <SignInWithFacebook />
            <SignInWithInstagram />
        </div>
    )
}

export default Socials