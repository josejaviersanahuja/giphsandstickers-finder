import React, { ReactElement, useEffect } from "react";
import SearchForm from "../../components/SearchForm";
import ListOfGifs from "../../components/ListOfGifs";
import useGifs from "../../hooks/useGifs";
import TrendingSearches from "../../components/TrendingSearches";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { resetPageState } from "../../feature/page/pageSlice";
import ButtonComponent from "../../components/Boton";
import { showGifs, showStickers } from "../../feature/gifORstickers/gifORstickerSlice";
//import Spinner from "../../components/Spinner";

export default function Home(): ReactElement {
  const { gifs, loading } = useGifs({});

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(resetPageState());
  }, []);
  // console.log(gifs);

  /* falta añadir el useSEO */
  return (
    <>
      {" "}
      <ButtonComponent onClick={() => dispatch(showGifs())}>
        Gifs
      </ButtonComponent>
      <ButtonComponent onClick={() => dispatch(showStickers())}>
        Stickers
      </ButtonComponent>
      <div className="home">
        <SearchForm />
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
    </>
  );
}
