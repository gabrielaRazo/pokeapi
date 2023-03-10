import { takeLatest, put, call } from "redux-saga/effects";
import * as dashboardActions from "../actions/dashboardActions";
import { getPokemonsCall, getInfoPokemonCall, pokemonByIDCall } from "../services/dashboardServices";

function* getPokemons(action) {
    try {
        const page = action.page === 1 ? action.page - 1 : (action.page - 1) * 20;
        const limit = action.page <= 7 ? 20 : 11;
        console.log("page", page);
        const response = yield call(getPokemonsCall, page, limit);
        if (response.status === 200) {
            const listPokemons = response.data.results;
            const total = 151;
            yield put({ type: dashboardActions.GET_POKEMON_SUCCESS, listPokemons, total });
        } else {
            yield put({ type: dashboardActions.GET_POKEMON_FAILURE });
        }
    } catch (error) {
        yield put({ type: dashboardActions.GET_POKEMON_FAILURE });
    }
}
export function* getPokemonsSaga() {
    yield takeLatest(dashboardActions.GET_POKEMON_REQUEST, getPokemons);
}

function* getInfoPokemon(action) {
    try {
        const endopoint = action.url;
        const response = yield call(getInfoPokemonCall, endopoint);

        if (response.status === 200) {
            const infoPokemon = response.data;
            yield put({ type: dashboardActions.GET_INFO_POKEMON_SUCCESS, infoPokemon });
        } else {
            yield put({ type: dashboardActions.GET_INFO_POKEMON_FAILURE });
        }
    } catch (error) {
        yield put({ type: dashboardActions.GET_INFO_POKEMON_FAILURE });
    }
}
export function* getInfoPokemonSaga() {
    yield takeLatest(dashboardActions.GET_INFO_POKEMON_REQUEST, getInfoPokemon);
}

function* pokemonByID(action) {
    try {
        const id = action.id;
        const response = yield call(pokemonByIDCall, id);
        if (response.status === 200) {
            const infoPokemon = response.data;
            yield put({ type: dashboardActions.GET_POKEMON_ID_SUCCESS, infoPokemon });
        } else {
            yield put({ type: dashboardActions.GET_POKEMON_FAILURE });
        }
    } catch (error) {
        yield put({ type: dashboardActions.GET_POKEMON_ID_FAILURE });
    }
}
export function* pokemonByIDSaga() {
    yield takeLatest(dashboardActions.GET_POKEMON_ID_REQUEST, pokemonByID);
}
