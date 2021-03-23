import { createStore } from "redux";
import courses from "./reducers/courses";

export const store = createStore(
  courses,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
