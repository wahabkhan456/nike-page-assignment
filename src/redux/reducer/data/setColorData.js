import { getDustImages } from "../../../helper/GetImgs";
let images = getDustImages();

const setColorData = (state = { images }, action) => {
  switch (action.type) {
    case "SET_COLOR":
      state = action.data;
      return {
        images: state,
      };
    default:
      return state;
  }
};

export default setColorData;
