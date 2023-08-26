export interface INewsItem {
  id: string;
  title: string;
  content: string;
  image: string;
  datetime: string;
}

export interface IComment {
  id: string;
  id_news: string;
  author: string;
  text: string;
}

export interface INewsItemFormState {
  title: string;
  content: string;
  image: File | null;
}

export interface ICommentFormState {
  author: string;
  text: string;
}