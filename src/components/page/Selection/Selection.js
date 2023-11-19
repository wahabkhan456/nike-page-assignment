import React from "react";
import {
  Footer,
  Header,
  ShoeCase,
  ShoeInfo,
  SizeSelection,
} from "../../organism";
import ColorPicker from "../../organism/ColorPicker/ColorPicker";

import "./Selection.css";

export default function Selection() {
  return (
    <div>
      <div className="header-section">
        <Header />
      </div>
      <div className="show-case-container">
        <ShoeInfo />
        <ShoeCase />
        <div>
          <SizeSelection />
          <ColorPicker />
        </div>
      </div>
      <h5 className="scroll">SCROLL DOWN</h5>
      <div className="Icons">
        <i class="fa fa-instagram social"></i>
        <i class="fa fa-twitter social"></i>
        <i class="fa fa-facebook social"></i>
      </div>
      <div className="footer-conatiner">
        <Footer />
      </div>
    </div>
  );
}
