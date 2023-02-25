import axios from "axios";

const endopoint = "https://pokeapi.co/api/v2/pokemon";

export function getPokemonsCall(offset, limit) {
    return axios({
        method: "get",
        url: endopoint + "?limit=" + limit + "&offset=" + offset,
        headers: { "Content-Type": "application/json", Authorization: null },
    })
        .then((response) => {
            return response;
        })
        .catch((error) => {
            return error.response.data;
        });
}

export function getInfoPokemonCall(url) {
    return axios({
        method: "get",
        url: url,
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
        url: endopoint + "/" + id,
        headers: { "Content-Type": "application/json", Authorization: null },
    })
        .then((response) => {
            return response;
        })
        .catch((error) => {
            return error.response.data;
        });
}
