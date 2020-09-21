import {createFeatureSelector, createSelector} from '@ngrx/store';

// 第二步 导入我们的reducer文件
import * as fromCounter from './counter.reducer';

export interface State {
  counter: fromCounter.State;
}
export const reducers = {
  counter: fromCounter.reducer
};

//  将模块example的所有数据挂在store上，命名为example，里面保存example模块里面所有页面的数据
export const getExampleState = createFeatureSelector<State>('example');

// 计数器页面
export const getCounterState = createSelector(getExampleState, (state: State) => state.counter);
export const getCounterCounter = createSelector(getCounterState, fromCounter.getCounter);
