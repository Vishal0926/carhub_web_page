import React from "react";
import "./App.css";

function App() {
  return (
    <div className="hero">
      <header className="navbar">
        <div className="logo">CARZONE</div>
        <ul className="nav-links">
          <li>HOME</li>
          <li>SERVICE</li>
          <li>FEATURED CARS</li>
          <li>NEW CARS</li>
          <li>CONTACT</li>
        </ul>
      </header>

      <div className="hero-content">
        <h1>GET YOUR <span className="highlight">DREAM CAR</span> AT A <span className="highlight">DREAM PRICE</span></h1>
        <p>The largest inventory of cars in Northern India</p>
        <button className="cta-button">CONTACT US</button>
      </div>
    </div>
  );
}

export default App;
