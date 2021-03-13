import { createSelector, MemoizedSelector } from '@ngrx/store';

export interface State {
    evenNums: number[];
    oddNums: number[];
  }
   
export const selectSumEvenNums = createSelector(
    (state: State) => state.evenNums,
    evenNums => evenNums.reduce((prev, curr) => prev + curr)
  );

  export const selectSumOddNums = createSelector(
    (state: State) => state.oddNums,
    oddNums => oddNums.reduce((prev, curr) => prev + curr)
  );

  export const selectTotal = createSelector(
    selectSumEvenNums,
    selectSumOddNums,
    (evenSum, oddSum) => evenSum + oddSum
  );
   
  let result = selectTotal({
    evenNums: [2, 4],
    oddNums: [1, 3],
  });
  
  console.log('Ethan', result);


  

