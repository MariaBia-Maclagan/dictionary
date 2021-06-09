import React from "react";
import Search from "./Search"
import './App.css';

export default function App() {
  return (
    <div className="Container">
      <header className="App-header">
        <h1>Dictionary</h1>
        < Search />
      </header>
    </div>
  );
}

