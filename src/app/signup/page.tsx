'use client'
import Link from "next/link"
import React, { useState } from "react"
import { useRouter } from "next/navigation"
import axios from "axios"
import Image from "next/image"
import toast from "react-hot-toast"
import { Eye, EyeOff } from "lucide-react"
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
import {  Loader2 } from "lucide-react"
import Logo from "@/app/UI/logo/page"
import StructuredData from '../structuredata/page';
import Head from 'next/head';

export default function SignupPage() {
    const router = useRouter()
    const [user, setUser] = useState({
        email: "",
        password: "",
        username: "",
    })
        const [showPassword, setShowPassword] = useState(false)

    const [loading, setLoading] = useState(false)

    const onSignup = async () => {
        try {
            setLoading(true)
            const response = await axios.post("/api/users/signup", user)
            toast.success("Signup successful")
            localStorage.setItem("userEmail", user.email)
            router.push("/verify-otp")
        } catch (error: any) {
            toast.error(error.message)
        } finally {
            setLoading(false)
        }
    }
    return (
        <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-neutral-900">
            {/* Left side - Image and Testimonial */}
           

            {/* Right side - Signup form */}
            <div className="flex flex-col items-center bg-neutral-900 justify-center w-full md:w-1/2 p-6">
                <div className="mb-8 flex flex-col items-center">
                    <Logo />
                    <h1 className="text-xl font-bold text-white mt-4">Webdone</h1>
                    <p className="text-gray-500  bg-neutral-900 mt-2">Ship your startup super-fast in hours . Build landing pages with AI and setup everything from payments to database</p>
                </div>
                   <Head>
                    {/* Page Title */}
                    <title>Sign Up for Your Account | webdone</title>

                    {/* Meta Description */}
                    <meta
                        name="description"
                        content="Got a big idea? Webdone helps you bring it to life fast. Build a professional website, craft a high-converting landing page, and ship your startup in record time. Sign up now and make it happen."
                    />

                    {/* Keywords */}
                    <meta
                        name="keywords"
                        content="webdone signup, sign up for webdone, webdone account, AI website builder signup, landing page creator signup, no-code website builder signup, webdone dashboard, create webdone projects, webdone account creation"
                    />

                    {/* Robots */}
                    <meta name="robots" content="index, follow" />

                    {/* Open Graph Tags */}
                    <meta property="og:title" content="Sign Up for Your Account | webdone" />
                    <meta
                        property="og:description"
                        content="Sign up for a webdone account tBuild websites, craft landing pages, and launch your startup in hours, not days. Sign up today and let the magic begin."
                    />
                    <meta property="og:image" content="https://www.webd.one/logo.png" />
                    <meta property="og:url" content="https://www.webd.one/signup" />
                    <meta property="og:type" content="website" />

                    {/* Twitter Card Tags */}
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:title" content="Sign Up for Your Account | webdone" />
                    <meta
                        name="twitter:description"
                        content="Stop waiting and start building. With Webdone, you can create a website, design a landing page, or launch your startup in just hours. Sign up now"
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
                    <link rel="canonical" href="https://www.webd.one/signup" />

                    {/* Structured Data */}
                                       <StructuredData />

                </Head>
                <Card className="w-[350px] sm:w-[400px] border bg-neutral-900 border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardHeader className="space-y-1 pb-6">
                        <CardTitle className="text-2xl font-bold text-white ">Sign Up</CardTitle>
                        <CardDescription className="text-white">
                            Enter  details to create your account
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-5">
                        <div className="grid gap-2">
                            <Label htmlFor="username" className="text-white bg-neutral-900 font-medium">Username</Label>
                            <Input
                                id="username"
                                type="text"
                                placeholder=""
                                value={user.username}
                                onChange={(e) => setUser({ ...user, username: e.target.value })}
                                className="h-11 border-gray-200 bg-neutral-900 text-white focus:border-blue-500 focus:ring-blue-500 "
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="email" className="text-white font-medium bg-neutral-900">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder=""
                                value={user.email}
                                onChange={(e) => setUser({ ...user, email: e.target.value })}
                                className="h-11 border-gray-200 text-white bg-neutral-900 focus:border-blue-500 focus:ring-blue-500"
                            />
                        </div>
                        <div className="grid gap-2 relative">
                            <Label htmlFor="password" className="text-white font-medium">Password</Label>
                            <Input
                                id="password"
                                type={showPassword ? "text" : "password"}
                                placeholder=""
                                value={user.password}
                                onChange={(e) => setUser({ ...user, password: e.target.value })}
                                className="h-11 border-gray-200 text-white bg-neutral-900 focus:border-blue-500 focus:ring-blue-500"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-[38px] text-gray-500 hover:text-gray-400 focus:outline-none"
                                aria-label={showPassword ? "Hide password" : "Show password"}
                            >
                                {showPassword ? (
                                    <EyeOff className="h-5 w-5" />
                                ) : (
                                    <Eye className="h-5 w-5" />
                                )}
                            </button>
                        </div>
                    </CardContent>
                    <CardFooter className="flex flex-col space-y-4 pt-4">
                        <Button
                            className="w-full h-11 bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors duration-200"
                            disabled={!user.username || !user.email || !user.password}
                            onClick={onSignup}
                        >
                            {loading ? (
                                <div className="flex items-center justify-center">
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    <span>Creating Account...</span>
                                </div>
                            ) : (
                                "Create Account"
                            )}
                        </Button>
                        <div className="text-center text-sm text-gray-500">
                            Already have an account?{" "}
                            <Link href="/login" className="text-blue-600 hover:text-blue-700 font-medium hover:underline">
                                Sign in
                            </Link>
                           
                        </div>
                    </CardFooter>
                </Card>
                <div className="mt-8 text-center text-sm text-gray-500">
                    By signing up, you agree to our{" "}
                    <Link href="/TermsAndConditions" className="text-blue-600 hover:text-blue-700 font-medium hover:underline">
Terms And Conditions
                    </Link>{" "}
                    and{" "}
                    <Link href="/PrivacyPolicy" className="text-blue-600 hover:text-blue-700 font-medium hover:underline">
                        Privacy Policy
                    </Link>
                </div>
            </div>
        </div>
    )
}
