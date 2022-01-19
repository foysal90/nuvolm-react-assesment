import React from "react";
import ArrowOnImage from "../images/arrow-on.svg";
import ArrowOffImage from "../images/arrow-off.svg";

const Card = () => {
  return (
    <div className="card">
      <img className="card__image" src="https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg" />
      <div className="card__title">Mens Casual Slim Fit</div>
      <img className="card__arrow" src={ArrowOnImage} />
    </div>
  );
};

export default Card;
