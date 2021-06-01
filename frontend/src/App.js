import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import PortfolioScreen from "./screens/PortfolioScreen";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route path="/" component={HomeScreen} exact></Route>
        <Route path="/portfolio/:id" component={PortfolioScreen}></Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
