import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import { Hit } from '../types/SearchEndpointResponse';
export default function CardGrid(props: { cardData: Hit[] }) {
  return (
    <Grid container direction="column" alignItems="center">
      {props.cardData.map((data: Hit) => {
        return <Card key={data}>;

      })}
    </Grid>
  );
}
