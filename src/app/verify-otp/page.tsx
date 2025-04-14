'use client';
import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Logo from "@/app/UI/logo/page"; // added Logo import

export default function VerifyOtpPage() {
    const router = useRouter();
    const [otp, setOtp] = useState("");
    const [loading, setLoading] = useState(false);

    const verifyOtp = async () => {
        try {
            setLoading(true);
            const email = localStorage.getItem("userEmail");
            const response = await axios.post("/api/users/verify-otp", { email, otp });
            await axios.post("/api/users/auth", { email });
            toast.success("Email verified successfully!");
            localStorage.removeItem("userEmail");
            setTimeout(() => {
                router.push("/price");
            }, 1000);
        } catch (error: any) {
            toast.error(error.response?.data?.error || "Verification failed");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-950 " >
            <div className="bg-gray-800 border-l-4 border-blue-500 rounded-lg shadow-lg p-8 max-w-md w-full">
                <div className="flex justify-center mb-6">
                    <Logo />
                </div>
                <h1 className="text-2xl font-semibold text-white mb-2 text-center">Verify OTP</h1>
                <p className="text-gray-300 text-center mb-6 text-sm">
                    Please enter the One Time Password sent to your email to verify your account.
                </p>
                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Enter OTP"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        className="w-full bg-gray-700 border border-gray-600 text-white rounded px-4 py-2 focus:outline-none focus:border-blue-500"
                    />
                </div>
                <button 
                    onClick={verifyOtp} 
                    disabled={loading}
                    className="w-full bg-blue-600 text-white py-2 rounded transition duration-200 hover:bg-blue-700 disabled:opacity-50"
                >
                    {loading ? "Verifying..." : "Verify OTP"}
                </button>
            </div>
        </div>
    );
}
