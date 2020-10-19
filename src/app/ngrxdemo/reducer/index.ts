import {createFeatureSelector, createSelector} from '@ngrx/store';

// 第二步 导入我们的reducer文件
import * as fromCounter from './counter.reducer';
import * as fromBookManage from './book-manage.reducer';

export interface State {
  counter: fromCounter.State;
  bookManage: fromBookManage.State;
}
export const reducers = {
  counter: fromCounter.reducer,
  bookManage: fromBookManage.reducer
};

//  将模块example的所有数据挂在store上，命名为example，里面保存example模块里面所有页面的数据
/*
export declare function createFeatureSelector<T>(featureName: string): MemoizedSelector<object, T>;
*/

// 所有页面数据的一个抽象!!!, 用state命名

console.log('start export in index.ts');

export const getExampleState = createFeatureSelector<State>('example');

// 计数器页面
/*
// tslint:disable-next-line: max-line-length
export declare function createSelector<State, S1, Result>(s1:
     Selector<State, S1>, projector: (s1: S1) => Result): MemoizedSelector<State, Result>;
*/

// 参数1：所有页面数据的一个抽象
// 参数2：如何通过state拿到包裹的业务数据
// 这算是Counter State的一个抽象，可以近似理解成页面数据State的一个子集
// 注意，这里的state.counter还不是具体的number，而是fromCounter.State，即: counter: fromCounter.State; 而fromCounter.State的定义：
/*
export interface State {
  counter: number;
}
*/
export const getCounterState = createSelector(getExampleState, (state: State) => state.counter);

// 这个函数最后要传给store.select, 作为一个map function
/*
    输入1：某个具体的State，比如CounterState
    输入2：如何根据State拿到具体的值
    // select<K>(mapFn: (state: T) => K): Observable<K>;
    this.counter$ = store.select(fromExample.getCounterCounter);
*/
export const getCounterCounter = createSelector(getCounterState, fromCounter.getCounter);

export const jerryGetNameSelector = createSelector(getCounterState, fromCounter.jerryGetName);

// 图书管理
export const getBookManageState = createSelector(getExampleState, (state: State) => state.bookManage);

export const getBookManageList = createSelector(getBookManageState, fromBookManage.getList);


console.log('index.ts end');
