const redux = require("redux");

const counterReducer = (state = { counter: 0 }, action) => {
    console.log(action);
  switch (action.type) {
    case "inc":
      return {
        counter: state.counter + 1,
      };
    case "dec":
      return {
        counter: state.counter - 1,
      };
  
    }

    return {
        counter: state.counter
    };


};

const store = redux.createStore(counterReducer);

console.log(store.getState());

const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

store.subscribe(counterSubscriber);

store.dispatch({ type: "inc" });
console.log(store.getState());
store.dispatch({ type: "inc" });
console.log(store.getState());
store.dispatch({ type: "inc" });
console.log(store.getState());
store.dispatch({ type: "dec" });
console.log(store.getState());
