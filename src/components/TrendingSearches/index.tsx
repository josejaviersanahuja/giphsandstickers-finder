import React, {Suspense} from 'react'
import useIsNearScreen from '../../hooks/useIsNearScreen'
import Spinner from '../Spinner'
//import TrendingSearches from './TrendingSearches'
 const TrendingSearches = React.lazy(
  () => import('./TrendingSearches')
)

export default function LazyTrending () {

  const {isNearScreen, elementObservar} = useIsNearScreen()

  return <div ref={elementObservar}>
    <Suspense fallback={<Spinner />}>
      {isNearScreen? <TrendingSearches /> : <Spinner />}
    </Suspense>
  </div>
}