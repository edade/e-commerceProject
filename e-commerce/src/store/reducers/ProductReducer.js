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
  loading: false,
};
export const ProductReducer = (state = productInitial, action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return {
        ...state,
        productList: action.payload.products,
        fetchState: FETCH_STATES.fetched,
        loading: false,
      };

    case "SET_FETCH_STATE":
      return {
        ...state,
        fetchState: action.payload,
        loading: action.payload === FETCH_STATES.fetching,
      };
    case "FETCH_MORE":
      return {
        ...state,
        totalProductCount: action.payload.total,
        productList: [...state.productList, ...action.payload.products],
        fetchState: "MORE",
      };

    default:
      return state;
  }
};
