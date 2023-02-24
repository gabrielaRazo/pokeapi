import React from "react";
import { IconContainer } from "./iconWrap.style";

const IconWrap = ({ children, color, width, height, clickable }) => {
    return (
        <IconContainer color={color} width={width} height={height} clickable={clickable}>
            {children}
        </IconContainer>
    );
};

export default IconWrap;
