import { useRef, useEffect } from 'react'
import { setIsNearScreen } from '../feature/isNearScreen/isNearScreenSlice'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
/* 
interface Props {
    
}
 */
export default function useIsNearScreen() {
    
    const isNearScreen = useAppSelector((state) => state.isNearScreen)
    const dispatch = useAppDispatch()
    const elementObservar = useRef<HTMLHeadingElement>(null)

   useEffect(() => {
    const element = elementObservar.current

    const callback : IntersectionObserverCallback = (
        entries : IntersectionObserverEntry[]
        ) => {
        const ele = entries[0]
        if(ele.isIntersecting && !isNearScreen){
            dispatch(setIsNearScreen(true))
            observer.disconnect()
    //        console.log('entro a setear el isnear screen a true');
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
        rootMargin:'100px' // que cargue cuando este a 100 px del viewport
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
