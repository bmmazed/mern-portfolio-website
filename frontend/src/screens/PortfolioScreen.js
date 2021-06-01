import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { detailsPortfolio } from "../actions/portfolioActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

export default function PortfolioScreen(props) {
  const dispatch = useDispatch();
  const portfolioId = props.match.params.id;
  const portfolioDetails = useSelector((state) => state.portfolioDetails);
  const { loading, error, portfolio } = portfolioDetails;

  useEffect(() => {
    dispatch(detailsPortfolio(portfolioId));
  }, [dispatch, portfolioId]);

  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div className="portfolioContainer">
          <div className="topic">{portfolio.name}</div>
          <div className="image">
            <a href={portfolio.link} target="_blank" rel="noreferrer">
              <img src={portfolio.image} alt="Portfolio" />
            </a>
          </div>
          <div className="details">
            <p>{portfolio.description}</p>
          </div>
          <div className="button">
            <Link to="/">
              <button>Home</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
