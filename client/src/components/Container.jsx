import React from 'react';

export function Container({children}){
    return(
        <div className="container-fluid" style={{"width": "90%"}}>
            <div>
                <h1 id="app-title">Google Books API</h1>
            </div>
            { children }
        </div>
    )
}