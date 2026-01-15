"use client";

import { useEffect } from "react";
import { RotateCcw } from "lucide-react";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <div className="flex min-h-[80vh] flex-col items-center justify-center text-center">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
                Something went wrong!
            </h2>
            <p className="mt-4 max-w-[500px] text-neutral-500">
                We apologize for the inconvenience. An unexpected error updated occurred while processing your request.
            </p>

            <div className="mt-8 flex gap-4">
                <button
                    onClick={reset}
                    className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-indigo-700"
                >
                    <RotateCcw className="h-4 w-4" />
                    Try again
                </button>
            </div>
            <p className="mt-8 font-mono text-xs text-neutral-700 dark:text-neutral-800">
                {error.digest && `Error ID: ${error.digest}`}
            </p>
        </div>
    );
}
