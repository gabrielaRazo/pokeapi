import React from "react";
import { ImageContainer } from "./image.style";

const Image = ({ src, width, height }) => {
    return <ImageContainer src={src} width={width} height={height} />;
};

export default Image;
