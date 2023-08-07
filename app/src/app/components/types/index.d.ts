export type StackType = {
  name: string;
  src: string;
};

export type StackTypeArray = Array<StackType>;

export interface Article {
  title: string;
  date: string;
  shortContent: string;
  href: string;
  issueNumber?: number;
}
