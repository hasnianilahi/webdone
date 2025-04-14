'use client'
import Link from "next/link"
import React, { useState } from "react"
import { useRouter } from "next/navigation"
import axios from "axios"
import Image from "next/image"
import toast from "react-hot-toast"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Head from 'next/head';
import StructuredData from '../structuredata/page';

// Add this import at the top with your other imports
import { Eye, EyeOff } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Loader2 } from "lucide-react"

// Import or define your Logo component here
import Logo from "@/app/UI/logo/page" // Update this path as necessary

export default function LoginPage() {
    const router = useRouter()
    // Add this new state for password visibility
    const [showPassword, setShowPassword] = useState(false)
    const [user, setUser] = useState({
        email: "",
        password: "",
    })
    const [loading, setLoading] = useState(false)

    const onLogin = async () => {
        try {
            setLoading(true)
            console.log('Attempting login...');
            
            const response = await axios.post("/api/users/login", user)
            const { success, hasSubscription, userId, redirectUrl } = response.data
            
            console.log('Login response:', { success, hasSubscription, redirectUrl });
            
            if (success) {
                toast.success("Login Successful")
                
                if (hasSubscription) {
                    console.log('User has subscription, redirecting to builder...');
                    router.push("/weblike/builder")
                } else {
                    console.log('User needs subscription, redirecting to pricing...');
                    localStorage.setItem('userId', userId)
                    router.push("/price")
                }
            }
        } catch (error: any) {
            console.error('Login error:', error);
            toast.error(error.response?.data?.error || "Login failed")
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen flex flex-col md:flex-row items-center justify-center  bg-neutral-900">
            {/* Left side - Login form */}
            <div className="flex flex-col items-center justify-center w-full md:w-1/2 p-6">
                <div className="mb-8 flex flex-col items-center">
                    <Logo />
                 <a 
    href="https://www.webd.one" 
    className="text-xl sm:text-2xl font-semibold tracking-tight text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-white to-gray-300 transition-all duration-300 font-['Inter']"
    aria-label="Webdone - ship your startup superfast in hours ,Build website ,stunning page,with AI  ">
    Webdone
</a>
                    <p className="text-white mt-2">Welcome back! Please login to continue</p>
                </div>
                
               <Head>
  {/* Page Title */}
  <title>Login to Your Account | webdone</title>

  {/* Meta Description */}
  <meta
    name="description"
    content="Log in to your webdone account to access your AI-powered landing pages, websites, and startup tools. Manage your projects and launch faster."
  />

  {/* Keywords */}
  <meta
    name="keywords"
    content="webdone login, login to webdone, webdone account, AI website builder login, landing page creator login, no-code website builder login, webdone dashboard, manage webdone projects, webdone account access"
  />

  {/* Robots */}
  <meta name="robots" content="index, follow" />

  {/* Open Graph Tags */}
  <meta property="og:title" content="Login to Your Account | webdone" />
  <meta
    property="og:description"
    content="Log in to your webdone account Build stunning website & page quickly and ship your startup in hours , Manage your projects and launch faster"
  />
  <meta property="og:image" content="https://www.webd.one/logo.png" />
  <meta property="og:url" content="https://www.webd.one/login" />
  <meta property="og:type" content="website" />

  {/* Twitter Card Tags */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Login to Your Account | webdone" />
  <meta
    name="twitter:description"
    content="Log in to your webdone account ship your startup in hours ,Build stunning website & page quickly and  Manage your projects and launch faster."
  />
  <meta name="twitter:image" content="https://www.webd.one/twitter-card.jpg" />

  {/* Favicon and Mobile Icons */}
  <link rel="icon" href="/favicon.ico" />
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
  <link rel="manifest" href="/site.webmanifest" />

  {/* Viewport and Canonical */}
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="canonical" href="https://www.webd.one/login" />
           <StructuredData />
  {/* Structured Data */}

</Head>
                <Card className="w-[350px] sm:w-[400px] border bg-[#0A0A0A] border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardHeader className="space-y-1 pb-6">
                        <CardTitle className="text-2xl font-bold text-white">Login</CardTitle>
                        <CardDescription className="text-gray-500">
                            Enter your credentials to access your account
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-5">
                        <div className="grid gap-2">
                            <Label htmlFor="email" className=" font-medium text-white">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="you@example.com"
                                value={user.email}
                                onChange={(e) => setUser({ ...user, email: e.target.value })}
                                className="h-11 border-gray-200 text-white focus:border-blue-500 focus:ring-blue-500 bg-neutral-900"
                            />
                        </div>
                        <div className="grid gap-2">
                            <div className="flex items-center justify-between">
                                <Label htmlFor="password" className="text-white font-medium">Password</Label>
                                <Link 
                                    href="/forgotpassword" 
                                    className="text-sm text-blue-600 hover:text-blue-700 hover:underline"
                                >
                                    Forgot password?
                                </Link>
                            </div>
                            <div className="relative">
                                <Input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="••••••••"
                                    value={user.password}
                                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                                    className="h-11 border-gray-200 text-white focus:border-blue-500 focus:ring-blue-500 bg-neutral-900 pr-10"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
                                    aria-label={showPassword ? "Hide password" : "Show password"}
                                >
                                    {showPassword ? (
                                        <EyeOff className="h-5 w-5" />
                                    ) : (
                                        <Eye className="h-5 w-5" />
                                    )}
                                </button>
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter className="flex flex-col space-y-4 pt-4">
                        <Button
                            className="w-full h-11 bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors duration-200"
                            disabled={!user.email || !user.password}
                            onClick={onLogin}
                        >
                            {loading ? (
                                <div className="flex items-center justify-center">
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    <span>Logging in...</span>
                                </div>
                            ) : (
                                "Login"
                            )}
                        </Button>
                        <div className="text-center text-sm text-gray-500">
                            Don&apos;t have an account?{" "}
                            <Link href="/signup" className="text-blue-600 hover:text-blue-700 font-medium hover:underline">
                                Sign up
                            </Link>
                        </div>
                    </CardFooter>
              
                </Card>
            </div>

      
          
        </div>
    )
}
