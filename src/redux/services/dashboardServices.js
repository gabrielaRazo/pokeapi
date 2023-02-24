import axios from "axios";

export function getPokemonsCall(offset) {
    return axios({
        method: "get",
        url: "https://pokeapi.co/api/v2/pokemon?limit=20&offset=" + offset,
        headers: { "Content-Type": "application/json", Authorization: null },
    })
        .then((response) => {
            return response;
        })
        .catch((error) => {
            return error.response.data;
        });
}

export function getInfoPokemonCall(endpoint) {
    return axios({
        method: "get",
        url: endpoint,
        headers: { "Content-Type": "application/json", Authorization: null },
    })
        .then((response) => {
            return response;
        })
        .catch((error) => {
            return error.response.data;
        });
}

export function pokemonByIDCall(id) {
    return axios({
        method: "get",
        url: "https://pokeapi.co/api/v2/pokemon/" + id,
        headers: { "Content-Type": "application/json", Authorization: null },
    })
        .then((response) => {
            return response;
        })
        .catch((error) => {
            return error.response.data;
        });
}
