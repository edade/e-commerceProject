import { Switch, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import ProductListPage from "./pages/ProductListPage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/products" >
        <ProductListPage />
      </Route>
      </Switch>
    </div>
  );
}

export default App;
