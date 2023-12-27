import { Switch, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import ProductListPage from "./pages/ProductListPage";
import ProductPage from "./pages/ProductPage";
import AboutPage from "./pages/AboutPage";
import TeamPage from "./pages/TeamPage";
import ContactPage from "./pages/ContactPage";
import SignUpPage from "./pages/SignUpPage";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        <Route exact path="/blog">
          <TeamPage/>
        </Route>
        <Route exact path="/contact">
          <ContactPage/>
        </Route>
        <Route exact path="/signup">
          <SignUpPage/>
        </Route>
      </Switch>
      <ToastContainer />
    </div>
  );
}

export default App;
