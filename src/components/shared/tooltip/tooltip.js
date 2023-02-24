import React from "react";
import { TooltipContainer, TooltipContent } from "./tooltip.style";

const Tooltip = ({ children, text, top }) => {
    return (
        <TooltipContainer>
            {children}
            <TooltipContent top={top}>{text}</TooltipContent>
        </TooltipContainer>
    );
};

export default Tooltip;
