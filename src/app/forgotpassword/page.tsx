'use client'

import { useState } from "react"
import axios from "axios"
import { toast } from "react-hot-toast"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Loader2 } from "lucide-react"
import { set } from "mongoose"
import Logo from "../UI/logo/page"

export default function ForgotPasswordPage() {
    const [email, setEmail] = useState("")
    const [loading, setLoading] = useState(false)

    const verifyEmail = async () => {
        try {
            setLoading(true)
            await axios.post('/api/users/forgotpassword', {email})
            toast.success("User Found!")
            toast("Please check your inbox and click on verification link.", {duration: 10000})
        } catch (error: any) {
            toast.error("Something went wrong try again", error.message)    
        } finally {
            setLoading(false)
            setEmail("")
        }
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black">
            <header className="mb-8">
                <Logo />
            </header>
            <Card className="w-[320px] sm:w-[380px] bg-gray-800 rounded-xl shadow-xl">
                <CardHeader className="mb-4">
                    <CardTitle className="text-3xl font-bold text-white text-center">
                        Password Reset
                    </CardTitle>
                    <CardDescription className="text-center text-gray-300">
                        Enter your email to reset your password
                    </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                    <div className="grid gap-2">
                        <Label htmlFor="email" className="text-gray-300">Email</Label>
                        <Input 
                            id="email" 
                            type="email" 
                            placeholder="m@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                </CardContent>
                <CardFooter className="flex justify-center">
                    <Button 
                        disabled={!email.length} 
                        onClick={verifyEmail}
                        className="px-5 py-2 bg-blue-500 text-white font-medium rounded hover:bg-blue-600 transition-colors"
                    >
                        {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : "Submit"}
                    </Button>
                </CardFooter>
            </Card>
        </div>
    )
}
