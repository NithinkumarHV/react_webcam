const SET_ISMATCHED_TRUE = "SET_ISMATCHED_TRUE";

const initialState = {
  isMatched: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_ISMATCHED_TRUE:
      return { ...state, isMatched: action.payload };
    default:
      return state;
  }
}
