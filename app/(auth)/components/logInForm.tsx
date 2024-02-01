"use client"
import React, { useState, useTransition } from 'react'
import CardWrapper from './cardWrapper'
import { LoginSchema } from "@/schemas"
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { FormError } from './formError'
import { FormSuccess } from './formSuccess'
import { login } from '@/actions/login'

const LogInForm = () => {
    const [isPending, startTransition] = useTransition()
    const [error, setError] = useState<string | undefined>("")
    const [success, setSuccess] = useState<string | undefined>("")
    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    })
    const onSubmit = (values: z.infer<typeof LoginSchema>) => {
        startTransition(() => {
            login(values).then((data) => {
                setError(data.error)
                setSuccess(data.success)
            })
        })
    }
    return (
        <CardWrapper headerLabel='Welcome Back' backButtonLabel=" Don't Have An Account" backButtonHref='/>auth/register' showSocial>
            <Form {...form}>
                <form onSubmit={form.handleSubmit((data) => onSubmit(data))} className="space-y-6">
                    <div className="space-y-4">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel > Email</FormLabel>
                                    <FormControl>
                                        <Input
                                            disabled={isPending}
                                            {...field}
                                            type='email'
                                            placeholder='example@gmail.com'
                                        />
                                    </FormControl>
                                    <FormDescription />
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel > Password</FormLabel>
                                    <FormControl>
                                        <Input
                                            disabled={isPending}
                                            {...field}
                                            type='password'
                                            placeholder='******'
                                        />
                                    </FormControl>
                                    <FormDescription />
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormError message={error} />
                        <FormSuccess message={success} />
                    </div>
                    <Button type='submit' className='w-full' disabled={isPending}>
                        Login
                    </Button>
                </form>
            </Form>
        </CardWrapper>
    )
}

export default LogInForm