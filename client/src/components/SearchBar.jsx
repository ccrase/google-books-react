import React from 'react';

export function SearchBar(){
    return(
        <div className="input-group" style={{"width": "35%"}}>
            <input id="search-term" type="text" className="form-control" placeholder="Search a Book Title" aria-label="Book Title" aria-describedby="search-button"/>
            <div className="input-group-append">
                <button className="btn btn-outline-primary" 
                        type="button" 
                        id="search-button" 
                        onClick={()=>{
                            var searchTerm = document.getElementById('search-term').value;
                            console.log(searchTerm);
                            return fetch('/books', searchTerm)
                            .then(res => res.text())
                            .then(data => console.log(data))
                            .catch(error => console.error(error));
                        }}>Search</button>
            </div>
        </div>
    );
}
