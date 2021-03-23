import { ADD_COURSE } from "../actionsTypes/courses";

const INITIAL_STATE = {
  list: [],
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_COURSE:
      console.log("dispatch feito");
      return { ...state, list: [...state.list, action.title] };
    default:
      return state;
  }
}
