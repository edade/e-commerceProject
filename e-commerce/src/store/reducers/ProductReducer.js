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
    return state;
  };