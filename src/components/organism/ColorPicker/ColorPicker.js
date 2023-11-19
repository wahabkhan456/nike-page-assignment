import React from "react";
import { Color } from "../../atoms";
import "./ColorPicker.css";
import { useDispatch } from "react-redux";
import {
  getBlackImages,
  getBlueImages,
  getDustImages,
  getWhiteImages,
} from "../../../helper/GetImgs";

import { setColor } from "../../../redux/actions";
import { useTranslation } from "react-i18next";

export default function ColorPicker() {
  const [t] = useTranslation();
  const dispatch = useDispatch();

  return (
    <div>
      <h5 className="size-selection-title">{t("s_c")}</h5>
      <div className="color-conatiner">
        <Color
          color="#B6A179"
          onClick={() => dispatch(setColor(getDustImages()))}
        />
        <Color
          color="#272425"
          onClick={() => dispatch(setColor(getBlackImages()))}
        />
        <Color
          color="#6389CB"
          onClick={() => dispatch(setColor(getBlueImages()))}
        />
        <Color
          color="white"
          onClick={() => dispatch(setColor(getWhiteImages()))}
        />
      </div>
    </div>
  );
}
