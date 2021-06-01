import React, { useEffect } from "react";
import LoadingBox from "./LoadingBox";
import MessageBox from "./MessageBox";
import { useDispatch, useSelector } from "react-redux";
import { listPortfolios } from "../actions/portfolioActions";

export default function Portfolio() {
  const dispatch = useDispatch();
  const portfolioList = useSelector((state) => state.portfolioList);
  const { loading, error, portfolios } = portfolioList;

  useEffect(() => {
    dispatch(listPortfolios());
  }, [dispatch]);

  return (
    <div>
      <div className="content">
        <div className="title">
          <span>My Portfolios</span>
        </div>
        <p>
          This website is a MERN Portfolio Website. I have done some works
          through this time. Here I have listed some of my notable works, which
          are shown below.
        </p>
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <div className="boxes">
            {portfolios.map((portfolio) => (
              <div key={portfolio._id} className="box">
                <div className="icon">
                  <a href={`/portfolio/${portfolio._id}`}>
                    <img src={portfolio.image} alt={portfolio.name} />
                  </a>
                </div>
                <div className="topic">{portfolio.name}</div>
                <div className="technologies">
                  Technology Used: {portfolio.technology}
                </div>
                <p>
                  {portfolio.description}
                  <a href={`/portfolio/${portfolio._id}`}> Read more...</a>
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
