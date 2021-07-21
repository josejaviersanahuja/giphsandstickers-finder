import React from "react"
import { RatingValue, setRating } from "../../feature/rating/ratingSlice";
import ButtonComponent from "../Boton";
import useSearchForm from "./useSearchForm";

const RATINGS : RatingValue[] = ["g", "pg", "pg-13", "r"]

export default function SearchForm() {

  const {keyword, rating, handleChange, handleSubmit, handleChangeRating} = useSearchForm()
  
  return (
    <>
    <form onSubmit={handleSubmit}>
        <ButtonComponent id="search__btn">search</ButtonComponent>
        <input
          placeholder="search for gifs..."
          onChange={handleChange}
          type="text"
          value={keyword.value}
        />
        <select
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
