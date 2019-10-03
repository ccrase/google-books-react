import React from 'react';
import { SearchBar } from './SearchBar';

export function Nav(){
    return(
        <nav className="navbar navbar-light bg-light">
            <h3>Google Books</h3>
            <SearchBar />
        </nav>
    )
};