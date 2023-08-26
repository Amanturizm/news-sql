export interface INewsItem {
  id: string;
  title: string;
  content: string;
  image: string;
  datetime?: string;
}

export interface IComment {
  id: string;
  id_news: string;
  author: string;
  text: string;
}