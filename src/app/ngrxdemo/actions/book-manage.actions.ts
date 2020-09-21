import { Action } from '@ngrx/store';
import {Book} from '../model/books';


export const SEARCH =           '[Book Manage] Search';
export const SEARCH_COMPLETE =  '[Book Manage] Search Complete';

export class SearchAction implements Action {
  readonly type = SEARCH;
  constructor(public payload: string) {
      console.log('in SearchAction ctr');
  }
}

export class SearchCompleteAction implements Action {
  readonly type = SEARCH_COMPLETE;
  constructor(public payload: Book[]) {
    console.log('in SearchCompleteAction ctr');
  }
}

// 这里需要把对应的action导出
export type Actions
  = SearchAction
  | SearchCompleteAction;
