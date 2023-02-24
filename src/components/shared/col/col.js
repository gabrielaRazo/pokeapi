import React from "react";
import { ColContainer } from "./col.style";

const Col = ({ children, lg, md, sm, xs, center, space, collapse, hidden, none }) => {
    return (
        <ColContainer lg={lg} md={md} sm={sm} xs={xs} center={center} space={space} collapse={collapse} hidden={hidden} none={none}>
            {children}
        </ColContainer>
    );
};

export default Col;
