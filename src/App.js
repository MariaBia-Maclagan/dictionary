import React from "react";
import Search from "./Search"
import './App.css';

export default function App() {
  return (
    <div className="Container">
      <header className="App-header">
        <h1>Dictionary</h1>
        < Search defaultKeyWord="Creativity"/>
      </header>
      <footer> 
        <a href="https://github.com/MariaBia-Maclagan/dictionary" target="_blank" rel="noreferrer">Open sorce code </a> by M F Maclagan </footer>
    </div>
  );
}

