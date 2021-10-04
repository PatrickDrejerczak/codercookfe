import React from "react";
import { Switch, Route } from "react-router-dom";
import AdminPage from "./pages/AdminPage";
import AOS from "aos";
import "aos/dist/aos.css";
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";
import RecipeDetailPage from "./pages/RecipeDetailPage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import CreateRecipePage from "./pages/CreateRecipePage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ClipLoader } from "react-spinners";
import Header from "../src/components/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "./redux/actions/auth.action";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faAngry,
  faLaugh,
  faSadCry,
  faThumbsUp,
  faHeart,
  faPlus,
  faTrashAlt,
  faEdit,
  faChevronLeft,
  faSort,
  faCheckSquare,
  faTimesCircle,
  faPauseCircle,
  faCircle,
  faUser,
  faRegistered,
  faChartLine,
  faSignOutAlt,
  faSignInAlt,
  faSearch,
  faBreadSlice,
  faCarrot,
  faCommentAlt,
  faUtensils,
  faBook,
  faFireAlt,
  faPlusSquare,
} from "@fortawesome/free-solid-svg-icons";

import { fab } from "@fortawesome/free-brands-svg-icons";
import UserPage from "./pages/UserPage";

library.add(
  fab,
  faAngry,
  faLaugh,
  faSadCry,
  faThumbsUp,
  faHeart,
  faPlus,
  faTrashAlt,
  faEdit,
  faChevronLeft,
  faSort,
  faCheckSquare,
  faTimesCircle,
  faPauseCircle,
  faCircle,
  faUser,
  faRegistered,
  faChartLine,
  faSignOutAlt,
  faSignInAlt,
  faSearch,
  faUtensils,
  faBook,
  faBreadSlice,
  faCarrot,
  faCommentAlt,
  faFireAlt,
  faPlusSquare
);

function App() {
  AOS.init();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken && accessToken !== "undefined") {
      dispatch(authActions.getCurrentUser(accessToken));
    } else {
      dispatch(authActions.logout());
    }
  }, [dispatch]);

  return (
    <>
      {isAuthenticated === undefined ? (
        <div className="vh-100 vw-100 d-flex justify-content-center align-items-center">
          <ClipLoader color="#f86c6b" size={150} loading={true} />
        </div>
      ) : (
        <div>
          <ToastContainer />
          <Header />
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/category/:name" exact component={CategoryPage} />
            <Route path="/recipe/:id" exact component={RecipeDetailPage} />
            <Route path="/signup" exact component={SignupPage} />
            <Route path="/login" exact component={LoginPage} />
            <Route path="/create" exact component={CreateRecipePage} />
            <Route path="/user/:id" exact component={UserPage} />
            <Route path="/admin/:id" exact component={AdminPage} />
          </Switch>
        </div>
      )}
    </>
  );
}

export default App;
