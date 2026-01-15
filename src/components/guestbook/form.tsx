'use client'

import { useRef } from 'react'
import { saveGuestbookEntry } from '@/app/guestbook/actions'
import { useFormStatus } from 'react-dom'

function SubmitButton() {
    const { pending } = useFormStatus()

    return (
        <button
            type="submit"
            disabled={pending}
            className="flex items-center justify-center px-4 py-2 font-medium text-black transition bg-white rounded-md disabled:opacity-50 hover:bg-neutral-200"
        >
            {pending ? 'Signing...' : 'Sign Guestbook'}
        </button>
    )
}

export default function GuestbookForm() {
    const formRef = useRef<HTMLFormElement>(null)

    return (
        <form
            ref={formRef}
            action={async (formData) => {
                await saveGuestbookEntry(formData)
                formRef.current?.reset()
            }}
            className="relative max-w-[500px]"
        >
            <input
                aria-label="Your message"
                placeholder="Your message..."
                name="entry"
                required
                className="block w-full px-4 py-3 mb-2 bg-neutral-900 border border-neutral-800 rounded-md text-neutral-100 placeholder:text-neutral-500 focus:ring-2 focus:ring-neutral-500 focus:outline-none"
            />
            <SubmitButton />
        </form>
    )
}
