import React from 'react'
import { Link } from "react-router-dom";
import pizza from "../assets/pizza.jpeg"
import '../styles/Home.css';

function Home() {
  return (
    <div className='home' style={{backgroundImage: `url(${pizza})`}}>
      <div className='headerContainer'>
        <h1>Pedro's Pizzaria</h1>
        <p>Pizza To Fit Any Taste</p>
        <Link to="/menu">
          <button>ORDER NOW</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;