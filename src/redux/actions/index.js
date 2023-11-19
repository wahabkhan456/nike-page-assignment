export const setColor = (data) => {
  return {
    type: "SET_COLOR",
    data: data,
  };
};

export const addToCart = () => {
  return {
    type: "SET_COUNTER",
  };
};
