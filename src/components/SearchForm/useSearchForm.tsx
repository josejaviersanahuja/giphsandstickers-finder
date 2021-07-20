import { useHistory } from "react-router-dom";
import { setKeyword } from "../../feature/keyword/keywordSlice";
import { resetPageState } from "../../feature/page/pageSlice";
import { setRating } from "../../feature/rating/ratingSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

export default function useSearchForm() {
const {keyword, rating} = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  const history = useHistory();
  // form para hacer las búsquedas de giphs y stickers
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (
    evnt: React.ChangeEvent<HTMLFormElement>
  ): void => {
    evnt.preventDefault();
    // reiniciamos el page state por si acaso
    dispatch(resetPageState())
    //navegar a otra ruta
    keyword.value !== "" && history.push(`/search/${keyword.value}/${rating.value}`);
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (
    evnt: React.ChangeEvent<HTMLInputElement>
  ): void => {
    dispatch(setKeyword(evnt.target.value));
  };
  
  const handleChangeRating : React.ChangeEventHandler<HTMLSelectElement> = (
      evnt : React.ChangeEvent<HTMLSelectElement>
  ) :void => {
      dispatch(setRating(evnt.target.value))
  }
    return {keyword, rating, handleChange, handleChangeRating, handleSubmit}
}
