import React from "react";
import "./Header.css";
import { NavItem } from "../../atoms";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

export default function Header() {
  const [t] = useTranslation();
  const { count } = useSelector((state) => state.getCounter);
  return (
    <div className="header">
      <div className="Logo">
        <NavItem class="logo">{t("companyName")}</NavItem>
      </div>
      <div className="links">
        <NavItem>{t("new")}</NavItem>
        <NavItem>{t("men")}</NavItem>
        <NavItem>{t("women")}</NavItem>
        <NavItem>{t("kids")}</NavItem>
        <NavItem>{t("customize")}</NavItem>
      </div>
      <div className="shop">
        <NavItem class="icon">
          <i class="far fa-user-circle"></i>
        </NavItem>
        <NavItem class="icon">
          <i class="fas fa-shopping-bag"></i>
        </NavItem>
        {count === 0 ? null : (
          <div className="_items">
            <p>{count}</p>
          </div>
        )}
      </div>
    </div>
  );
}
