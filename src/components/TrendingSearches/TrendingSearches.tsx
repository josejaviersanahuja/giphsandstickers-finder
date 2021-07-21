import React, { useState, useEffect } from "react";
import { useFetchTrendingGifsQuery } from "../../feature/trends/trendsApiSlice";
import Category from "../Category";
import Spinner from "../Spinner";
import Footer from "../Footer";

export default function TrendingSearches() {
  const { data, isFetching } = useFetchTrendingGifsQuery({});
  const trends: string[] = data === undefined ? [] : data.data;

  if (isFetching) {
    return <Spinner />;
  }
  return (
    <>
      <Category options={trends} />
      <Footer />
    </>
  );
}
