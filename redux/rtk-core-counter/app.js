const { createAction, createReducer, configureStore } = require("@reduxjs/toolkit");
const logger = require('redux-logger').logger;

const initialState = {
  counter: 0
};

const increase = createAction('INCREASE');
const decrease = createAction('DECREASE');
const reset = createAction('RESET');
const increaseBy = createAction('INCREASE_BY');

const counterReducer = createReducer(initialState, builder => {
  builder
    .addCase(increase, state => {
      ++ state.counter;
    }).addCase(decrease, state => {
      -- state.counter;
    }).addCase(reset, state => {
      state.counter = 0;
    }).addCase(increaseBy, (state, action) => {
      state.counter += action.payload;
    }).addDefaultCase(state => {
      state.counter += 2;
    });
});

const store = configureStore({
  reducer: counterReducer,
  middleware: [logger]
});

// store.subscribe(() => {
//   console.log(store.getState());
// })

store.dispatch(increase())
store.dispatch(increase())
store.dispatch(increase())
store.dispatch(decrease())
store.dispatch(reset())
store.dispatch(increaseBy(20))
store.dispatch({
  type: 'aa'
})

