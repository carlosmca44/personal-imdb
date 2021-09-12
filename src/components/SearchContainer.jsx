import { Container, Grid } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import { makeStyles } from "@material-ui/styles";
import FilmsCard from "./FilmsCard";
import IArea from "./InformativeArea";

const useStyle = makeStyles((theme) => ({
  root: {
    paddingTop: 20,
    paddingBottom: 20,
    [theme.breakpoints.down("xs")]: {
      marginTop: 30,
    },
  },
  pagination: {
    display: "flex",
    justifyContent: "center",
    margin: "auto",
    marginBottom: 30,
    backgroundColor: "#fff",
    paddingBottom: 5,
    paddingTop: 5,
    width: "max-content",
    borderRadius: 10,
    [theme.breakpoints.down("sm")]: {
      marginTop: 0,
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: 40,
    },
  },
}));

const rQuery = ["Movie not found!", "Incorrect IMDb ID."];

const SearchContainer = ({ list, page, handleChangePage }) => {
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
        <>
          <Pagination
            className={classes.pagination}
            count={Math.floor(parseInt(list["totalResults"])/10)+1}
            color="primary"
            shape={"rounded"}
            page={page}
            onChange={handleChangePage}
            hidden={list["Search"] !== undefined ? false : true}
          />
          <Grid container spacing={3} justifyContent="center">
            {list["Search"] &&
              list["Search"].map((item) => (
                <Grid key={item.imdbID} item>
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
        </>
      )}
    </Container>
  );
};

export default SearchContainer;
