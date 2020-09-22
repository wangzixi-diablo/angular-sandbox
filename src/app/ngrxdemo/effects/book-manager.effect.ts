import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import {Action} from '@ngrx/store';

import * as bookManage from '../actions/book-manage.actions';
import {BookManageService} from '../service/book-manage.service';
import {catchError, debounceTime, map, mergeMap, skip, takeUntil, switchMap} from 'rxjs/operators';
import {BookResult, Book} from '../model/books';

@Injectable()
export class BookManageEffects {

  constructor(private actions$: Actions, private service: BookManageService) {
      console.log('in BookManager Effect ctr');
  }

  BOOK: Book = {
        id: 'Jerry-Book',
        volumeInfo: {
          title: 'Diablo',
          subtitle: 'Diablo II',
          authors: ['Jerry', 'Tom'],
          publisher: 'SAP',
          publishDate: '2020-2-2',
          description: 'This is great book',
          averageRating: 1,
          ratingsCount: 100
        }
    };
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

  // tslint:disable-next-line: member-ordering

  // tslint:disable-next-line: member-ordering
  jerryFilter = ofType(bookManage.JERRY_SEARCH);

  jerryFilter2(){
    console.log('in JerryFilter2');
    return this.jerryFilter;
  }
  // tslint:disable-next-line: member-ordering
  @Effect()
  searchBook$: Observable<Action> = this.actions$.pipe(
    // ofType(bookManage.JERRY_SEARCH), // 监听bookManager.SEARCH action?
    this.jerryFilter2(),
    debounceTime(300),
    switchMap(() => of(new bookManage.JerrySearchCompleteAction([this.BOOK]))
    /*
    mergeMap((action: bookManage.JerrySearchAction) => {
      const nextSearch$ = this.actions$.pipe(ofType(bookManage.SEARCH), skip(1));
      return this.service.searchBooks(action.payload).pipe(
        takeUntil(nextSearch$),
        // If successful, dispatch success action with result
        map((data: BookResult) => ({type: bookManage.JERRY_SEARCH_COMPLETE, payload: data.items})),
        // If request fails, dispatch failed action
        catchError(() => of({type: bookManage.JERRY_SEARCH_COMPLETE, payload: []}))
      );
    })*/
  ));
  jerryForMergeMap(action: bookManage.JerrySearchAction){
    return of([]);
  }
}
