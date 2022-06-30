// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";
import Grid from "@mui/material/Grid";
import { useSearch } from "./hooks/useSearch";
function App() {
  const Title = styled.h1`
    font-family: "Roboto", sans-serif;
  `;
  const [searchState, refetchSearch] = useSearch();
  return (
    <Grid container direction="column" alignItems="center">
      <Grid item xs={12}>
        <Title>Card Search</Title>
        <code>{JSON.stringify(searchState)}</code>
      </Grid>
    </Grid>
  );
}

export default App;
