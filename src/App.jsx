import { useState } from "react";
import axios from "axios";
import NavBar from "./components/NavBar";
import FilmsCard from "./components/FilmsCard";

const App = () => {
  const [query, setQuery] = useState("");
  const [list, setList] = useState([]);

  const fetchData = async () => {
    await axios({
      url: `${process.env.REACT_APP_API_URL}${query}`
    })
      .then(response => {
        setList(response.data.Search)
        console.log(response.data)
      })
      .catch((error) => console.log(error));
  }

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleButtonClick = () => {
    fetchData()
  }

  return (
    <>
      <NavBar />
      <div>
        <input type="text" value={query} onChange={handleChange} />
        <button onClick={handleButtonClick}>buscar</button>
        <ul>
          {list && list.map((item) => (
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
      </div>
    </>
  );
};

export default App;
