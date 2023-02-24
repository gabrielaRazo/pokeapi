import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const PokemonDetails = () => {
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
            <h1>{infoPokemon.name}</h1>
        </div>
    );
};

export default PokemonDetails;
