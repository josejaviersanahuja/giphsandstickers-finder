import { useParams } from "react-router-dom"
import { KeywordState } from "../../feature/keyword/keywordSlice"
import { RatingState, RatingValue } from "../../feature/rating/ratingSlice"
interface UrlParams {
    keyword: string,
    rating: RatingValue
}
export default function useSearchPageProps() {
    const {keyword, rating} = useParams<UrlParams>()
   
    const keywordObject : KeywordState = {
        value:keyword
    }
    const ratingObject : RatingState ={
        value:rating
    }
    return {keyword:keywordObject, rating:ratingObject}
}
