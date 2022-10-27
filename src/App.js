import "./App.css";
import Navbar from "./components/navbar";
import Counters from "./components/counters";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <Navbar />

      <main className="container">
        <Counters />
      </main>
    </React.Fragment>
  );
}

export default App;
