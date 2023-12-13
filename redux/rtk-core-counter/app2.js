const { createSlice, configureStore } = require("@reduxjs/toolkit");
const { logger } = require('redux-logger');

const initialState = {
  counter: 0
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      ++ state.counter;
    },
    decrement: state => {
      -- state.counter;
    },
    reset: state => {
      state.counter = 0;
    },
    incrementBy: (state, action) => {
      state.counter += action.payload;
    }
  }
});

const { increment, decrement, reset, incrementBy} = counterSlice.actions;


const store = configureStore({
  reducer: counterSlice.reducer,
  middleware: [logger]
});

store.dispatch(increment())
store.dispatch(increment())
store.dispatch(increment())
store.dispatch(decrement())
store.dispatch(reset())
store.dispatch(incrementBy(20))

