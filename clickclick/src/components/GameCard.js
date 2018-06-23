import React from "react";
import Radium from 'radium';

const styles ={
    img: {
        height: "275px",
        width: "275px",
        margin: "15px",
        border: "3px solid #202020",
        padding: "10px",
        background: "#202020",
        borderRadius: "20px",
        ':hover': {
            boxShadow: "10px 10px 5px #202020"
        },
    }
};

let GameCard= props => (
    <img
        className="clickImg img-fluid"
        id={props.id}
        alt={props.alt}
        src={props.image}
        style={styles.img}
        onClick={() => {
            props.selectImage(props.id)
        }}
        />

);

GameCard= Radium(GameCard);

export default GameCard;

