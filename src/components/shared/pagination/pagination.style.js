import styled from "styled-components";

export const PaginationContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
    font-size: 1rem;
    color: #666;
    span {
        margin-top: 5px;
    }
    svg {
        width: 25px;
        height: 25px;
    }
`;

export const Button = styled.button`
    background: transparent;
    border: none;
    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
    opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;
