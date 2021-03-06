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
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
export default function CardGrid(props: { cardData: Hit[] }) {
  const [isFavorite, setIsFavorite] = useState([
    ...JSON.parse(localStorage.getItem("isFavorite") || "[]"),
  ] as string[]);
  useEffect(() => {
    localStorage.setItem("isFavorite", JSON.stringify(isFavorite));
  }, [isFavorite]);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [selectedCard, setSelectedCard] = useState(null as Hit | null);
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Card
          css={css`
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 400;
            height: 90%;
          `}
        >
          {(() => {
            if (selectedCard) {
              return (
                <>
                  <CardHeader
                    title={
                      selectedCard.name.length < 30
                        ? selectedCard.name
                        : selectedCard.name.slice(0, 30) + "..."
                    }
                    subheader={`${selectedCard.gradingCompany} Grade ${selectedCard.grade} - ${selectedCard.year} ${selectedCard.subject}`}
                    css={css`
                      height: 5em;
                    `}
                  />
                  <CardMedia
                    component="img"
                    css={css`
                      height: 70%;
                    `}
                    image={selectedCard.images[0].url}
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
                          ${selectedCard.lowestListingPrice}.00 USD
                        </Typography>
                      </Grid>
                      <Grid
                        item
                        onClick={() => {
                          if (isFavorite.includes(selectedCard.objectID)) {
                            setIsFavorite(
                              isFavorite.filter(
                                (id) => id !== selectedCard.objectID
                              )
                            );
                          } else {
                            setIsFavorite([
                              ...isFavorite,
                              selectedCard.objectID,
                            ]);
                          }
                        }}
                      >
                        {(() => {
                          if (isFavorite.includes(selectedCard.objectID)) {
                            return (
                              <Typography
                                variant="body2"
                                color="text.secondary"
                              >
                                ???
                              </Typography>
                            );
                          }
                          return (
                            <Typography variant="body2" color="text.secondary">
                              ???
                            </Typography>
                          );
                        })()}
                      </Grid>
                    </Grid>
                  </CardContent>
                </>
              );
            }
          })()}
        </Card>
      </Modal>
      <Grid container alignItems="center" spacing={2} columns={12}>
        {props.cardData.map((data: Hit) => {
          return (
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              lg={4}
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
                  onClick={() => {
                    setSelectedCard(data);
                    handleOpen();
                  }}
                  component="img"
                  css={css`
                    height: 15em;
                    cursor: pointer;
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
                            <Typography
                              css={css`
                                cursor: pointer;
                              `}
                              variant="body2"
                              color="text.secondary"
                            >
                              ???
                            </Typography>
                          );
                        }
                        return (
                          <Typography
                            css={css`
                              cursor: pointer;
                            `}
                            variant="body2"
                            color="text.secondary"
                          >
                            ???
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
    </>
  );
}
