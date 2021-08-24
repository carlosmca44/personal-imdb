import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

//`http://www.omdbapi.com/?apikey=${process.env.API_KEY}&s=${param}&r=json`
//const axiosConfig = { method: "get", timeout: 2500 };

/*{films && <div>a{films.year}</div>}
        {loading && <p style={{ color: "blue", fontSize: "20px" }}>LOADING</p>}
        {error && <p style={{ color: "red", fontSize: "20px" }}>ERROR</p>}
        {console.log(response?.status)}*/

const App = () => {
  const [param, setState] = useState("");
  const [list, setList] = useState([]);

  useEffect(() => {
    axios({
      url: `http://www.omdbapi.com/?apikey=cda82712&s=alita`
    })
      .then((response) => setList(response.data))
      .catch((error) => console.log(error));
  });

  const handleChange = (event) => {
    setState(event.target.value);
  };

  return (
    <div className="App">
      <input type="text" value={param} onChange={handleChange} />
      <div>
        {list.map((item) => (
          <div key={item.id}>{item.title}</div>
        ))}
      </div>
    </div>
  );
};

export default App;
