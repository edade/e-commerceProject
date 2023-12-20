import { Switch, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import ProductListPage from "./pages/ProductListPage";
import ProductPage from "./pages/ProductPage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/products">
          <ProductListPage />
        </Route>
        <Route exact path="/pages">
          <ProductPage/>
        </Route>
        <Route exact path="/about">
          <AboutPage/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
