import React, {useEffect} from 'react';
import styled from 'styled-components';
function SearchBar(props) {
let setCharacterList = props.setCharacterList;

let StyledSearch = styled.div`
    height: 50px;
    display: flex;

    input{
        width: 40%;
        height: 65%;
        margin: auto;
        font-size: 2rem;
        font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
        text-align: center;
        box-shadow: 0px 0px 2px 3px rgba(16,16,16,0.33);
    }
`

let searchValue = props.searchValue;
    useEffect(() => {
        
        if (searchValue !== ''){ //filters the characterList based on search, restores full list from localStorage when empty
            console.log(props.characterList.filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase())));
          let test = props.characterList.filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase()))
          setCharacterList(test);
        } 
        else if (searchValue === '' && JSON.parse(window.localStorage.getItem('rickandmorty') !== null)){
          setCharacterList(JSON.parse(window.localStorage.getItem('rickandmorty')));
        }
       
      }, [searchValue]);

console.log(props);
  return (
    <StyledSearch className="SearchBar">
      <input type="text" 
      defaultValue="Search Characters..."
      onClick={event => event.target.value=''}
      onInput={(event) => {
          props.setSearchValue(event.target.value);
      }} />
    </StyledSearch>
  );
}

export default SearchBar;
