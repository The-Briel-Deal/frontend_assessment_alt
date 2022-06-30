import { useState, useEffect, Dispatch, SetStateAction } from "react";
import axios from "axios";
import { SearchEndpointResponse } from "../types/SearchEndpointResponse";
const [searchState, setSearchState] = useState({
  hits: [],
} as SearchEndpointResponse);
export const refetchSearch = (search: string) => {
  useEffect(() => {
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
        console.log(res);
      });
  });
};
