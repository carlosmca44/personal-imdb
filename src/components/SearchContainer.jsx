import { Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import FilmsCard from "./FilmsCard";
import IArea from "./InformativeArea";

const useStyle = makeStyles({
  root: {
    paddingTop: 20,
    paddingBottom: 20,
  },
  gridItem: {},
});

const rQuery = ["Movie not found!", "Incorrect IMDb ID."];

const SearchContainer = ({ list }) => {
  const classes = useStyle();
  var info = "";

  if (list["Error"] === rQuery[0]) info = rQuery[0];
  if (list["Error"] === rQuery[1]) info = rQuery[1];

  return (
    <Container className={classes.root}>
      {list.length === 0 ? (
        <IArea />
      ) : list["Response"] === "False" ? (
        <IArea errorI={info} />
      ) : (
        <Grid container spacing={3} justifyContent="center">
          {list["Search"] &&
            list["Search"].map((item) => (
              <Grid key={item.imdbID} item className={classes.gridItem}>
                <FilmsCard
                  alt={item.Title}
                  img={item.Poster}
                  title={item.Title}
                  type={item.Type}
                  year={item.Year}
                />
              </Grid>
            ))}
        </Grid>
      )}
    </Container>
  );
};

export default SearchContainer;
