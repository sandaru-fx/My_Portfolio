'use client'

import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { sendEmail } from '@/app/contact/actions'
import { Check, Loader2, Send } from 'lucide-react'

export function ContactForm() {
    const formRef = useRef<HTMLFormElement>(null)
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

    async function handleSubmit(formData: FormData) {
        setStatus('sending')
        try {
            await sendEmail(formData)
            setStatus('success')
            formRef.current?.reset()
            // Reset success status after 3 seconds
            setTimeout(() => setStatus('idle'), 3000)
        } catch (error) {
            setStatus('error')
        }
    }

    return (
        <motion.form
            ref={formRef}
            action={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-neutral-400">Name</label>
                    <input
                        required
                        type="text"
                        name="name"
                        id="name"
                        placeholder="John Doe"
                        className="w-full px-4 py-3 bg-neutral-900/50 border border-neutral-800 rounded-lg focus:ring-2 focus:ring-white/20 focus:border-white/20 outline-none transition-all placeholder:text-neutral-600 text-neutral-200"
                    />
                </div>
                <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-neutral-400">Email</label>
                    <input
                        required
                        type="email"
                        name="email"
                        id="email"
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 bg-neutral-900/50 border border-neutral-800 rounded-lg focus:ring-2 focus:ring-white/20 focus:border-white/20 outline-none transition-all placeholder:text-neutral-600 text-neutral-200"
                    />
                </div>
            </div>

            <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-neutral-400">Subject</label>
                <input
                    required
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder="Project Inquiry"
                    className="w-full px-4 py-3 bg-neutral-900/50 border border-neutral-800 rounded-lg focus:ring-2 focus:ring-white/20 focus:border-white/20 outline-none transition-all placeholder:text-neutral-600 text-neutral-200"
                />
            </div>

            <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-neutral-400">Message</label>
                <textarea
                    required
                    name="message"
                    id="message"
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="w-full px-4 py-3 bg-neutral-900/50 border border-neutral-800 rounded-lg focus:ring-2 focus:ring-white/20 focus:border-white/20 outline-none transition-all placeholder:text-neutral-600 text-neutral-200 resize-none"
                />
            </div>

            <button
                type="submit"
                disabled={status === 'sending' || status === 'success'}
                className={`
          flex items-center justify-center w-full md:w-auto px-8 py-3 rounded-lg font-medium transition-all duration-300
          ${status === 'success'
                        ? 'bg-green-500 text-black hover:bg-green-400'
                        : 'bg-white text-black hover:bg-neutral-200'
                    }
          disabled:opacity-70 disabled:cursor-not-allowed
        `}
            >
                {status === 'sending' ? (
                    <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Sending...
                    </>
                ) : status === 'success' ? (
                    <>
                        <Check className="w-4 h-4 mr-2" />
                        Sent Successfully
                    </>
                ) : (
                    <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                    </>
                )}
            </button>
        </motion.form>
    )
}
