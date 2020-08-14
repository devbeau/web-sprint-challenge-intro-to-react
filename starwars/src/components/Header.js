import React from 'react';
import SearchBar from './SearchBar';
import styled from 'styled-components';

let StyledHeader = styled.div`
    
    div{
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
}
`

function Header(props) {



 console.log(props);

    return (
        <StyledHeader className="Header">
            <SearchBar {...props}/>
        </StyledHeader>
    );
}

export default Header;
