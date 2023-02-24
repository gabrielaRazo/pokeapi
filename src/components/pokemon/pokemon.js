import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ContainerImages, Name, Abilities } from "./pokemon.style";

const Pokemon = () => {
    let { id } = useParams();
    const dispatch = useDispatch();
    const infoPokemon = useSelector((state) => state.dasboardReducer.infoPokemon);
    useEffect(() => {
        dispatch({
            type: "GET_POKEMON_ID_REQUEST",
            id: id,
        });
    }, [id, dispatch]);
    console.log("infoPokemon", infoPokemon.abilities);
    return (
        <div>
            <Name>{infoPokemon.name}</Name>

            <Abilities>
                {infoPokemon.abilities.map((item) => (
                    <p>{item.ability.name}</p>
                ))}
            </Abilities>

            <ContainerImages>
                <img src={infoPokemon.sprites.front_default} />
                <img src={infoPokemon.sprites.back_default} />
            </ContainerImages>
        </div>
    );
};

export default Pokemon;
