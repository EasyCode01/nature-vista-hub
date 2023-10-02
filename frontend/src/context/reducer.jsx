export const TOGGLE_MOBILE_MENU = "TOGGLE_MOBILE_MENU";
export const reducer = (state, action) => {
  switch (action.type) {
    case TOGGLE_MOBILE_MENU:
      return {
        ...state,
        isMenuOpen: action.payload,
      };
    default:
      return state;
  }
};
