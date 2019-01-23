import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Import layout components
import Header from "./layout/Header";
import Footer from "./layout/Footer";
// Import Routes
import { AllRoutes } from "./routes";

// Layout default
const Layout = ({ children }) => (
  <Fragment>
    <Header />
    <main>{children}</main>
    <Footer />
  </Fragment>
);

// Return All Routes
const MyRoutes = ({ path, component }, k) => (
  <Route exact path={path} component={component} key={k} />
);

// Routes
const Routes = () => (
  <Layout>
    <Switch>{AllRoutes.map(MyRoutes)}</Switch>
  </Layout>
);

export const App = () => (
  <Router>
    <Route path="/" component={Routes} />
  </Router>
);
