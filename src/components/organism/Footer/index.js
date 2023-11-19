import React from "react";
import { NavItem } from "../../atoms/index";
import "./Footer.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/actions";
import alertify from "alertifyjs";
import { useTranslation } from "react-i18next";

export default function Index() {
  const dispatch = useDispatch();
  const [t] = useTranslation();

  return (
    <div className="Footer">
      <div className="prev-next">
        <div>
          <h5 className="-button">{t("prev")}</h5>
          <NavItem class="icon large">
            <i class="fas fa-long-arrow-alt-left"></i>
          </NavItem>
        </div>
        <div>
          <h5 className="-button">{t("next")}</h5>
          <NavItem class="icon large">
            <i class="fas fa-long-arrow-alt-right"></i>
          </NavItem>
        </div>
      </div>
      <div
        className="price"
        onClick={() => {
          dispatch(addToCart());
          alertify.success(t("success"));
        }}
      >
        <NavItem class="large nav-link">{t("add_cart")} 9.8$</NavItem>
      </div>
    </div>
  );
}
