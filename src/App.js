import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Beer from './Beer';

function App() {


  const URL = "https://api.punkapi.com/v2/beers";
  const [beers, setBeers] = useState([]);
  const [beersLiked, setBeersLiked] = useState([]);

  useEffect(() => {
    loadBeers();
  }, []);


  const loadBeers = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setBeers(data);
    for(var i in beers){
      beersLiked[i] = false;
    }
  }


  const likedBeer = (index) => {
    const updatedList = [...beersLiked];
    const isLiked = updatedList[index];
    if(isLiked){
      updatedList[index] = false;
    }
    else{
      updatedList[index] = true;
    }
    setBeersLiked(updatedList);
  };


  return (
    <div className="App">
      <header className="App-header">
      {beers.map((beer, index) => (
        
        <Beer key={index} index={index} name={beer.name} imageUrl={beer.image_url} tagline={beer.tagline} description={beer.description}  brewers_tips={beer.brewers_tips} likedBeer={likedBeer} liked={beersLiked[index]} />
      ))}
      </header>
    </div>
  );
}

export default App;
