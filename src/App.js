import React from 'react';
import { Router, hashHistory } from 'react-router';
import Routes from "./config/routes";

const App = () => (
    <Router history={ hashHistory } >
      {Routes}
    </Router>
);

export default App;
// ALWAYS REMEMBER TO DO THIS
