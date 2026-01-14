export function Footer() {
    return (
        <footer className="border-t border-white/10 bg-black/20 backdrop-blur-md py-8">
            <div className="container mx-auto px-4 text-center text-sm text-neutral-500">
                <p>&copy; {new Date().getFullYear()} My Portfolio. Built with Next.js & Three.js.</p>
            </div>
        </footer>
    );
}
