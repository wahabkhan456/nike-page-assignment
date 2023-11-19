const getCounter = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "SET_COUNTER":
      return {
        count: state.count + 1,
      };
    default:
      return state;
  }
};

export default getCounter;
