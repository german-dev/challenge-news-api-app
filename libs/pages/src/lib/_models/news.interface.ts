export interface NewsArticle {
  source: {
    id?: string;
    name: string;
  };
  author?: string;
  title: string;
  description?: string;
  urlToImage?: string;
  publishedAt: string;
  content?: string;
}
