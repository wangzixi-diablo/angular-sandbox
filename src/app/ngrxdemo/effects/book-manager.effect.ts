import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import {Action} from '@ngrx/store';

import * as bookManage from '../actions/book-manage.actions';
import {BookManageService} from '../service/book-manage.service';
import {catchError, debounceTime, map, mergeMap, skip, takeUntil} from 'rxjs/operators';
import {BookResult} from '../model/books';

@Injectable()
export class BookManageEffects {
  @Effect()
  searchBookICanbeAnyName$: Observable<Action> = this.actions$.pipe(
    ofType(bookManage.SEARCH), // 监听bookManager.SEARCH action?
    debounceTime(300),
    mergeMap((action: bookManage.SearchAction) => {
      const nextSearch$ = this.actions$.pipe(ofType(bookManage.SEARCH), skip(1));
      return this.service.searchBooks(action.payload).pipe(
        takeUntil(nextSearch$),
        // If successful, dispatch success action with result
        map((data: BookResult) => ({type: bookManage.SEARCH_COMPLETE, payload: data.items})),
        // If request fails, dispatch failed action
        catchError(() => of({type: bookManage.SEARCH_COMPLETE, payload: []}))
      );
    })
  );

  constructor(private actions$: Actions, private service: BookManageService) {
      console.log('in BookManager Effect ctr');
  }
}
