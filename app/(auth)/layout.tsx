import Socials from "./components/socials"

const AuthLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return <div className="h-full flex items-center justify-center">
        {children}
    </div>
}
export default AuthLayout