import { useState } from "react";
import "./App.css";
import axios from "axios";

const App = () => {
  const [query, setQyery] = useState("");
  const [list, setList] = useState([]);

  const fetchData = async () => {
    await axios({
      url: `${process.env.REACT_APP_API_URL}&s=${query}`
    })
      .then((response) => setList(response.data))
      .catch((error) => console.log(error));
  }

  const handleChange = (event: any) => {
    setQyery(event.target.value);
  };

  const handleButtonClick = () => {
    fetchData()
  }

  return (
    <div className="App">
      <input type="text" value={query} onChange={handleChange} />
      <button onClick={handleButtonClick}>buscar</button>
      <ul>
        {list && list.map((item: any) => (
          <li>{item.id}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
