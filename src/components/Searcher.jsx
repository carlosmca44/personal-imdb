import { useState } from "react";
import SearchContainer from "./SearchContainer/SearchContainer";
import NavBar from "./Navbar/NavBar";
import useAxios from "../hooks/useAxios";

const Searcher = () => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [filterType, setFilterType] = useState(null);

  const { response, fetchData } = useAxios("s");

  const handleChangeQuery = (event) => {
    setQuery(event.target.value);
  };

  const handleChangeFilterType = (value) => {
    setFilterType(value);
  };

  const handleChangePage = (_event, value) => {
    fetchData(query, value, filterType)
    setPage(value);
    window.scrollTo({
      top: 0,
    });
  };

  const handleClickButton = (event, _value) => {
    event.preventDefault();
    fetchData(query, page, filterType)
    setPage(1);
  };

  const handleClear = () => {
    setQuery("")
  }

  return (
    <>
      <NavBar
        query={query}
        onChangeValue={handleChangeQuery}
        onClickButton={handleClickButton}
        clear={handleClear}
        changeFilter={handleChangeFilterType}
      />
      <SearchContainer
        list={response}
        page={page}
        handleChangePage={handleChangePage}
      />
    </>
  );
};

export default Searcher;
