import * as bookManage from '../actions/book-manage.actions';
import {Book} from '../model/books';

export interface State {
  list: Book[];
}

const initialState: State = {
  list: []
};

export function reducer(state = initialState, action: bookManage.Actions): State {
    console.log('type: ' + action.type);
    switch (action.type) {
    case bookManage.SEARCH_COMPLETE:
      return {
        ...state,
        list: action.payload
      };

    default:
      return { ...state };
  }
}

export const getList = (state: State) => state.list;

