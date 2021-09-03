import axios from "axios";
import { useState } from "react";
import SearchContainer from "./SearchContainer";
import NavBar from "./NavBar";

const Searcher = () => {
  const [query, setQuery] = useState("");
  const [list, setList] = useState([]);

  const fetchData = async () => {
    await axios({
      url: `${process.env.REACT_APP_API_URL}${query}`,
    })
      .then((response) => {
        setList(response.data.Search);
        console.log(response.data);
      })
      .catch((error) => console.log(error));
  };

  const handleChange = (event) => {
    setQuery(event.target.value);
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
      />
    </>
  );
};

export default Searcher;
