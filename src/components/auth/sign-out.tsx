import { signOut } from "@/auth"

export function SignOut() {
    return (
        <form
            action={async () => {
                "use server"
                await signOut()
            }}
        >
            <button type="submit" className="text-sm text-neutral-400 hover:text-white transition">Sign Out</button>
        </form>
    )
}
