import { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [city, setCity] = useState("");

  const inputHandler = (e) => {
    setCity(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log(`City name entered: ${city}`);
    const data = {
      city,
    };
    axios
      .post("http://localhost:8000/addCity", data)
      .then((res) => console.log(res));
  };

  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <label htmlFor="cityName">City</label>
        <input
          type="text"
          id="cityName"
          name="cityName"
          value={city}
          onChange={inputHandler}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
