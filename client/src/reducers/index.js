const initialState = {
  navBackground: "rgba(25, 25, 25, .7)",
  dist: true
};

function rootReducer(state = initialState, action) {
  switch (action.type) {

    case "SET_NAV_BACKGROUND":
      return {
        ...state,
        navBackground: action.payload
      };

      case "SET_DIST":
        return{
          ...state,
          dist: action.payload
        }

    default:
      return state;
  }
}

export default rootReducer;