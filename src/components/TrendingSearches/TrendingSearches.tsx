import React, { useState, useEffect } from 'react'
import { useFetchTrendingGifsQuery } from '../../feature/trends/trendsApiSlice'
/* 
import Category from 'components/Category'
 */
export default function TrendingSearches () {

    const { data , isFetching } = useFetchTrendingGifsQuery({})
    const trends : string[] = data === undefined ? [] : data.data
  
  return <div>Trending</div> 
}
/* <Category name='Tendencias' options={trends} /> */