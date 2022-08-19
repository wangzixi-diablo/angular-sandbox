import { Component } from '@angular/core';
import { createSelector } from '@ngrx/store';
 
export interface State {
  counter1: number;
  counter2: number;
}
 
export const selectCounter1 = (state: State) => state.counter1;
export const selectCounter2 = (state: State) => state.counter2;
export const selectTotal = createSelector(
  selectCounter1,
  selectCounter2,
  (counter1, counter2) => counter1 + counter2
); // selectTotal has a memoized value of null, because it has not yet been invoked.
 
let state = { counter1: 3, counter2: 4 };
 
@Component({
  selector: 'selector',
  template: ''
})
export class SelectorComponent{
    constructor(){
        console.log(selectTotal(state)); // computes the sum of 3 & 4, returning 7. selectTotal now has a memoized value of 7
        console.log(selectTotal(state)); // does not compute the sum of 3 & 4. selectTotal instead returns the memoized value of 7
    }
}