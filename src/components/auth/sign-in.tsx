
import { signIn } from "@/auth"

export function SignIn() {
    return (
        <form
            action={async () => {
                "use server"
                await signIn("github")
            }}
        >
            <button type="submit" className="px-4 py-2 bg-neutral-800 text-white rounded hover:bg-neutral-700 transition" >Sign in with GitHub</button>
        </form>
    )
}
