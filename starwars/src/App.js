import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Header from './Components/Header';

import './App.css';
import Character from './Components/Character';

let StyledPages = styled.div`
  display: flex;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  letter-spacing: 0.08rem;
  font-size: 2rem;
  align-items: center;
  justify-content: center;
  width: 70%;
  margin: 2rem auto;
  background: blueviolet;
  box-shadow: 0px 0px 3px 3px rgba(16,16,16,0.33);
  div{
    width: 150px;
    background: crimson;
    color: white;
    padding: 0.5rem;
    margin: 0.75rem;
    border-radius: 12px;
    box-shadow: 0px 0px 3px 3px rgba(16,16,16,0.33);

  }
`


function App() {
  let storeKey = window.localStorage.getItem('rickandmorty');
  let initialList = [];
  if (JSON.parse(storeKey) !== null) {initialList = JSON.parse(storeKey)}
  
  const [characterList, setCharacterList] = useState(initialList);
  const [pageFilter, setPageFilter] = useState(1);
  const [searchValue, setSearchValue] = useState('');
  const [renderList, setRenderList] = useState([]);
  
  
  useEffect(_ => { 
    let page = 1;
    const BASE_URL = 'https://rickandmortyapi.com/api/character/?page=';
    
    //Recursive function call to get the entire characterList
    function recursiveGet(url, characterArray = []){ 
      let prevCharArray = characterArray;
      let newCharArray = [];
      
        axios.get(url)
          .then(response => {
            newCharArray = response.data.results
              .map(charObj => charObj = {...charObj, page: page});
            page++;
            prevCharArray = prevCharArray.concat(newCharArray)
            if (response.data.info.next !== null){ // continue recursion until next prop is true
              recursiveGet(BASE_URL + page, prevCharArray);
            }
            else {
              setCharacterList(prevCharArray);
              setPageFilter(1);
              //local store will allow characterlist to be repopulated, to undo filter by search
              window.localStorage.setItem("rickandmorty", JSON.stringify(prevCharArray));
            }
          })
          .catch(error => {
            console.log("Axios GET error!", error);
            debugger;
          });
    }
    if (JSON.parse(window.localStorage.getItem('rickandmorty')) !== null){
    recursiveGet(BASE_URL + page); // call the axios.get recursively if local storage is empty;
    }
  }, []);

  useEffect(() =>{ //sets the characters to be rendered, hardcoded to 20 per page
    if (characterList !== []){
      setRenderList(characterList.filter((_, ind) => (pageFilter-1)*10 <=ind && ind < pageFilter*10));
    } 
    else {
      setRenderList(characterList)
    }
  },[pageFilter, characterList, searchValue]) //will take effect either by search, or by page manipulation
  
  
  

  return (
    <div className="App">
      <Header characterList={characterList} setCharacterList={setCharacterList} searchValue={searchValue} setSearchValue={setSearchValue} setRenderList/>
      <StyledPages>
        {renderList!==[] && <div onClick={e => pageFilter !== 1 && setPageFilter(pageFilter - 1)}>Previous Page</div>}
        <div>Current Page: {pageFilter}</div>
        {renderList!==[] &&<div onClick={e => pageFilter <= characterList.length / 20 && setPageFilter(pageFilter + 1)}>Next Page</div>}
      </StyledPages>
      <Character characterList={renderList}/>
    </div>
  );
}

export default App;
