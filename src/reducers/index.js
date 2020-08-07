import {
  FETCH_POKEMON_START,
  FETCH_POKEMON_FAILURE,
  FETCH_POKEMON_SUCCESS
} from "../actions";

const initialState = {
  pokemon: [],
  error: "",
  isFetching: false
};

function reducer(state = initialState, action) {
  console.log("reducer", action);
  switch (action.type) {
    case FETCH_POKEMON_START:
      return {
        ...state,
        error: "",
        isFetching: true
      };
    case FETCH_POKEMON_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      };
    case FETCH_POKEMON_SUCCESS:
      return {
        ...state,
        error: "",
        isFetching: false,
        pokemon: action.payload
      };
    default:
      return state;
  }
}

export default reducer;
