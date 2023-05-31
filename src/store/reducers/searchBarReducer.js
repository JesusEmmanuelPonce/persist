import { SET_PATH, SET_TERMINALS } from "../types/searchTypes";

const initialState = {
    path: "My path",
	terminals: [],
};

const searchBarReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_PATH:
			return {
                ...state,
				path: action?.payload,
			};

		case SET_TERMINALS:
			return {
                ...state,
				path: action?.payload,
			};

		default:
			return state;
	}
};

export default searchBarReducer;