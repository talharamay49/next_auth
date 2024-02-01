"use client"

import { useRouter } from "next/navigation"

interface LogInButtonProps {
  children: React.ReactNode,
  mode?: "modal" | "redirect",
  asChild?: boolean
}

const LogInButton = ({ children, mode = "redirect", asChild }: LogInButtonProps) => {
  const router = useRouter()
  const onClickHandler = () => {
    router.push("/login")
  }

  if (mode == "modal") {
    return (
      <span>
        todo Implement
      </span>
    )
  }

  return (
    <div className="cursor-pointer" onClick={() => onClickHandler()}>
      {children}
    </div>
  )
}

export default LogInButton