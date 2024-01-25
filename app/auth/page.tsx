import SignInWithFacebook from "@/components/signInWithFacebook"
import SignInWithGithub from "@/components/signInWithGithub"
import SignInWithGoogle from "@/components/signInWithGoogle"
import SignInWithInstagram from "@/components/signInWithInstagram"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { getServerSession } from "next-auth"
import { authOptions } from "../utils/auth"
import { redirect } from "next/navigation"
import SignInForm from "@/components/signInForm"

const AuthRoute = async () => {
    const session = await getServerSession(authOptions)
    if (session) {
        return redirect("/")
    }
    return (
        <div className="w-screen h-screen flex items-center justify-center">
            <Card>
                <CardHeader>
                    <CardTitle>
                        Please Sign In
                    </CardTitle>
                    <CardDescription>
                        To Access the private page you have to be authenticated
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col">
                        <SignInForm />
                        <SignInWithGithub />
                        <SignInWithGoogle />
                        <SignInWithFacebook />
                        <SignInWithInstagram />
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default AuthRoute