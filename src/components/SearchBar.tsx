// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Grid, TextField, Button } from "@mui/material";
import { useState, useEffect } from "react";

export default function SearchBar(props: {
  refetchSearch: (search: string) => void;
}) {
  const [searchBarValue, setSearchBarValue] = useState("");
  return (
    <Grid
      container
      justifyContent="center"
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
    >
      <Grid item xs={4}>
        <TextField
          css={css`
            height: 100%;
            width: 100%;
          `}
          id="outlined-basic"
          label="Outlined"
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
          onClick={() => {
            // useEffect(() => {
            //   props.refetchSearch(searchBarValue);
            // });
          }}
        >
          Search
        </Button>
      </Grid>
    </Grid>
  );
}
