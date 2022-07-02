// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsxImportSource @emotion/react */
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import { Hit } from "../types/SearchEndpointResponse";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { css } from "@emotion/react";
import { useState, useEffect } from "react";
export default function CardGrid(props: { cardData: Hit[] }) {
  const [isFavorite, setIsFavorite] = useState([
    ...JSON.parse(localStorage.getItem("isFavorite") || "[]"),
  ] as string[]);
  useEffect(() => {
    localStorage.setItem("isFavorite", JSON.stringify(isFavorite));
  }, [isFavorite]);

  return (
    <Grid container alignItems="center" spacing={2} columns={12}>
      {props.cardData.map((data: Hit) => {
        return (
          <Grid
            item
            xs={4}
            md={3}
            sm={2}
            css={css`
              height: 26em;
            `}
            key={data.objectID}
          >
            <Card
              css={css`
                height: 100%;
              `}
            >
              <CardHeader
                title={
                  data.name.length < 30
                    ? data.name
                    : data.name.slice(0, 30) + "..."
                }
                subheader={`${data.gradingCompany} Grade ${data.grade} - ${data.year} ${data.subject}`}
                css={css`
                  height: 5em;
                `}
              />
              <CardMedia
                component="img"
                css={css`
                  height: 15em;
                `}
                image={data.images[0].url}
                alt="Image of card"
              />
              <CardContent>
                <Grid
                  container
                  direction="row"
                  spacing={2}
                  justifyContent="space-between"
                >
                  <Grid item>
                    <Typography variant="body2" color="text.secondary">
                      ${data.lowestListingPrice}.00 USD
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    onClick={() => {
                      if (isFavorite.includes(data.objectID)) {
                        setIsFavorite(
                          isFavorite.filter((id) => id !== data.objectID)
                        );
                      } else {
                        setIsFavorite([...isFavorite, data.objectID]);
                      }
                    }}
                  >
                    {(() => {
                      if (isFavorite.includes(data.objectID)) {
                        return (
                          <Typography variant="body2" color="text.secondary">
                            ★
                          </Typography>
                        );
                      }
                      return (
                        <Typography variant="body2" color="text.secondary">
                          ☆
                        </Typography>
                      );
                    })()}
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
}
