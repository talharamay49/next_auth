import { getServerSession } from "next-auth"
import { authOptions } from "./utils/auth"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import LogoutButton from "@/components/logoutButton"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default async function Home() {
  const session = await getServerSession(authOptions)
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <Card>
        <CardHeader>
          <CardTitle>
            Hello from index page
          </CardTitle>
          <CardDescription>
            To Access the private page you have to be authenticated
          </CardDescription>
        </CardHeader>
        <CardContent className="capitalize">
          {
            session ?
              <div className="flex flex-col w-full">
                <p>you Are logged in</p>
                <LogoutButton />
              </div>
              :
              <div>
                <p>please log in</p>
                <Button variant="link" className="mt-4">
                  <Link href="/auth">Log in</Link>
                </Button>
              </div>
          }
        </CardContent>
      </Card>
    </div>
  )
}
