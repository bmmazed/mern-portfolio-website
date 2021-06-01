import express from "express";
import expressAsyncHandler from "express-async-handler";
import data from "../data.js";
import Portfolio from "../model/portfolioModel.js";

const portfolioRouter = express.Router();

portfolioRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const portfolios = await Portfolio.find({});
    res.send(portfolios);
  })
);

portfolioRouter.get(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    await Portfolio.remove({});
    const createdPortfolios = await Portfolio.insertMany(data.portfolios);
    res.send({ createdPortfolios });
  })
);

portfolioRouter.get(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const portfolio = await Portfolio.findById(req.params.id);
    if (portfolio) {
      res.send(portfolio);
    } else {
      res.status.apply(404).send({ message: "Portfolio Not Found" });
    }
  })
);

export default portfolioRouter;
