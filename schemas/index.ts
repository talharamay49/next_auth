import * as z from "zod"

export const LoginSchema = z.object({
    email: z.string({ invalid_type_error: "Email must be string", required_error: "Email is required", }).email({
        message: "Email is Correct"
    }),
    password: z.string({ invalid_type_error: "Password must be string", required_error: "Password is required" }).min(6, { message: "password must contain at least 6 character" })
})
export const RegisterSchema = z.object({
    email: z.string({ invalid_type_error: "Email must be string", required_error: "Email is required", }).email({
        message: "Email is Correct"
    }),
    name: z.string({ invalid_type_error: "Name must be string", required_error: "Name is required", }).min(5, {
        message: "Name must be atleast 5 character"
    }),
    password: z.string({ invalid_type_error: "Password must be string", required_error: "Password is required" }).min(6, { message: "password must contain atleast 6 character" })
})