import { Article } from '../models/article.module';

export interface State {
  readonly article: Array<Article>;
}