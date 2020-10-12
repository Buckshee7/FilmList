import React from 'react';

export default function FilmList (props){
    return (
        <li>
            <a href={props.film.url}><h2>{props.film.name}</h2></a>  
        </li>
    )
}