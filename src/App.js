import React from "react";
import "./App.css";
import { Router, Link } from "@reach/router";
import { StackPage } from "./Stack/StackVisualisation";
import { SortingPage } from "./Sorting/SortingVisualisation";
import { MiscAlgorithmsPage } from "./Misc/MiscAlgorithmVisualisations";

function App() {
  return (
    <div className="App">
      <nav>
        {pages.map(page => (
          <Link key={page.title} to={page.path}>
            {page.title}
          </Link>
        ))}
      </nav>
      <Router>
        {pages.map(page => (
          <page.component key={page.title} path={page.path} />
        ))}
      </Router>
    </div>
  );
}

const Home = () => <div>HOME</div>;

const pages = [
  { component: Home, title: "Home", path: "/" },
  { component: StackPage, title: "Stack", path: "/stack" },
  { component: SortingPage, title: "Sorting", path: "/sorting" },
  { component: MiscAlgorithmsPage, title: "Misc algorithms", path: "/misc" }
];

export default App;
