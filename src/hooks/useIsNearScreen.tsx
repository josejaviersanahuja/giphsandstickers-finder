import { useRef, useEffect } from 'react'
import { setIsNearScreen } from '../feature/isNearScreen/isNearScreenSlice'
import { incrementPages } from '../feature/page/pageSlice'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
/* 
PROP isSearchPage determina el uso de este Hook.
isSearchPage = false significa que estamos fuera del path base_url/search/... en particular en la home tiene uso de lazy load a las tendencias

isSearchPage = true significa que estamos en el componente SearchPage y este hook funciona para infinity scroll
 */
export default function useIsNearScreen(isSearchPage : boolean = false) {
 //   console.log(isSearchPage);
    
    const isNearScreen = useAppSelector((state) => state.isNearScreen)
    const dispatch = useAppDispatch()
    const elementObservar = useRef<HTMLHeadingElement>(null)

   useEffect(() => {
    const element = elementObservar.current

    const callback : IntersectionObserverCallback = (
        entries : IntersectionObserverEntry[]
        ) => {
        const ele = entries[0]
        // console.log(ele, isNearScreen);
        
        if(ele.isIntersecting){
            dispatch(setIsNearScreen(true))
            //console.log('isnearscreen ahora es true', ele);
            !isSearchPage && observer.disconnect() // si estamos en la home, desconectamos 
            isSearchPage && dispatch(incrementPages(1))
    //        console.log('entro a setear el isnear screen a true');
        } else {
            //console.log('isnearscreen ahora es false', ele);
            isSearchPage && dispatch(setIsNearScreen(false)) // si estamos en searchPage infinityscroll
        } 
    }
// no lo dejé en este proyecto porque no soporta typescript pero la idea es estupenda
    /* Promise.resolve(
        typeof IntersectionObserver !== undefined ? IntersectionObserver : import ('intersection-observer')
    ).then(() => {
        observer = new IntersectionObserver(callback, {
            rootMargin:'100px' // que cargue cuando este a 100 px del viewport
        })
    
        if(element) { 
            observer.observe(element) 
        }
    }) */
    const observer = new IntersectionObserver(callback, {
        rootMargin:'250px' // que cargue cuando este a 100 px del viewport
    })

    if(element) { 
        observer.observe(element) 
    }
       return () => {
           observer && observer.disconnect()
       }
   }, [])

    

    return {isNearScreen, elementObservar}
}
