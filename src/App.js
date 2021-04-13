import React from "react";

//react router dom
import { BrowserRouter, Switch, Route } from "react-router-dom";

//**Components**/
import Page from "./pages/Page";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Page} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
