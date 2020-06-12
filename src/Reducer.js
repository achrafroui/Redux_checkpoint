
const InitialState = {
    count: 0
}

const Reducer = (state=InitialState, action) => {
  console.log("reducer", state, action);

  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1
      };
    case "DECREMENT":
      return {
        count: (state.count > 0) ? state.count - 1 : 0
      };
    case "RESET":
      return {
        count: 0
      };
    default:
      return state;
  }
};

export default Reducer;
