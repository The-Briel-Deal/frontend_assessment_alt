// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import Grid from "@mui/material/Grid";
import { useSearch } from "./hooks/useSearch";
import SearchBar from "./components/SearchBar";
import CardGrid from "./components/CardGrid";
function App() {
  const Title = styled.h1`
    font-family: "Roboto", sans-serif;
  `;
  // This custom hook holds the current result of the search, call refetch with a search string to update the result.
  const { searchState, refetchSearch } = useSearch();
  return (
    <Grid container direction="column" alignItems="center">
      <Grid item xs={12}>
        <Title>Card Search</Title>
      </Grid>
      <SearchBar refetchSearch={refetchSearch} />
      <CardGrid cardData={searchState.hits} />
    </Grid>
  );
}

export default App;
