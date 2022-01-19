import React from "react";

const ProductDetail = () => {
  return (
    <div className="product-detail">
      <img className="product-detail__price" src="https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg" />
      <div className="product-detail__description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur officiis, placeat, molestiae vero fugiat ullam quaerat amet quisquam magnam
        cupiditate nulla commodi expedita? Necessitatibus corrupti labore et iusto porro architecto.
      </div>
      <img className="product-detail__rating" src={ArrowOnImage} />
    </div>
  );
};

export default ProductDetail;
