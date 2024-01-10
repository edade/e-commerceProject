import { Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import ProductListPage from "./pages/ProductListPage";
import ProductPage from "./pages/ProductPage";
import AboutPage from "./pages/AboutPage";
import TeamPage from "./pages/TeamPage";
import ContactPage from "./pages/ContactPage";
import SignUpPage from "./pages/SignUpPage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { fetchRoles } from "./store/thunk/fetchRoles";
import { useEffect } from "react";
import { fetchCategories } from "./store/thunk/fetchCategories";
import LoginPage from "./pages/LoginPage";
import { userChange, userLogout } from "./store/actions/userAction";
import { AxiosInstance } from "./api/api";
import gravatar from "gravatar";
import { fetchProducts } from "./store/thunk/fetchProducts";

function App() {
  const dispatch = useDispatch();
  const isToken = localStorage.getItem("token");

  useEffect(() => {
    dispatch(fetchRoles());
    dispatch(fetchCategories());
    dispatch(fetchProducts());
  }, [dispatch]);

  const verifyHandler = async () => {
    try {
      const response = await AxiosInstance.get("/verify");

      dispatch(
        userChange({
          name: response.data.name,
          email: response.data.email,
          role_id: response.data.role_id,
          loading: false,
          error: null,
          token: response.data.token,
          gravatar: gravatar.url(response.data.email, {
            s: "200",
            r: "pg",
            d: "identicon",
          }),
        })
      );
    } catch (error) {
      toast.error("An error occurs on verify process");
      localStorage.removeItem("token");
      dispatch(userLogout());
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      if (isToken) {
        await verifyHandler();
      } else {
        dispatch(userLogout());
      }
    };

    fetchData();
  }, [dispatch, isToken]);

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
          <ProductPage />
        </Route>
        <Route exact path="/about">
          <AboutPage />
        </Route>
        <Route exact path="/blog">
          <TeamPage />
        </Route>
        <Route exact path="/contact">
          <ContactPage />
        </Route>
        <Route exact path="/signup">
          <SignUpPage />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
      </Switch>
      <ToastContainer />
    </div>
  );
}

export default App;
