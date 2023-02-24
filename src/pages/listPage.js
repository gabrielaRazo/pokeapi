import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Col from "../components/shared/col/col";
import Row from "../components/shared/row/row";
import { Container } from "../components/listPokemon/listPokemon.style";
import Pagination from "../components/shared/pagination/pagination";
import ListPokemons from "../components/listPokemon/listPokemon";

const ListPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [page, setPage] = useState(1);

    const listPokemons = useSelector((state) => state.dasboardReducer.listPokemons);
    const infoPokemon = useSelector((state) => state.dasboardReducer.infoPokemon);

    useEffect(() => {
        dispatch({
            type: "GET_POKEMON_REQUEST",
            page: page,
        });
    }, [dispatch, page]);

    const handleClick = (event) => {
        if (event.detail === 2) {
            navigate("/pokemonInfo/" + infoPokemon.id);
        }
    };

    const onShowPokemonInfo = (url) => {
        console.log("url", url);
        dispatch({
            type: "GET_INFO_POKEMON_REQUEST",
            url: url,
        });
    };

    return (
        <>
            <Container>
                <Row center>
                    <Col hidden={"lg"} collapse={"md"} sm={6} xs={6}>
                        <Pagination currentPage={page} totalPages={parseInt(150 / 20)} onPreviousPage={() => setPage(page - 1)} onNextPage={() => setPage(page + 1)} />
                    </Col>
                </Row>
                <ListPokemons listPokemons={listPokemons} infoPokemon={infoPokemon} handleClick={handleClick} onShowPokemonInfo={onShowPokemonInfo} />
                <Row center>
                    <Col lg={4} md={4} sm={6} xs={6}>
                        <Pagination currentPage={page} totalPages={parseInt(150 / 20)} onPreviousPage={() => setPage(page - 1)} onNextPage={() => setPage(page + 1)} />
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default ListPage;
