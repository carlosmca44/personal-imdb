import { Typography } from "@material-ui/core";
import FilmsCard from "../FilmsCard/FilmsCard";
import MovieIcon from "../svg/MovieIcon";
import { PageCount, RootContainer, Pagination, Box } from "./styles";

const SearchContainer = ({ list, page, handleChangePage }) => {
  const numberOfPages = Math.floor(parseInt(list["totalResults"]) / 10) + 1

  return (
    <RootContainer>
      {list.length === 0 ? (
        <Box color="#b2b2b2" display="flex" flexDirection="column" alignItems="center" height="50vh" justifyContent="center">
          <MovieIcon />
          <Typography>
            Encuentra justo lo que necesitas
          </Typography>
        </Box>
      ) : list["Response"] === "False" ? (
        <Box color="#b2b2b2" display="flex" flexDirection="column" alignItems="center" height="50vh" justifyContent="center">
          <MovieIcon />
          <Typography>
            Encuentra justo lo que necesitas
          </Typography>
        </Box>
      ) : (
        <>
          <PageCount align="center">
            página {page} de {numberOfPages}
          </PageCount>
          <Box display={"flex"} flexWrap={"wrap"}>
            {list["Search"] &&
              list["Search"].map((item) => (
                <FilmsCard
                  key={item.imdbID}
                  alt={item.Title}
                  img={item.Poster}
                  title={item.Title}
                  type={item.Type}
                  year={item.Year}
                  id={item.imdbID}
                />
              ))}
            <Pagination
              count={numberOfPages}
              page={page}
              onChange={handleChangePage}
              hidden={list["Search"] !== undefined ? false : true}
            />
          </Box>
        </>
      )}
    </RootContainer>
  );
};

export default SearchContainer;
