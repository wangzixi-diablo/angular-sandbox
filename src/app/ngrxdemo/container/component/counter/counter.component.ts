import * as fromExample from '../../../reducer';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as counterAction from '../../../actions/counter.actions';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ngrx-demo',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {
  counter$: Observable<number>;

  // this Store is ngrx's standard data type
  // type parameter: application's own state
  constructor(private store: Store<fromExample.State>) {
    // what should be passed into store.select?
    // map Function: (state: fromExample.State) => number
    // input: application's own state
    // output: number
    // select<K>(mapFn: (state: T) => K): Observable<K>;
    console.log('in CounterComponent constructor');
    this.counter$ = store.select(fromExample.getCounterCounter);
  }

  increment() {
    console.log('in CounterComponent increment');
    this.store.dispatch(new counterAction.IncrementAction());
  }

  decrease(){
    console.log('in CounterComponent decrement');
    this.store.dispatch(new counterAction.DecrementAction());
  }
}
