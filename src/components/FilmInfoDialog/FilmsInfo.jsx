import { Box, Card, CardActions, CardMedia, Dialog, DialogTitle, Typography } from "@material-ui/core";
import { FaWindowClose } from "react-icons/fa";
import NoImage from "../NoImage/NoImage";
import { CardContent, DetailsContainer, InfoContent, Poster, SingleDetail } from "./styles";

const FilmsInfo = ({
  open,
  close,
  title,
  year,
  genre,
  country,
  director,
  rating,
  poster,
  description,
}) => {
  return (
    <Dialog
      fullWidth
      maxWidth={"lg"}
      open={open}
      onClose={close}
    >
      <Card style={{ overflowY: "auto" }}>
        <CardContent>
          <CardMedia>
            {poster === "N/A" ? (
              <NoImage />
            ) : (
              <Poster alt="title" src={poster} />
            )}
          </CardMedia>
          <InfoContent>
            <Box display="flex" justifyContent="space-between">
              <DialogTitle>{title}</DialogTitle>
              <CardActions>
                <FaWindowClose onClick={close} style={{ width: 30, height: 30, marginLeft: "auto" }} />
              </CardActions>
            </Box>
            <DetailsContainer>
              <Typography>Pais: <SingleDetail>{country}</SingleDetail></Typography>
              <Typography>Director: <SingleDetail>{director}</SingleDetail></Typography>
              <Typography>Género: <SingleDetail>{genre}</SingleDetail></Typography>
              <Typography>Año: <SingleDetail>{year}</SingleDetail></Typography>
              <Typography>Puntuación: <SingleDetail>{rating}</SingleDetail></Typography>
            </DetailsContainer>
            <Typography>{description}</Typography>
          </InfoContent>
        </CardContent>
      </Card>
    </Dialog>
  );
};

export default FilmsInfo;
