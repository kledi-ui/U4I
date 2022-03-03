import React from "react";
import { ICard } from "../../helpers";
import Style from "./style";

const Card = ({ title, value, color ,...rest}: ICard) => {
  return (
      <Style background={color} {...rest}>
        <h2>{title}</h2>
        <h3>{value}</h3>
      </Style>
  );
};

export default Card;
