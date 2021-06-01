import Axios from "axios";
import {
  PORTFOLIO_DETAILS_FAIL,
  PORTFOLIO_DETAILS_REQUEST,
  PORTFOLIO_DETAILS_SUCCESS,
  PORTFOLIO_LIST_FAIL,
  PORTFOLIO_LIST_REQUEST,
  PORTFOLIO_LIST_SUCCESS,
} from "../constants/portfolioConstants";

export const listPortfolios = () => async (dispatch) => {
  dispatch({
    type: PORTFOLIO_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get("/api/portfolios");
    dispatch({ type: PORTFOLIO_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PORTFOLIO_LIST_FAIL, payload: error.message });
  }
};

export const detailsPortfolio = (portfolioId) => async (dispatch) => {
  dispatch({ type: PORTFOLIO_DETAILS_REQUEST, payload: portfolioId });
  try {
    const { data } = await Axios.get(`/api/portfolios/${portfolioId}`);
    dispatch({ type: PORTFOLIO_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PORTFOLIO_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
