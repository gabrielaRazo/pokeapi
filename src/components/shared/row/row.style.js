import styled from "styled-components";

export const RowContainer = styled.div`
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    ${({ center }) => center && `justify-content: center;align-items: center;`};
`;
