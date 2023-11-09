"use client"
import { Loader2, Terminal } from "lucide-react"
import { Button } from "../ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card"
import { Input } from "../ui/input"
import { useState } from "react"
import supabase from "@/lib/supabase"
import { Alert, AlertDescription, AlertTitle } from "../ui/alert"
import useUserStore from "@/hooks/useUserStore"

export default function Login() {
  const { setUser } = useUserStore()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState<string | null>(null)

  const onSubmit = async () => {
    setLoading(true)
    setErrorMsg(null)

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    if (error) setErrorMsg(error.message ?? "Something went wrong")
    setLoading(false)
  }

  return (
    <div className="w-[28rem] mt-28 mx-auto flex flex-col gap-10">
      <h1 className="text-4xl font-bold text-center">BrightSide CRM</h1>
      <div className="flex flex-col gap-4">
        <Card>
          <CardHeader>
            <h3 className="text-3xl font-semibold">Login to Admin</h3>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-4 w-full">
              <div className="flex flex-col gap-1">
                <label htmlFor="fullname">Email</label>
                <Input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Email"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="fullname">Password</label>
                <Input
                  type="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="Password"
                />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button disabled={loading} onClick={onSubmit}>
              {loading ? (
                <Loader2 className="w-4 h-4 mx-auto animate-spin" />
              ) : (
                "Submit"
              )}
            </Button>
          </CardFooter>
        </Card>
        {errorMsg && (
          <Alert>
            <Terminal className="h-4 w-4" />
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>{errorMsg}</AlertDescription>
          </Alert>
        )}
      </div>
    </div>
  )
}
