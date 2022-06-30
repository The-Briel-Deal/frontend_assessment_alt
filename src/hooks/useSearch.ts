import { useState, useEffect } from "react";
import axios from "axios";
const useSearch = async (search: string) => {
  const result = await axios.post(
    "https://B1DNT5RUEF-dsn.algolia.net/1/indexes/prod_listing_grouped/query",
    {
      headers: {
        "x-algolia-api-key": "cf0df355324891a712c5c43d83383f17",
        "x-algolia-application-id": "B1DNT5RUEF",
      },
    }
  );
};
