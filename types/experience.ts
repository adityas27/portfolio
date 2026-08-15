export type Experience = {
  id: string;
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string | null;
  current: boolean;
  description: string;
  responsibilities: string[];
  technologies: string[];
  companyUrl: string | null;
};
