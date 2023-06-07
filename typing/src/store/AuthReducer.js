const initState = {
  isAuth: false,
};

function AuthReducer(state = initState, action) {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isAuth: true,
      };
    case "LOGOUT":
      localStorage.removeItem("userData"); // Clear localStorage
      return {
        ...state,
        isAuth: false,
      };
    default:
      return state;
  }
}

export default AuthReducer;
