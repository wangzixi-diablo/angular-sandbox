import * as counter from '../actions/counter.actions';

// 定义计时器reducer里面要存的状态
export interface State {
  counter: number;
}
// 定义初始化状态
const initialState: State = {
  counter: 0
};
// 定义reducer 根据action type来处理状态，返回对应数据
export function reducer(state = initialState, action: counter.Actions): State {
  switch (action.type) {
    case counter.INCREMENT: // 根据你传的行为的类型，来判断做什么事情
      return {
        counter: state.counter + 1
      };

    case counter.DECREMENT:
      return {
        counter: state.counter - 1
      };

    case counter.RESET:
      return {
      counter: 0
    };

    default:
      return { ...state };
  }
}
// 导出去
export const getCounter = (state: State) => state.counter;
