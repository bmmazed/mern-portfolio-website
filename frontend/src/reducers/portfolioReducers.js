import {
  PORTFOLIO_DETAILS_FAIL,
  PORTFOLIO_DETAILS_REQUEST,
  PORTFOLIO_DETAILS_SUCCESS,
  PORTFOLIO_LIST_FAIL,
  PORTFOLIO_LIST_REQUEST,
  PORTFOLIO_LIST_SUCCESS,
} from "../constants/portfolioConstants";

export const portfolioListReducer = (
  state = { loading: true, portfolios: [] },
  action
) => {
  switch (action.type) {
    case PORTFOLIO_LIST_REQUEST:
      return { loading: true };
    case PORTFOLIO_LIST_SUCCESS:
      return { loading: false, portfolios: action.payload };
    case PORTFOLIO_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const portfolioDetailsReducer = (
  state = { portfolio: {}, loading: true },
  action
) => {
  switch (action.type) {
    case PORTFOLIO_DETAILS_REQUEST:
      return { loading: true };
    case PORTFOLIO_DETAILS_SUCCESS:
      return { loading: false, portfolio: action.payload };
    case PORTFOLIO_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
