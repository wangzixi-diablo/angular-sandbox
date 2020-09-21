import { Action } from '@ngrx/store';
import {Book} from '../model/books';


export const SEARCH =           '[Book Manage] Search';
export const SEARCH_COMPLETE =  '[Book Manage] Search Complete';


export const JERRY_SEARCH =           '[Book Manage] Jerry Search';
export const JERRY_SEARCH_COMPLETE =  '[Book Manage] Jerry Search Complete';

export class SearchAction implements Action {
  readonly type = SEARCH;
  constructor(public payload: string) {
      console.log('in SearchAction ctr');
  }
}

export class JerrySearchAction implements Action {
    readonly type = JERRY_SEARCH;
    constructor(public payload: string) {
        console.log('in Jerry SearchAction ctr');
    }
  }

export class SearchCompleteAction implements Action {
    readonly type = SEARCH_COMPLETE;
    constructor(public payload: Book[]) {
      console.log('in SearchCompleteAction ctr');
    }
  }

export class JerrySearchCompleteAction implements Action {
  readonly type = JERRY_SEARCH_COMPLETE;
  constructor(public payload: Book[]) {
    console.log('in Jerry SearchCompleteAction ctr');
  }
}

// 这里需要把对应的action导出
export type Actions
  = SearchAction
  | SearchCompleteAction | JerrySearchAction | JerrySearchCompleteAction;
