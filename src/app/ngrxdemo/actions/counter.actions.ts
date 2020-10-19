import { Action } from '@ngrx/store';

// 加-减-重置
// 为数字增加的行为定义，相应的reducer/counter.reducer.ts文件会根据这个来做出判断
export const INCREMENT = '[Counter] Increment';  // 这个是唯一的，不能写重复哦
export const DECREMENT = '[Counter] Decrement';
export const RESET = '[Counter] Reset';
export const CONCAT = '[Name] Concat';

export class IncrementAction implements Action {
  readonly type = INCREMENT;
  constructor() { }
}

export class ConcatAction implements Action {
  readonly type = CONCAT;
  constructor() { }
}
export class DecrementAction implements Action {
  readonly type = DECREMENT;
  constructor() { }
}
export class ResetAction implements Action {
  readonly type = RESET;
  constructor() { }
}

// 将增加的Action导出，后续的reducer/counter.reducer.ts里面，会根据action来判断，具体看代码
export type Actions
  = IncrementAction
  | DecrementAction
  | ResetAction | ConcatAction;
