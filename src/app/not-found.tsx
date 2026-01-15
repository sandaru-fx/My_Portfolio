import Link from "next/link";
import { MoveLeft } from "lucide-react";

export default function NotFound() {
    return (
        <div className="flex min-h-[80vh] flex-col items-center justify-center text-center">
            <div className="relative">
                <h1 className="select-none text-[12rem] font-bold tracking-tighter text-neutral-900 dark:text-neutral-800">
                    404
                </h1>
                <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-2xl font-medium text-neutral-500">Page not found</p>
                </div>
            </div>

            <p className="max-w-[500px] text-neutral-400">
                Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been moved, deleted, or never existed.
            </p>

            <div className="mt-8">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 rounded-full bg-neutral-100 px-6 py-3 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-100 dark:hover:bg-neutral-700"
                >
                    <MoveLeft className="h-4 w-4" />
                    Back to Home
                </Link>
            </div>
        </div>
    );
}
