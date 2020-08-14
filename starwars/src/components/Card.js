import React from 'react';
import styled from 'styled-components';

let StyledCard = styled.div`

    display: flex;
    flex-direction: row;
    background: blueviolet;
    width: 40%;
    box-shadow: 0px 0px 2px 2px rgba(16,16,16,0.33);
    margin: 1rem;
    padding: 1rem;
    padding-bottom: 0rem;

    .card-header{
        width: 50%;
    
        img{
            width:100%;
        }
        h3{
            font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
            font-size: 2.2rem;
            color: white;
        }
    }
    .card-details{
        text-align: left;
        margin-left: 2rem;
        width: 50%;
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        font-size: 1.6rem;
        letter-spacing: 0.1rem;
        color: white;
    }
`


function Card(props) {

    return (
        <StyledCard className="Card">
            <div className="card-header">
                <img src={props.image} alt=''/>
                <h3>{props.name}</h3>
            </div>
            <div className="card-details">
                <p>Origin: {props.origin.name}</p>
                <p>Species: {props.species}</p>
                <p>Gender: {props.gender}</p>
                <p>Status: {props.status}</p>
                <p>Appearances: {props.episode.length}</p>
            </div>
        </StyledCard>
  );
}

export default Card;
