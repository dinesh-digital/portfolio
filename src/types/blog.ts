export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  publishDate: string;
  author: {
    name: string;
    avatar: string;
    bio: string;
  };
  category: BlogCategory;
  tags: string[];
  metaTitle: string;
  metaDescription: string;
  readTime: number;
  isPublished: boolean;
}

export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  color: string;
}

export interface BreadcrumbItem {
  label: string;
  href: string;
}