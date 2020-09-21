import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromExample from '../../../reducer';

import { getCounterCounter } from '../../../reducer';
import { getBookManageState} from '../../../reducer';
import { getBookManageList } from '../../../reducer';
import { getCounterState } from '../../../reducer';

import * as bookManageAction from '../../../actions/book-manage.actions';
import {Observable} from 'rxjs';

import {Book} from '../../../model/books';
@Component({
  selector: 'app-book-manage',
  templateUrl: './book-manage.component.html',
  styleUrls: ['./book-manage.component.scss']
})

export class BookManageComponent implements OnInit {
  searchResult$: Observable<Book[]>;

  constructor(private store: Store<fromExample.State>) {
    // this.searchResult$ = this.store.select(fromExample.getBookManageList);
    console.log('in constructor');
    const a = getCounterCounter;
    const b = getCounterState;
    // const c = getBookManageState;
    const a1 = fromExample.getCounterCounter;
    const a2 = fromExample.getCounterState;
    const a3 = fromExample.getBookManageState;
    const a4 = fromExample.getBookManageList;

    // searchResult$ is consumed in html
    /*
    <app-book-list [bookList]="searchResult$ | async"></app-book-list>
    */
    this.searchResult$ = this.store.select(a4);
  }

  ngOnInit() {
  }

  searchEventHandler(bookName) {
    console.log('try to search book with name:' + bookName);
    this.store.dispatch(new bookManageAction.SearchAction(bookName));
  }

  jerrysearchEventHandler(bookName) {
    console.log('jerry try to search book with name:' + bookName);
    this.store.dispatch(new bookManageAction.SearchAction(bookName));
  }
}
