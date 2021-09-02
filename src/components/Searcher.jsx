import { Container } from "@material-ui/core";
import axios from "axios";
import { useState } from "react";
import FilmsCard from "./FilmsCard";
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
      <Container>
        <ul>
          {list &&
            list.map((item) => (
              <li>
                <FilmsCard
                  alt={item.Title}
                  img={item.Poster}
                  title={item.Title}
                  type={item.Type}
                  year={item.Year}
                />
              </li>
            ))}
        </ul>
      </Container>
    </>
  );
};

export default Searcher;
