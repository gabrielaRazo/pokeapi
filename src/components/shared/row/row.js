import React from "react";
import { RowContainer } from "./row.style";

const Row = ({ children, center }) => {
    return <RowContainer center={center}>{children}</RowContainer>;
};
export default Row;
