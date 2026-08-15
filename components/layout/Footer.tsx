import Link from "next/link";
import { getProfile, getSocialLinks } from "@/lib/data";

export function Footer() {
  const profile = getProfile();
  const socialLinks = getSocialLinks();

  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 border-b border-neutral-200 pb-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-neutral-500">Contact</p>
            <h3 className="mt-2 text-3xl font-semibold tracking-[-0.06em] text-neutral-900">
              {profile.name}
            </h3>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-neutral-600">
            {socialLinks.map((link) => (
              <Link key={link.platform} href={link.url} className="transition-colors hover:text-neutral-900">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-between gap-2 text-sm text-neutral-500 sm:flex-row">
          <p>© {new Date().getFullYear()} {profile.name}</p>
          <p>{profile.location}</p>
        </div>
      </div>
    </footer>
  );
}
