import { Grid } from "@material-ui/core";
import FilmsCard from "../FilmsCard/FilmsCard";
import InformativeArea from "../InformativeArea/InformativeArea";
import { PageCount, RootContainer, Pagination } from "./styles";

const SearchContainer = ({ list, page, handleChangePage }) => {
  const rQuery = ["Movie not found!", "Incorrect IMDb ID."];

  var newArr = []
  if (list["Response"] !== "False" && list.length !== 0) {
    var repeated = false
    for (let i = 0; i < list["Search"].length; i++) {
      for (let j = i + 1; j < list["Search"].length; j++) {
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

  const nPages = Math.floor(parseInt(list["totalResults"]) / 10) + 1

  var info = "";
  if (list["Error"] === rQuery[0]) info = rQuery[0];
  if (list["Error"] === rQuery[1]) info = rQuery[1];

  return (
    <RootContainer>
      {list.length === 0 ? (
        <InformativeArea />
      ) : list["Response"] === "False" ? (
        <InformativeArea errorI={info} />
      ) : (
        <>
          <PageCount>
            página {page} de {nPages}
          </PageCount>
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
            count={nPages}
            color="primary"
            shape={"rounded"}
            page={page}
            onChange={handleChangePage}
            hidden={list["Search"] !== undefined ? false : true}
          />
        </>
      )}
    </RootContainer>
  );
};

export default SearchContainer;
