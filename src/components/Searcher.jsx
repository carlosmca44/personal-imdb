import axios from "axios";
import { useState } from "react";
import SearchContainer from "./SearchContainer";
import NavBar from "./NavBar";

const Searcher = () => {
  const [query, setQuery] = useState("");
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);

  const fetchData = async () => {
    await axios({
      url: `${process.env.REACT_APP_API_URL}${query}&page=${page}`,
    })
      .then((response) => {
        setList(response.data);
      })
      .catch((error) => console.log(error));
  };

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleChangePage = (event, value) => {
    setPage(value);
    fetchData();
  };

  const handleClickButton = () => {
    fetchData();
  };
  return (
    <>
      <NavBar
        query={query}
        onChangeValue={handleChange}
        onClickButton={handleClickButton}
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
