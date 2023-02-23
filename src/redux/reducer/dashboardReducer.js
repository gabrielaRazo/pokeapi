import * as dashboardActions from "../actions/dashboardActions";

const initialState = {
  test: "Hello",
};

const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case dashboardActions.CHANGE_TEST_VALUE:
      return { ...state, test: action.test };

    default:
      return state;
  }
};

export default dashboardReducer;
