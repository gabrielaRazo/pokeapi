import styled from "styled-components";

export const TooltipContainer = styled.div`
    position: relative;
    display: inline-block;
`;

export const TooltipContent = styled.span`
    visibility: hidden;
    width: 130px;
    background-color: black;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 5px;
    position: absolute;
    z-index: 1;
    top: ${({ top }) => (top ? `10%` : `100%`)};
    left: 50%;
    margin-left: -4.5em;
    opacity: 0;
    transition: opacity 0.3s;

    ${TooltipContainer}:hover & {
        visibility: visible;
        opacity: 1;
    }
`;
