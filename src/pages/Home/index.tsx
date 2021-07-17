import React, { ReactElement } from "react";
import SearchForm from "../../components/SearchForm";
import ListOfGifs from "../../components/ListOfGifs"
import { useGifs } from "../../hooks/useGifs";
import TrendingSearches from "../../components/TrendingSearches/TrendingSearches";
import Spinner from "../../components/Spinner";


export default function Home(): ReactElement {
  const {gifs, loading} = useGifs({})

  /* falta añadir el useSEO */
  return (
    <div className="home">
      <SearchForm/>
      <div className="App-wrapper">
        <div className="App-main">
          <div className="App-results">
            <h3 className="App-title">Última búsqueda</h3>
            <ListOfGifs gifs={gifs} />
          </div>
          <div className="App-category">
            <TrendingSearches />
          </div>
        </div>
      </div>
    </div>
  );
}
