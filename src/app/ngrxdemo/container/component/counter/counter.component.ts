import * as fromExample from '../../../reducer';
import { Store, createSelector } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as counterAction from '../../../actions/counter.actions';
import { Component } from '@angular/core';
import { selectTotal }  from './selector';
import { dummy } from './selector-type';

console.log(selectTotal);
console.log(dummy);

@Component({
  selector: 'app-ngrx-demo',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {
  counter$: Observable<number>;
  name$: Observable<string>;
  currentID = 999;

  // this Store is ngrx's standard data type
  // type parameter: application's own state
  constructor(private store: Store<fromExample.State>) {
    // what should be passed into store.select?
    // map Function: (state: fromExample.State) => number
    // input: application's own state
    // output: number
    // select<K>(mapFn: (state: T) => K): Observable<K>;
    console.log('in CounterComponent constructor');

    // 2020-11-05 3:36PM - 经过调试，最后发现，一旦对this.counter$调用
    // subscribe，最终会触发fromExample.getCounterCounter, 后者
    // 从当前最新的state里取数据
    this.counter$ = store.select(fromExample.getCounterCounter);


    // 2020-10-13 5:31PM 新学的
    this.counter$.subscribe((data) => this.currentID = data).unsubscribe();
    console.log('current ID: ' + this.currentID);
    this.name$ = store.select(fromExample.jerryGetNameSelector);
  }

  increment() {
    console.log('in CounterComponent increment');
    this.store.dispatch(new counterAction.IncrementAction());
  }

  concat() {
    this.store.dispatch(new counterAction.ConcatAction());
  }

  decrease(){
    console.log('in CounterComponent decrement');
    this.store.dispatch(new counterAction.DecrementAction());
  }
}
