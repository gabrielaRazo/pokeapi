import React from "react";
import { CardContainer } from "./card.style";

const Card = ({ children, space, height, selected, shadow }) => {
    return (
        <CardContainer space={space} height={height} selected={selected} shadow={shadow}>
            {children}
        </CardContainer>
    );
};

export default Card;
