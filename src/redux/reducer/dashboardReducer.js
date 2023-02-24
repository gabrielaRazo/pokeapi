import * as dashboardActions from "../actions/dashboardActions";

const initialState = {
    test: "Hello",

    listPokemons: [],
    total: 0,

    infoPokemon: [],
};

const dashboardReducer = (state = initialState, action) => {
    switch (action.type) {
        case dashboardActions.CHANGE_TEST_VALUE:
            return { ...state, test: action.test };

        case dashboardActions.GET_POKEMON_REQUEST:
            return { ...state };
        case dashboardActions.GET_POKEMON_SUCCESS:
            return { ...state, listPokemons: action.listPokemons, total: action.total };
        case dashboardActions.GET_POKEMON_FAILURE:
            return { ...state };

        case dashboardActions.GET_INFO_POKEMON_REQUEST:
            return { ...state };
        case dashboardActions.GET_INFO_POKEMON_SUCCESS:
            return { ...state, infoPokemon: action.infoPokemon };
        case dashboardActions.GET_INFO_POKEMON_FAILURE:
            return { ...state };

        case dashboardActions.GET_POKEMON_ID_REQUEST:
            return { ...state };
        case dashboardActions.GET_POKEMON_ID_SUCCESS:
            return { ...state, infoPokemon: action.infoPokemon };
        case dashboardActions.GET_POKEMON_ID_FAILURE:
            return { ...state };

        default:
            return state;
    }
};

export default dashboardReducer;
