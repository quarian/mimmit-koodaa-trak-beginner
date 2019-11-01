import React from "react";
import "./App.css";
import { Router, Link } from "@reach/router";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <Router>
        <Home path="/" />
        <Stack path="stack" />
        <Sorting path="sorting" />
      </Router>
    </div>
  );
}

const Home = () => <div>HOME</div>;

const Stack = () => <div>STACKS</div>;

const Sorting = () => <div>SORTING</div>;

export default App;
