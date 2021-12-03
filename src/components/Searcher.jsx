import axios from "axios";
import { useState } from "react";
import SearchContainer from "./SearchContainer";
import NavBar from "./NavBar";

const Searcher = () => {
  const [query, setQuery] = useState("");
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
  const [typeQ, setTypeQ] = useState(null);

  const fetchData = async (pageValue, type) => {
    await axios({
      url: `${process.env.REACT_APP_API_URL}s=${query}&page=${pageValue}&type=${
        type === "Pelicula" ? "movie" : type === "Serie" ? "series" : ""
      }`,
    })
      .then((response) => {
        setList(response.data);
      })
      .catch((error) => console.log(error))
  };

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleChangeType = (value) => {
    setTypeQ(value);
  };

  const handleChangePage = (event, value) => {
    fetchData(value, typeQ);
    setPage(value);
    window.scrollTo({
      top: 0,
    });
  };

  const handleClickButton = () => {
    setPage(1);
    fetchData(1, typeQ);
  };

  const handleClear = () => {
    setQuery("")
  }
  return (
    <>
      <NavBar
        query={query}
        onChangeValue={handleChange}
        onClickButton={handleClickButton}
        onChangeType={handleChangeType}
        clear={handleClear}
      />
      <SearchContainer
        list={list}
        page={page}
        handleChangePage={handleChangePage}
      />
    </>
  );
};

export default Searcher;
