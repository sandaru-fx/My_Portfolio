import { HeroScene } from "@/components/ui/3d/HeroScene";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
      <HeroScene />

      <div className="z-10 flex flex-col items-center text-center">
        <h1 className="mb-4 text-5xl font-bold tracking-tighter text-white sm:text-7xl">
          Building Digital <br />
          <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
            Experiences
          </span>
        </h1>
        <p className="mb-8 max-w-[600px] text-lg text-neutral-400 sm:text-xl">
          I'm a developer passionate about 3D web, modern interactive interfaces, and building
          scalable applications.
        </p>
        <div className="flex gap-4">
          <Link
            href="/projects"
            className="rounded-full bg-indigo-600 px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-indigo-700"
          >
            View Projects
          </Link>
          <Link
            href="/blog"
            className="rounded-full border border-neutral-700 bg-black/50 px-8 py-3 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-neutral-800 hover:text-white"
          >
            Read Blog
          </Link>
        </div>
      </div>
    </div>
  );
}
