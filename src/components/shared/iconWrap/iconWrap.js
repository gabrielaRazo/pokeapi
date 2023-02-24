import React from "react";
import { IconContainer } from "./iconWrap.style";

const IconWrap = ({ children, color, width, heigth, clickable }) => {
    return (
        <IconContainer color={color} width={width} heigth={heigth} clickable={clickable}>
            {children}
        </IconContainer>
    );
};

export default IconWrap;
