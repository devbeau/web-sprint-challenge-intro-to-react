import React, {useEffect} from 'react';
import styled from 'styled-components';
function SearchBar(props) {
let setCharacterList = props.setCharacterList;



let searchValue = props.searchValue;
    useEffect(() => {
        
        if (searchValue !== ''){ //filters the characterList based on search, restores full list from localStorage when empty
            console.log(props.characterList.filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase())));
          let test = props.characterList.filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase()))
          setCharacterList(test);
          props.setPageFilter(1);
        } 
        else if (searchValue === '' && JSON.parse(window.localStorage.getItem('rickandmorty') !== null)){
          setCharacterList(JSON.parse(window.localStorage.getItem('rickandmorty')));
        }
       
      }, [searchValue]);

console.log(props);
  return (
    <div className="SearchBar">
      <input type="text" 
      defaultValue="Search Characters..."
      onClick={event => event.target.value=''}
      onInput={(event) => {
          props.setSearchValue(event.target.value);
          
      }} />
    </div>
  );
}

export default SearchBar;
