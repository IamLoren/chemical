import React from "react";

const DealCard = ({ img, name, price, tiket, income, left, sold }) => {
  return (
    <li>
      <img src={img} alt="build" />
      <p>{name}</p>
      <span>{price} Dhs</span>
      <span>Yield {income}</span>
      <span>Sold {sold}</span>
      <span>Tiket - {tiket}</span>
      <span>Days left {left}</span>
    </li>
  );
};

export default DealCard;
