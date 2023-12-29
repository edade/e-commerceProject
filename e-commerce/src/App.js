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
import  { useDispatch} from "react-redux";
import { fetchRoles } from "./store/thunk/fetchRoles";
import { useEffect } from "react";
import { fetchCategories } from "./store/thunk/fetchCategories";
import LoginPage from "./pages/LoginPage";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRoles())
    //dispatch(fetchCategories())
  }, [dispatch])
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
        <Route exact path="/login">
          <LoginPage/>
        </Route>
      
      </Switch>
      <ToastContainer />
    </div>
  );
}

export default App;
