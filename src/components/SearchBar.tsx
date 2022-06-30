// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Grid, TextField, Button } from "@mui/material";

export default function SearchBar(props: {
  refetchSearch: (search: string) => void;
}) {
  return (
    <Grid
      container
      justifyContent="center"
      xs={12}
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
        />
      </Grid>
      <Grid item xs={2}>
        <Button
          css={css`
            height: 100%;
            width: 100%;
          `}
          variant="contained"
        >
          Search
        </Button>
      </Grid>
    </Grid>
  );
}
