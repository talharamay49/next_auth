import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import React from 'react'
import Header from './header'
import Socials from './socials'
import BackButton from './backButton'

interface CardWrapperProps {
    children: React.ReactNode,
    headerLabel: string,
    backButtonLabel: string,
    backButtonHref: string,
    showSocial?: boolean,
}
const CardWrapper = ({ children, headerLabel, backButtonLabel, backButtonHref, showSocial }: CardWrapperProps) => {
    return (
        <Card className='w-[400px] shadow-md'>
            <CardHeader>
                <Header label={headerLabel} />
            </CardHeader>
            <CardContent>
                {children}
            </CardContent>
            {
                showSocial && (
                    <CardFooter>
                        <Socials />
                    </CardFooter>
                )
            }
            <CardFooter>
                <BackButton
                    label={backButtonLabel}
                    href={backButtonHref}
                />
            </CardFooter>
        </Card>
    )
}

export default CardWrapper