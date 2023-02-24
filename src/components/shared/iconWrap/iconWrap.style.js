import styled from "styled-components";

export const IconContainer = styled.div`
    color: ${({ color }) => (color ? `${color}` : "inherit")};
    ${({ clickable }) => clickable && `cursor: pointer;`}
    svg {
        width: ${(props) => (props.width ? props.width : "auto")};
        height: ${(props) => (props.height ? props.height : "auto")};
    }
`;
