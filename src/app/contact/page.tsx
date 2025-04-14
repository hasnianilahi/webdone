"use client"
import { useState } from 'react'

export default function Contact() {
    const [agreed, setAgreed] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!agreed) {
            setError('Please accept the terms and conditions')
            return
        }

        setLoading(true)
        setError('')

        try {
            const response = await fetch('/api/users/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })

            const data = await response.json()

            if (response.ok) {
                alert('Message sent successfully!')
                setFormData({ name: '', email: '', message: '' })
                setAgreed(false)
            } else {
                setError(data.error || 'Failed to send message')
            }
        } catch (error) {
            setError('Network error. Please try again.')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div  className='bg-gray-900'>
        <div className="max-w-2xl mx-auto py-8 px-4 bg-gray-900 text-gray-100">
            <h1 className="text-3xl font-bold mb-8 text-gray-100">
                <a href="https://www.webd.one" target="_blank" rel="noopener noreferrer">
                    Contact Us
                </a>
            </h1>
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-blue-400">
                    <a href="https://www.webd.one" target="_blank" rel="noopener noreferrer">
                        Webdone
                    </a>
                </h1>
                <div className="space-x-4">
                    <a
                        href="https://www.webd.one/login"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 transition-colors"
                    >
                        Login
                    </a>
                    <a
                        href="https://www.webd.one/signup"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-md text-white transition-colors"
                    >
                        Signup
                    </a>
                </div>
            </div>

            {error && (
                <div className="bg-red-500 text-white p-3 rounded mb-4">
                    {error}
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className="block text-sm font-medium text-gray-300">Name</label>
                    <input
                        type="text"
                        required
                        value={formData.name}
                        className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-gray-100"
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-300">Email</label>
                    <input
                        type="email"
                        required
                        value={formData.email}
                        className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-gray-100"
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-300">Message</label>
                    <textarea
                        required
                        value={formData.message}
                        rows={4}
                        className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-gray-100"
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                </div>

                <div className="space-y-4">
                    <h2 className="text-xl font-semibold text-gray-100">Terms and Conditions</h2>
                    <div className="text-sm text-gray-300 p-4 border border-gray-700 rounded bg-gray-800">
                        <p>By submitting this form, you agree to:</p>
                        <ul className="list-disc ml-5 mt-2">
                            <li>Allow us to contact you via email</li>
                            <li>Our privacy policy regarding data handling</li>
                            <li>Processing of your information as per applicable laws</li>
                        </ul>
                    </div>

                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            id="terms"
                            required
                            checked={agreed}
                            className="h-4 w-4 mr-2 bg-gray-800 border-gray-700"
                            onChange={(e) => setAgreed(e.target.checked)}
                        />
                        <label htmlFor="terms" className="text-sm text-gray-300">
                            I agree to the terms and conditions
                        </label>
                    </div>
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className={`w-full ${loading ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'} 
                        text-gray-100 py-2 px-4 rounded-md flex items-center justify-center`}
                >
                    {loading ? 'Sending...' : 'Submit'}
                </button>
            </form>
        </div>
        </div>
    )
}
