// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Grid, TextField, Button } from "@mui/material";
import { useState, useEffect } from "react";

export default function SearchBar(props: {
  refetchSearch: (search: string, page: number) => void;
  numPages: number;
}) {
  const [page, setPage] = useState(0);
  const [searchBarValue, setSearchBarValue] = useState("");
  useEffect(() => {
    props.refetchSearch(searchBarValue, page);
  }, [page]);
  function handleClick() {
    props.refetchSearch(searchBarValue, page);
  }
  return (
    <Grid
      container
      justifyContent="center"
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      rowGap={{ xs: 1, sm: 2, md: 3 }}
    >
      <Grid item xs={4}>
        <TextField
          css={css`
            height: 100%;
            width: 100%;
          `}
          id="outlined-basic"
          label="Card Name"
          variant="outlined"
          value={searchBarValue}
          onChange={(e) => {
            setSearchBarValue(e.target.value);
          }}
        />
      </Grid>
      <Grid item xs={2}>
        <Button
          css={css`
            height: 100%;
            width: 100%;
          `}
          variant="contained"
          onClick={handleClick}
        >
          Search
        </Button>
      </Grid>
      <Grid container justifyContent="center">
        <Grid
          item
          css={css`
            margin-right: 10px;
          `}
        >
          <Button
            variant="contained"
            onClick={() => {
              setPage(page - 1);
            }}
            disabled={page <= 0}
          >
            Prev Page
          </Button>
        </Grid>
        <Grid
          item
          css={css`
            margin-left: 10px;
          `}
        >
          <Button
            variant="contained"
            onClick={() => {
              setPage(page + 1);
            }}
            disabled={page >= props.numPages - 1}
          >
            Next Page
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
