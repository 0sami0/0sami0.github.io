
export interface Project {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  liveUrl?: string;
  sourceUrl?: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
}
