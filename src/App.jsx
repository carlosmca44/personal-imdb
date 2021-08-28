import { useState } from "react";
import axios from "axios";
import NavBar from "./components/NavBar";

const App = () => {
  const [query, setQuery] = useState("");
  const [list, setList] = useState([]);

  const fetchData = async () => {
    await axios({
      url: `${process.env.REACT_APP_API_URL}${query}`
    })
      .then(response => {
        setList(response.data.Search)
        console.log(response.data.Search)
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
              {item.Title} 
              {item.Year}
              <img src={item.Poster} alt={item.Title} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default App;
