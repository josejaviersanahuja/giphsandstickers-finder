import React, { ReactElement } from "react";
import SearchForm from "../../components/SearchForm";
import ListOfGifs from "../../components/ListOfGifs"

export default function Home(): ReactElement {
  const GIPHY_API_KEY = import.meta.env.API_KEY
  console.log(GIPHY_API_KEY);
  
  /* falta añadir el useSEO */
  return (
    <div className="home">
      hola
      <SearchForm/>
      {/*<div className="App-wrapper">
        <div className="App-main">
          <div className="App-results">
            <h3 className="App-title">Última búsqueda</h3>
            <ListOfGifs /* gifs={gifs} / />
          </div>
          <div className="App-category">
            <TrendingSearches />
          </div>
        </div>
      </div> */}
    </div>
  );
}
