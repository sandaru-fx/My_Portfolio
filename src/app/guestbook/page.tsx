import { auth } from '@/auth'
import GuestbookForm from '@/components/guestbook/form'
import GuestbookEntries from '@/components/guestbook/entries'
import { SignIn } from '@/components/auth/sign-in'
import { SignOut } from '@/components/auth/sign-out'

export const metadata = {
    title: 'Guestbook',
    description: 'Sign my guestbook and leave your mark.',
}

export default async function GuestbookPage() {
    const session = await auth()

    return (
        <section className="max-w-2xl mx-auto px-6 py-12">
            <h1 className="font-bold text-3xl mb-8 tracking-tighter">Guestbook</h1>

            <div className="mb-8 p-4 border border-neutral-800 rounded-lg bg-neutral-900/30">
                <h2 className="text-lg font-semibold mb-2">Sign the Guestbook</h2>
                {session?.user ? (
                    <>
                        <GuestbookForm />
                        <div className="mt-4 text-sm text-neutral-400">
                            Signed in as {session.user.name} <div className="inline-block ml-2"><SignOut /></div>
                        </div>
                    </>
                ) : (
                    <div className="flex flex-col items-start gap-4">
                        <p className="text-neutral-400 text-sm">Sign in with GitHub to leave a message. Your email works as your identifier but won't be displayed publically.</p>
                        <SignIn />
                    </div>
                )}
            </div>

            <h2 className="text-lg font-semibold mb-4">Recent Entries</h2>
            <GuestbookEntries />
        </section>
    )
}
