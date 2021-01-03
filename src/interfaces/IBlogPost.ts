import Author from './IAuthor';

export default interface IBlogPost {
  slug: string;
  title: string;
  date: string;
  coverImage: string;
  author?: Author;
  excerpt: string;
  ogImage: {
    url: string;
  };
  content: string;
}
