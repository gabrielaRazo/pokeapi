import styled from "styled-components";

export const CardContainer = styled.div`
    width: 100%;
    border-radius: 7px;
    border: 1px solid #f0f0f0;
    background-color: white;
    box-sizing: border-box;
    ${({ shadow }) => shadow && ` box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;`}
    ${({ space }) => space && `margin-left: 16px; margin-right: 16px;`}
    ${({ height }) => height && `height: ${height}px;`}
    ${({ selected }) => selected && `box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;`}
`;
