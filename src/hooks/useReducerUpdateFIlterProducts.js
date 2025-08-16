import { useReducer } from "react";

export const UPDATE_FILTER_ACTION_PRODUCT = {
  INITIAL: "INITIAL",
  REMOVE_QUERY: "REMOVE_QUERY",
  UPDATE_QUERY: "UPDATE_QUERY",
  CHANGE_PAGE: "CHANGE_PAGE",
  UPDATE_QUERY_ID: "UPDATE_QUERY_ID",
};
const reducerUpdateDataFilter = (state, action) => {
  switch (action.type) {
    case UPDATE_FILTER_ACTION_PRODUCT.INITIAL:
      return { ...state, ...action.payload };
    case UPDATE_FILTER_ACTION_PRODUCT.CHANGE_PAGE:
      return { ...state, ...action.payload.page };
    default:
      break;
  }
};
const useReducerUpdateFilterProducts = () => {
  const [state, dispatch] = useReducer(reducerUpdateDataFilter, undefined);
  return { state, dispatch };
};
export default useReducerUpdateFilterProducts;
