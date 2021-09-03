import { Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import FilmsCard from "./FilmsCard";

const useStyle = makeStyles({
  root: {
    paddingTop: 20,
    paddingBottom: 20,
  },
  gridItem: {},
});

const SearchContainer = ({ list }) => {
  const classes = useStyle();
  return (
    <Container className={classes.root}>
      <Grid container spacing={3} justifyContent="center">
        {list &&
          list.map((item) => (
            <Grid item className={classes.gridItem}>
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
    </Container>
  );
};

export default SearchContainer;
