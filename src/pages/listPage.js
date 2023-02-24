import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Card from "../components/shared/card/card";
import Col from "../components/shared/col/col";
import Row from "../components/shared/row/row";
import Image from "../components/shared/image/image";
import { Container, TextInfo, Title } from "./listPokemon.style";
import Pagination from "../components/shared/pagination/pagination";

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
                <Row center>
                    {listPokemons.map((pokemon) => (
                        <Col lg={2} md={2} sm={5} xs={5} center space>
                            <Card space height={150} selected={infoPokemon.name === pokemon.name}>
                                <div
                                    onClick={(e) => {
                                        onShowPokemonInfo(pokemon.url);
                                        handleClick(e);
                                    }}
                                >
                                    {infoPokemon.name === pokemon.name ? <Image src={infoPokemon.sprites.front_default} width={100} /> : <TextInfo>Click here to see its picture</TextInfo>}
                                    <Title>{pokemon.name}</Title>
                                </div>
                            </Card>
                        </Col>
                    ))}
                </Row>
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
