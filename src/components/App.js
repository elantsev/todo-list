import React from "react";
import "./App.css";
import Todos from "./Todos";
import Header from "./Header";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Todos />
      </main>
    </div>
  );
}

export default App;
