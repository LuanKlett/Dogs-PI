const initialState = {
  temperaments: undefined,
  dogs: undefined,
  detail: undefined,
  loading: true,
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_TEMPERAMENTS":
      return {
        ...state,
        temperaments: action.payload,
      };

    case "GET_ALL_DOGS":
      return {
        ...state,
        dogs: action.payload,
        loading: false,
      };

    case "GET_DETAIL":
      return {
        ...state,
        detail: action.payload,
        loading: false,
      };

    case "GET_SEARCH":
      return {
        ...state,
        dogs: action.payload,
      };

    case "SET_LOADING":
      return {
        ...state,
        loading: true,
      }

    default:
      return state;
  }
}

export default rootReducer;
