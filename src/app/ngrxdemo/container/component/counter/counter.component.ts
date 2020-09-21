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
  constructor(private store: Store<fromExample.State>) {
    this.counter$ = store.select(fromExample.getCounterCounter);
  }

  increment() {
    this.store.dispatch(new counterAction.IncrementAction());
  }

  decrease(){
    this.store.dispatch(new counterAction.DecrementAction());
  }
}
