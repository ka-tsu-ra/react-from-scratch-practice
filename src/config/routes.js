import React from "react";
// import Main from "../components/Main";
// import Home from "../components/Home";
import { Route } from 'react-router';
// import UserProfileContainer from "../containers/UserProfileContainer";
import PhotoListContainer from "../containers/photoListContainer";
// import WorkshopListContainer from "../containers/WorkshopListContainer";

const Routes = (
  <Route path="/" component={PhotoListContainer}>
  </Route>
);

export default Routes;
