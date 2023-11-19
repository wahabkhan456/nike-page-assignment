import grey0 from "../assests/imgs/grey0.jpg";
import greyright from "../assests/imgs/greyright.png";
import greyback from "../assests/imgs/greyback.png";

import blueleft from "../assests/imgs/blueleft.png";
import blueright from "../assests/imgs/blueright.png";
import blueback from "../assests/imgs/blueback.png";

import whiteleft from "../assests/imgs/whiteleft.png";
import whiteright from "../assests/imgs/whiteright.png";
import whiteback from "../assests/imgs/whiteback.png";

import blackleft from "../assests/imgs/blackleft.png";
import blackright from "../assests/imgs/blackright.png";
import blackback from "../assests/imgs/blackback.png";

export const getDustImages = () => {
  return [grey0, greyright, greyback];
};

export const getWhiteImages = () => {
  return [whiteleft, whiteright, whiteback];
};

export const getBlackImages = () => {
  return [blackleft, blackright, blackback];
};

export const getBlueImages = () => {
  return [blueleft, blueright, blueback];
};
