import { getServerSession } from "next-auth"
import { authOptions } from "./utils/auth"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import LogoutButton from "@/components/logoutButton"
import { Button } from "@/components/ui/button"
import Header from "./(auth)/components/header"
import LogInButton from "./(auth)/components/logInButton"

export default async function Home() {
  const session = await getServerSession(authOptions)
  return (
    <Card className="space-y-6 ">
      <CardHeader>
        <CardTitle>
          <Header label="A simple authentication service." />
        </CardTitle>
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
              <LogInButton>
                <Button variant="default" className="mt-4 w-full">
                  Log in
                </Button>
              </LogInButton>
            </div>
        }
      </CardContent>
    </Card>
  )
}
