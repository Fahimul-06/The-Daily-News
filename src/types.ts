export interface Author {
  id: number;
  name: string;
  avatar: string;
  bio?: string;
}

export interface Article {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  imageCaption: string;
  category: string;
  date: string;
  readTime: number;
  author: Author;
  tags: string[];
}