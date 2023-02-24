import React from "react";
import { CardContainer } from "./card.style";

const Card = ({ children, space, height, selected }) => {
    return (
        <CardContainer space={space} height={height} selected={selected}>
            {children}
        </CardContainer>
    );
};

export default Card;
