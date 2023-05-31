import { SET_PATH, SET_TERMINALS } from "../types/searchTypes";

const setPath = path => ({
    type: SET_PATH,
    payload: path
});

const setTerminals = data => ({
    type: SET_TERMINALS,
    payload: data
});

const SearchActions = {
    setPath,
    setTerminals
};

export default SearchActions;