import { useState, useEffect, Dispatch, SetStateAction } from "react"
import { useParams } from "react-router-dom"
import { BASE_URL_GIPH, GIPHY_API_KEY } from "../feature/apiSettings"
import { Giph, useFetchListOfGifsQuery } from "../feature/gifApiCall/gifsApiSlice"
import { GorSState } from "../feature/gifORstickers/gifORstickerSlice"
import { KeywordState } from "../feature/keyword/keywordSlice"
import { useAppSelector } from "../redux/hooks"
import { fromRawGiphToPureGiph, keywordInCache } from "./useGifs"

interface custom {
    id: string
}

export default function useSingleGif() {

    const {id} = useParams<custom>()
    // extraer del caché o
    const keywordToUse : KeywordState | undefined = keywordInCache() || initialKeyword
    const {data, isFetching} = useFetchListOfGifsQuery({keyword:keywordToUse})
    const gifs = fromRawGiphToPureGiph(data, isFetching)
    const gifCache : Giph | undefined = extractGifFromCache(gifs, id)
    
    // extraer de una llamada a la API
    const [gifFromApi, setgifFromApi] = useState<Giph>(defaultGif)
    const [loadingFromApi, setloading] = useState(false)

    // console.log(gifs, 'antes del effect', isFetching);
    
    useEffect(() => {
        if (gifs===undefined || gifs.length === 0){
            setloading(true)
            fetchSingleGif(id, setgifFromApi, setloading)
            .catch(err => console.error(err, ' Error en la llamada a la API single gif. Intentelo más tarde'))
        }
        
    }, [id])


    const gif : Giph = gifCache || gifFromApi // gifCache === undefined ? defaultGif : gifCache
    return {gif, loadingFromApi}
}

/**
 *          FUNCTIONS AND CONST
 * 
 */
const extractGifFromCache = (gifs : Giph[], id:string) : Giph | undefined => {
    let gifToReturn : Giph | undefined = undefined
    if(gifs!== undefined && gifs.length > 0 ) {
        gifToReturn =  gifs.find( e => e.id === id)
        return gifToReturn
    } else {
        return undefined
    }

}

const initialKeyword : KeywordState = {
    value:"lion guard"
  }

const defaultGif : Giph = {
    id: "j9XoexYMmd7LdntEK4",
    title:"default GIF",
    url:"https://media4.giphy.com/media/j9XoexYMmd7LdntEK4/giphy.gif?cid=bce465b9pqj5cbbfk2ka3pv4bxwsgg8k54xikpxuqcqy2419&rid=giphy.gif&ct=g"
}

const fetchSingleGif = (
    id:string,
    callbackGiph: Dispatch<SetStateAction<Giph>>,
    callbackLoading: Dispatch<SetStateAction<boolean>>
    ) : Promise<void> => {
    return fetch(`${BASE_URL_GIPH}/gifs/${id}?api_key=${GIPHY_API_KEY}`)
            .then(res => res.json())
            .then(response => {
                const gifToReturn : Giph = {
                    id: response.data.id,
                    title: response.data.title,
                    url: response.data.images.original.url
                }
               // console.log(gifToReturn, 'llamada a single gif')
                callbackGiph(gifToReturn)
                callbackLoading(false)
            })
}