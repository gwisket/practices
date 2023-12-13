const { createStore } = require('redux');

const initialState = {
  count: 0
};

const increaseCount = () => ({
  type: 'INCREASE_COUNT'
});

const decreaseCount = () => ({
  type: 'DECREASE_COUNT'
});

const resetCount = () => ({
  type: 'RESET_COUNT'
});

const increaseCountBy = (amount) => ({
  type: 'INCREASE_COUNT_BY',
  payload: {
    amount: amount
  }
});

const counterReducer = (state = initialState, action) => {
  console.log(state, action);

  switch (action.type) {
    case 'INCREASE_COUNT':
      return {
        ...state,
        count: state.count + 1
      }

    case 'DECREASE_COUNT':
      return {
        ...state,
        count: state.count - 1
      }

    case 'RESET_COUNT':
      return {
        ...state,
        count: 0
      }

    case 'INCREASE_COUNT_BY':
      return {
        ...state,
        count: state.count + action.payload.amount
      }
  }
}

const store = createStore(counterReducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(increaseCount());
store.dispatch(increaseCount());
store.dispatch(increaseCount());
store.dispatch({
  type: '@@redux/INIT'
})
store.dispatch(increaseCount());
store.dispatch(increaseCount());

