import type { Metric } from "./common";

export type Project = {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  description: string;
  featured: boolean;
  year: string;
  role: string;
  technologies: string[];
  problem: string;
  solution: string;
  results: string[];
  metrics: Metric[];
  image: string;
  githubUrl: string | null;
  liveUrl: string | null;
  caseStudyUrl: string | null;
};
