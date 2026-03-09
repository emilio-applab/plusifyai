import { headers } from "next/headers"
import { redirect } from "next/navigation"
import { SignInButton } from "@/components/auth/sign-in-button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { auth } from "@/lib/auth"

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ reset?: string }>
}) {
  const session = await auth.api.getSession({ headers: await headers() })

  if (session) {
    redirect("/dashboard")
  }

  const { reset } = await searchParams

  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="mb-8 flex flex-col items-center gap-2">
          <span className="text-5xl">🧸</span>
          <span className="bg-gradient-to-r from-pink-500 to-pink-400 bg-clip-text text-2xl font-bold text-transparent">
            Plushify
          </span>
        </div>
      <Card className="w-full">
        <CardHeader className="text-center">
          <CardTitle>Welcome back to Plushify</CardTitle>
          <CardDescription>Sign in to your account</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center">
          {reset === "success" && (
            <p className="mb-4 text-sm text-green-600 dark:text-green-400">
              Password reset successfully. Please sign in with your new password.
            </p>
          )}
          <SignInButton />
        </CardContent>
      </Card>
      </div>
    </div>
  )
}
