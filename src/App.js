import React from "react";
import "./App.css";
import { Router, Link } from "@reach/router";
import { StackPage } from "./Stack/Stack";

function App() {
  return (
    <div className="App">
      <nav>
        {pages.map(page => (
          <Link to={page.path}>{page.title}</Link>
        ))}
      </nav>
      <Router>
        {pages.map(page => (
          <page.component path={page.path} />
        ))}
      </Router>
    </div>
  );
}

const Home = () => <div>HOME</div>;

const Sorting = () => <div>SORTING</div>;

const pages = [
  { component: Home, title: "Home", path: "/" },
  { component: StackPage, title: "Stack", path: "/stack" },
  { component: Sorting, title: "Sorting", path: "/sorting" }
];

export default App;
