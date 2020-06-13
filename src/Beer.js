import React from "react";
import './Beer.css';

const Beer = (props) => {
    let likeString = "Unlike";
    if(!props.liked){
        likeString = "Like";
    }
  return (
    <div id="container">
        <div id="leftRow">
            <div>
                <button onClick={() => props.likedBeer(props.index)}>{likeString}</button>
            </div>
            <div id="name">
                <strong>Name:</strong><br></br>{props.name}
            </div>
            <div id="tagline">
                <strong>Tagline:</strong> <br></br>{props.tagline}
            </div>
            <div id="description">
                <strong>Description:</strong> <br></br>{props.description}
            </div>
            <div id="brewers_tips">
               <strong>Tips:</strong> <br></br>{props.brewers_tips}
            </div>
        </div>
        <div id="rightRow">
            <div>
                <img src={props.imageUrl} />
            </div>
        </div>
    </div>
  );
};

export default Beer;
