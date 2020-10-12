import React, {Component} from 'react';
import Film from '../components/Film';

class FilmList extends Component{
    constructor(){
        super();
        this.state = {
            films: [
                {
                  id: 1,
                  name: "Spider-Man: Into the Spider-Verse",
                  url: "https://www.imdb.com/title/tt4633694/?ref_=rlm"
                },
                {
                  id: 2,
                  name: "Life Itself",
                  url: "https://www.imdb.com/title/tt5989218/?ref_=rlm"
                },
                {
                  id: 3,
                  name: "Mary Queen of Scots",
                  url: "https://www.imdb.com/title/tt2328900/?ref_=rlm"
                },
                {
                  id: 4,
                  name: "The Lego Movie 2: The Second Part", url: "https://www.imdb.com/title/tt3513498/?ref_=rlm"
                },
                {
                  id: 5,
                  name: "Captain Marvel",
                  url: "https://www.imdb.com/title/tt4154664/?ref_=rlm"
                }
              ]
        }
        this.filmNodes = this.state.films.map(film => {
            return <Film key={film.id} film={film}></Film>
        })
    }
         
    render(){
        return(
            <ul>
                <h2>Upcoming Film Releases for UK</h2>
                <ul>
                    {this.filmNodes}
                </ul>
                <a href="https://www.imdb.com/calendar/?region=gb">
                    <h2>View more upcoming releases</h2>
                </a>

            </ul>
        )
    }
}

export default FilmList;