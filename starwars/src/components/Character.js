import React from 'react';
import styled from 'styled-components';
import Card from './Card';

let StyledCharacters = styled.div`

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;

    h2{
        width: 17%;
        margin: 1rem 40%;
        padding: 0.5rem;
        font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
        font-size: 2.6rem;
        letter-spacing: 0.05rem;
        color: white;
        background: blueviolet;
        border-radius: 12px;
        box-shadow: 0px 0px 3px 2px rgba(5,5,5,0.5);
    }
`



function Character({characterList}) {

    const buildCharacter = characterList => characterList.map(character => <Card key ={character.id} {...character} />);

    return (
        <StyledCharacters className="Character">
            <h2>Characters:</h2>
            {buildCharacter(characterList)}
        </StyledCharacters>
    );
}

export default Character;
