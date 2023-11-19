import React from "react";
import "./ShoeInfo.css";
import { useTranslation } from "react-i18next";

export default function ShoeInfo() {
  const [t] = useTranslation();
  return (
    <div>
      <h5 className="catagory">{t("catagory")}</h5>
      <h5 className="shoe-name">{t("name")}</h5>
      <p className="shoe-info">{t("shoe_info")}</p>
      <div className="video-container">
        <div className="Video">
          <i class="fa fa-caret-right"></i>
        </div>
        <h5 className="play-video">{t("video")}</h5>
      </div>
    </div>
  );
}
