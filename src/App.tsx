import type { FC } from "react";
import { BrowserRouter, useRoutes } from "react-router-dom";
import routes from "~react-pages";
import { Footer, NavBar } from "./components/common";

const Routes = () => {
  return useRoutes(routes);
};

const App: FC = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
