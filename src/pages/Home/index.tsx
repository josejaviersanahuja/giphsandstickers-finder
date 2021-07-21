import React, { ReactElement, useEffect } from "react";
import SearchForm from "../../components/SearchForm";
import ListOfGifs from "../../components/ListOfGifs";
import useGifs from "../../hooks/useGifs";
import TrendingSearches from "../../components/TrendingSearches";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { resetPageState } from "../../feature/page/pageSlice";
import ButtonComponent from "../../components/Boton";
import {
  showGifs,
  showStickers,
} from "../../feature/gifORstickers/gifORstickerSlice";
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
      <div className="home">
        <SearchForm />
        <h3 className="home__title">Última búsqueda</h3>
        <ListOfGifs gifs={gifs} />
        <div className="App-category">
          <TrendingSearches />
        </div>
      </div>
    </>
  );
}
