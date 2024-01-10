export const FETCH_STATES = {
  notFetched: "NOT_FETCHED",
  fetching: "FETHCING",
  fetched: "FETCHED",
  failed: "FAILED",
};

const productInitial = {
  productList: [],
  totalProductCount: 0,
  pageCount: 1,
  activePage: 1,
  fetchState: FETCH_STATES.notFetched,
};
export const ProductReducer = (state = productInitial, action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return {
        ...state,
        productList: action.payload.products,
        fetchState: FETCH_STATES.fetched,
      };

    case "SET_FETCH_STATE":
      return { ...state, fetchState: action.payload };

    default:
      return state;
  }
};
