import styled from "styled-components";

export const ImageContainer = styled.img`
    ${({ width }) => (width === "all" ? `width: 100%` : `width: ${width}px;`)}
    ${({ height }) => height && `height: ${height}px;`}
`;
