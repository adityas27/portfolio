import profile from "@/data/profile.json";
import navigation from "@/data/navigation.json";
import social from "@/data/social.json";
import skills from "@/data/skills.json";
import achievements from "@/data/achievements.json";
import projects from "@/data/projects.json";
import experience from "@/data/experience.json";
import education from "@/data/education.json";

import type { Profile } from "@/types/profile";
import type { Project } from "@/types/project";
import type { Experience } from "@/types/experience";
import type { Education as EducationType } from "@/types/education";
import type { LinkItem, SocialLink } from "@/types/common";

export function getProfile(): Profile {
  return profile as Profile;
}

export function getNavigation(): LinkItem[] {
  return navigation as LinkItem[];
}

export function getSocialLinks(): SocialLink[] {
  return social as SocialLink[];
}

export function getProjects(): Project[] {
  return projects as Project[];
}

export function getFeaturedProjects(): Project[] {
  return (projects as Project[]).filter((project) => project.featured);
}

export function getExperience(): Experience[] {
  return experience as Experience[];
}

export function getEducation(): EducationType[] {
  return education as EducationType[];
}

export function getSkills(): Array<{ category: string; items: string[] }> {
  return skills as Array<{ category: string; items: string[] }>;
}

export function getAchievements(): Array<{
  id: string;
  title: string;
  description: string;
  date: string;
  link: string | null;
}> {
  return achievements as Array<{
    id: string;
    title: string;
    description: string;
    date: string;
    link: string | null;
  }>;
}
