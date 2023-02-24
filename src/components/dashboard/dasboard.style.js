import styled from "styled-components";

export const ContainerList = styled.div`
    flex: 0 1 40%;
    text-align: right;
`;

export const Button = styled.button`
    background-color: white;
    border: 1px solid gray;
    border-radius: 5px;
    padding: 5px;

    ${(props) => (props.inhabilitaded ? `border: 1px solid #999999; background-color: #cccccc; color: #666666; cursor: not-allowed;` : "")};
`;

export const Pagination = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    span {
        padding: 5px;
    }
    margin-top: 1em;
`;

export const ContainerPokemonInfo = styled.div`
    text-align: center;
    flex: 0 1 40%;
`;

export const Row = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`;

export const Image = styled.img`
    width: 250px;
`;
