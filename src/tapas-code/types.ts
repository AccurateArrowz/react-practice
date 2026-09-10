export interface Post {
  id: string;
  userId: string;
  title: string;
  content: string;
  createdAt: string; // ISO 8601 timestamp
  likes: number;
  comments: number;
  tags: string[];
}

export interface User{
name: string, 
email: string, 
bio?: string,
}