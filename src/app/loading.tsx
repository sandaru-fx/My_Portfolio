export default function Loading() {
    return (
        <div className="flex min-h-[50vh] flex-col items-center justify-center space-y-4">
            <div className="flex items-center space-x-2">
                <div className="h-3 w-3 animate-bounce rounded-full bg-indigo-500 [animation-delay:-0.3s]"></div>
                <div className="h-3 w-3 animate-bounce rounded-full bg-indigo-500 [animation-delay:-0.15s]"></div>
                <div className="h-3 w-3 animate-bounce rounded-full bg-indigo-500"></div>
            </div>
            <p className="animate-pulse text-sm text-neutral-500 font-mono">Loading...</p>
        </div>
    );
}
