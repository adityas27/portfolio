import { getProfile, getSocialLinks } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Contact() {
  const profile = getProfile();
  const socialLinks = getSocialLinks();

  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-10 sm:px-6 lg:px-8 lg:py-16">
      <div className="rounded-[32px] border border-neutral-200 bg-neutral-900 px-5 py-10 text-white sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="Let’s talk"
          title="I’m open to product, platform, and engineering roles."
          align="left"
          invert
        />

        <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <p className="max-w-xl text-lg leading-8 text-neutral-300">
            I enjoy building product experiences and systems that reduce friction, improve trust, and create momentum for teams.
          </p>

          <div className="flex flex-wrap gap-3">
            <Button href={`mailto:${profile.email}`} external className="border-white bg-white text-neutral-900 hover:bg-neutral-200">
              Email me
            </Button>
            <Button href={profile.resumeUrl} variant="secondary" className="border-neutral-600 bg-transparent text-white hover:border-neutral-400 hover:bg-neutral-800">
              Resume
            </Button>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-4 text-sm text-neutral-300">
          {socialLinks.map((link) => (
            <a key={link.platform} href={link.url} className="transition-colors hover:text-white">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
