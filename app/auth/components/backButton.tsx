"use client"
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

interface BackButtonProps {
    label: string
    href: string
}
const BackButton = ({ label, href }: BackButtonProps) => {
    return (
        <Button variant="link" className='font-normal mx-auto'>
            <Link href={href}>
                {label}
            </Link>
        </Button>
    )
}

export default BackButton