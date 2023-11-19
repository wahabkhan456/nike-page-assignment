import React from "react";
import { Size } from "../../atoms";
import "./SizeSelection.css";
import { useTranslation } from "react-i18next";

export default function SizeSelection() {
  const [t] = useTranslation();
  return (
    <div>
      <h5 className="size-selection-title">{t("s_s")}</h5>
      <div className="Size-container">
        <Size>8</Size>
        <Size>8.5</Size>
        <Size>9</Size>
        <Size>9.5</Size>
        <Size>10</Size>
      </div>
      <div className="Size-container">
        <Size>10.5</Size>
        <Size>11</Size>
        <Size>11.5</Size>
        <Size>12</Size>
        <Size>12.5</Size>
      </div>
    </div>
  );
}
