import React from 'react';
import SearchBar from './SearchBar';

function Header(props) {

 console.log(props);

    return (
        <div className="Header">
            <SearchBar {...props}/>
        </div>
    );
}

export default Header;
