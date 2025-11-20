import { createReducer, on } from '@ngrx/store';
import { customIncrement, decrement, increment, reset, toggleCustomInput } from './counter.actions';
import { initialState } from './counter.state';

export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }),
  on(decrement, (state) => {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }),
  on(reset, (state) => {
    return {
      ...state,
      counter: 0,
    };
  }),
  on(customIncrement, (state, action) => {
    return {
      ...state,
      counter: state.counter + action.value,
    };
  }),
  on(toggleCustomInput, (state) => {
    return {
      ...state,
      toggle: !state.toggle,
    };
  })
);
