import Link from "next/link";
import { getProfile } from "@/lib/data";
import { Button } from "@/components/ui/Button";

export function Hero() {
  const profile = getProfile();

  return (
    <section id="top" className="mx-auto flex max-w-6xl flex-col gap-10 px-5 pb-16 pt-12 sm:px-6 lg:px-8 lg:pb-20 lg:pt-16">
      <div className="max-w-4xl">
        <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.24em] text-neutral-500">
          {profile.role}
        </p>
        <h1 className="max-w-3xl text-5xl font-semibold tracking-[-0.08em] text-neutral-900 sm:text-6xl lg:text-7xl">
          {profile.name}
        </h1>
      </div>

      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <p className="max-w-2xl text-lg leading-8 text-neutral-600 sm:text-xl">
          {profile.shortBio}
        </p>

        <div className="flex flex-wrap gap-3">
          <Button href={`mailto:${profile.email}`} external>
            Email me
          </Button>
          <Button href={profile.resumeUrl} variant="secondary">
            Resume
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-2 border-t border-neutral-200 pt-6 text-sm text-neutral-600 sm:flex-row sm:items-center sm:justify-between">
        <span>{profile.location}</span>
        <span>{profile.availability}</span>
      </div>

      <div className="flex flex-wrap gap-3 text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-500">
        <Link href="#work" className="transition-colors hover:text-neutral-900">
          Work
        </Link>
        <Link href="#experience" className="transition-colors hover:text-neutral-900">
          Experience
        </Link>
        <Link href="#about" className="transition-colors hover:text-neutral-900">
          About
        </Link>
      </div>
    </section>
  );
}
