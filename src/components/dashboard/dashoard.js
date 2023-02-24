import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, ContainerList, ContainerPokemonInfo, Pagination, Image, Row } from "./dasboard.style";

const Dashboard = () => {
    const navigate = useNavigate();
    const [page, setPage] = useState(1);
    const dispatch = useDispatch();
    const listPokemons = useSelector((state) => state.dasboardReducer.listPokemons);
    const infoPokemon = useSelector((state) => state.dasboardReducer.infoPokemon);

    useEffect(() => {
        dispatch({
            type: "GET_POKEMON_REQUEST",
            page: page,
        });
    }, [dispatch, page]);
    console.log("page", page);

    const handleClick = (event) => {
        if (event.detail === 2) {
            navigate("/pokemonInfo/" + infoPokemon.id);
        }
    };

    const onShowPokemonInfo = (url) => {
        dispatch({
            type: "GET_INFO_POKEMON_REQUEST",
            url: url,
        });
    };
    console.log("infoPokemon", infoPokemon);
    return (
        <>
            <Pagination>
                <Button inhabilitaded={page === 1} onClick={() => setPage(page - 1)}>
                    Previews
                </Button>
                <span>{page}</span>
                <Button inhabilitaded={page === 6} onClick={() => setPage(page + 1)}>
                    Next
                </Button>
            </Pagination>
            <Row>
                {infoPokemon.sprites ? (
                    <ContainerPokemonInfo>
                        <Image src={infoPokemon.sprites.front_default} />
                    </ContainerPokemonInfo>
                ) : (
                    false
                )}
                <ContainerList>
                    {listPokemons.map((pokemon) => (
                        <h1
                            onClick={(e) => {
                                onShowPokemonInfo(pokemon.url);
                                handleClick(e);
                            }}
                            className="center"
                        >
                            {pokemon.name}
                        </h1>
                    ))}
                </ContainerList>
            </Row>
        </>
    );
};

export default Dashboard;
