// This is a custom search hook with a function to search and state to store the results
import { useState, useEffect, Dispatch, SetStateAction } from "react";
import axios from "axios";
import { SearchEndpointResponse } from "../types/SearchEndpointResponse";

export function useSearch() {
  const [searchState, setSearchState] = useState({
    hits: [],
  } as SearchEndpointResponse);
  const refetchSearch = (search: string) => {
    axios
      .post(
        "https://B1DNT5RUEF-dsn.algolia.net/1/indexes/prod_listing_grouped/query",
        { query: search },
        {
          headers: {
            "x-algolia-api-key": "cf0df355324891a712c5c43d83383f17",
            "x-algolia-application-id": "B1DNT5RUEF",
          },
        }
      )
      .then((res) => {
        setSearchState(res.data);
      });
  };
  return { searchState, refetchSearch };
}
