// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import Grid from "@mui/material/Grid";

function App() {
  return (
    <Grid
      css={css`
        background-color: red;
      `}
    >
      dog
    </Grid>
  );
}

export default App;
