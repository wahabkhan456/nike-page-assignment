import React, { useState } from "react";
import "./shoecase.css";
import { Image } from "../../atoms";
import { useSelector } from "react-redux";

export default function Index() {
  const allImages = useSelector((state) => state.getImages.images);
  console.log(allImages);
  const [current, setCurrent] = useState(0);

  const getNext = () => {
    if (current === 2) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  };

  const getPrev = () => {
    if (current === 0) {
      setCurrent(2);
    } else {
      setCurrent(current - 1);
    }
  };

  return (
    <div className="show-case">
      <div className="shoe-image">
        <Image image={allImages[current]} />
      </div>
      <div className="rotation"></div>
      <div className="rotation-buttons">
        <i class="fa fa-caret-left icon" onClick={() => getPrev()}></i>
        <i class="fa fa-caret-right icon" onClick={() => getNext()}></i>
      </div>
    </div>
  );
}
