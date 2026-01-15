import { ContactForm } from '@/components/contact/ContactForm'
import { Github, Linkedin, Mail, MapPin } from 'lucide-react'

export const metadata = {
    title: 'Contact',
    description: 'Get in touch with me.',
}

export default function ContactPage() {
    return (
        <section className="max-w-5xl mx-auto px-6 py-12 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
                {/* Left Side: Info */}
                <div className="space-y-8">
                    <div>
                        <h1 className="font-bold text-4xl mb-4 tracking-tighter">Get in Touch</h1>
                        <p className="text-neutral-400 text-lg leading-relaxed">
                            Have a project in mind or just want to chat? I'm currently open to new opportunities and would love to hear from you.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <div className="flex items-center space-x-4 text-neutral-300">
                            <div className="p-3 bg-neutral-900 rounded-lg border border-neutral-800">
                                <Mail className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-sm text-neutral-500">Email</p>
                                <p className="font-medium">hello@example.com</p>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4 text-neutral-300">
                            <div className="p-3 bg-neutral-900 rounded-lg border border-neutral-800">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-sm text-neutral-500">Location</p>
                                <p className="font-medium">Colombo, Sri Lanka</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 pt-4">
                            <a
                                href="https://github.com/sandaru-fx"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-neutral-900 rounded-lg border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700 transition-all"
                            >
                                <Github className="w-5 h-5" />
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-neutral-900 rounded-lg border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700 transition-all"
                            >
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right Side: Form */}
                <div>
                    <ContactForm />
                </div>
            </div>
        </section>
    )
}
