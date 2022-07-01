import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import { Hit } from "../types/SearchEndpointResponse";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
export default function CardGrid(props: { cardData: Hit[] }) {
  return (
    <Grid container alignItems="center" spacing={2} columns={12}>
      {props.cardData.map((data: Hit) => {
        return (
          <Grid item xs={4} md={3}>
            <Card key={data.objectID}>
              <CardHeader
                title={data.name}
                subheader={`${data.gradingCompany} Grade ${data.grade} - ${data.year} ${data.subject}`}
              />
              <CardMedia
                component="img"
                height="194"
                image={data.images[0].url}
                alt="Image of card"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  ${data.lowestListingPrice}.00 USD
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
}
