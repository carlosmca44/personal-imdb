import { Container, Grid, Typography } from "@material-ui/core";
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
  actualPage: {
    color: "#fff",
    marginLeft: "10vw",
    marginBottom: 20,
  },
  pagination: {
    margin: "auto",
    marginBottom: 30,
    marginTop: "5%",
    backgroundColor: "#fff",
    paddingBottom: 5,
    paddingTop: 5,
    width: "max-content",
    borderRadius: 10,
    [theme.breakpoints.down("sm")]: {
      marginTop: "10%",
    },
  },
}));

const rQuery = ["Movie not found!", "Incorrect IMDb ID."];

const SearchContainer = ({ list, page, handleChangePage }) => {
  const classes = useStyle();

  var newArr = []
  if (list["Response"] !== "False" && list.length !== 0) {
    var repeated = false
    for (let i = 0; i < list["Search"].length; i++) {
      for (let j = i+1; j < list["Search"].length; j++) {
        console.log(j)
        console.log(list["Search"].length)
        if (j === list["Search"].length) 
          console.log(list["Search"][i])
        if (list["Search"][i].imdbID !== list["Search"][j].imdbID) {
          repeated = true
        }
      }
      if (repeated) {
        newArr.push(list["Search"][i])
        repeated = false
      }
    }
  }
    /*list["Search"].foreach (el => {
      if (list["Search"].indexOf(el) + 1 > list["Search"].length - 1) {
        break
      }
      if (el.imdbID === list["Search"][list["Search"].indexOf(el) + 1].imdbID){
        list["Search"].splice(list["Search"].indexOf(el), 1)
      }
    })*/

  const nPages = Math.floor(parseInt(list["totalResults"])/10)+1

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
          <Typography className={classes.actualPage}>
            página {page} de {nPages}
          </Typography>
          <Grid container spacing={3} justifyContent="center">
            {newArr &&
              newArr.map((item) => (
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
          <Pagination
            className={classes.pagination}
            count={nPages}
            color="primary"
            shape={"rounded"}
            page={page}
            onChange={handleChangePage}
            hidden={list["Search"] !== undefined ? false : true}
          />
        </>
      )}
    </Container>
  );
};

export default SearchContainer;
