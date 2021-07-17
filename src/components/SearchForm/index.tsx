import React from "react"
import { useHistory } from "react-router-dom";
import { setKeyword } from "../../feature/keyword/keywordSlice";
import { RatingValue, setRating } from "../../feature/rating/ratingSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import ButtonComponent from "../Boton";

const RATINGS : RatingValue[] = ["g", "pg", "pg-13", "r"]

export default function SearchForm() {
  const {keyword, rating} = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  const history = useHistory();
  // form para hacer las búsquedas de giphs y stickers
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (
    evnt: React.ChangeEvent<HTMLFormElement>
  ): void => {
    evnt.preventDefault();
    //navegar a otra ruta
    keyword.value !== "" && history.push(`/search/${keyword.value}`);
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
  
/*   const onSubmit = ({ keyword }) => {
    if (keyword !== '') {
      // navegar a otra ruta
      pushLocation(`/search/${keyword}/${rating}`)
    }
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    onSubmit({ keyword })
  }

 */
// console.log(keyword);

  return (
    <>
    <form onSubmit={handleSubmit}>
        <ButtonComponent>search</ButtonComponent>
        <input
          placeholder="search for gifs..."
          onChange={handleChange}
          type="text"
          value={keyword.value}
        />
        <select
        /*   className={css["c-search-list"]}*/
          value={rating.value}
          onChange={handleChangeRating}
        >
          <option disabled>Rating:</option>
        {RATINGS.map((rating) => (
            <option key={rating}>{rating}</option>
          ))}
        </select>
      </form>
    </>
  )
}
