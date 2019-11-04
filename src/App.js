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
      <main>
        <Router>
          {pages.map(page => (
            <page.component key={page.title} path={page.path} />
          ))}
        </Router>
      </main>
    </div>
  );
}

const Home = () => (
  <div>
    <h1>Welcome to a crash introduction to data structures and algorithms!</h1>
    <p>
      From the tabs above you'll find visualizations to help you write and
      understand different algorithms with the help of simple data structures.
    </p>
    <p>
      The source code is annotated with links and hints to sources on the web -
      and remember to ask any and all questions from the instructors!
    </p>
  </div>
);

const pages = [
  { component: Home, title: "Home", path: "/" },
  { component: StackPage, title: "Stack", path: "/stack" },
  { component: SortingPage, title: "Sorting", path: "/sorting" },
  { component: MiscAlgorithmsPage, title: "Misc algorithms", path: "/misc" }
];

export default App;
