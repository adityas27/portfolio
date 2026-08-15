import Link from "next/link";
import { getNavigation, getProfile, getSocialLinks } from "@/lib/data";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  const navigation = getNavigation();
  const profile = getProfile();
  const socialLinks = getSocialLinks();

  return (
    <header className="sticky top-0 z-40 border-b border-neutral-200/80 bg-white/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-4 sm:px-6 lg:px-8">
        <Link href="#top" className="text-sm font-semibold tracking-[0.2em] text-neutral-900 uppercase">
          {profile.name}
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-6 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-neutral-600 transition-colors hover:text-neutral-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          {socialLinks.slice(0, 2).map((link) => (
            <Link
              key={link.platform}
              href={link.url}
              className="text-sm text-neutral-600 transition-colors hover:text-neutral-900"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="md:hidden">
          <Button href={`mailto:${profile.email}`} variant="secondary">Email</Button>
        </div>
      </div>
    </header>
  );
}
