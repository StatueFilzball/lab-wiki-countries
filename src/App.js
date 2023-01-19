import "./App.css";
import Navbar from "./components/Navbar";
import CountriesList from "./components/CountriesList"
import {useState, useEffect} from 'react'
import { Routes, Route } from "react-router-dom";
import CountryDetails from "./components/CountryDetails";
import axios from "axios"



function App() {
const [fetching, setFetching] = useState(true);

const [countries, setCountries] = useState([])  

useEffect(() => { 
  console.log("useEffect - Initial render (Mounting)");

      axios.get("https://ih-countries-api.herokuapp.com/countries")
          .then((response) => {
          setCountries(response.data);
          setFetching(false);
        });
}, []);

  return <div className="App">
<h1>Countries List</h1>
<Navbar />
{fetching && <p>Loading ...</p>}
<div className="container">
    <div className="row">
<CountriesList countries={countries} />
<Routes>
<Route path="/:id" element={<CountryDetails fetching={fetching} setFetching={setFetching}  setCountries={setCountries} countries={countries} />} />
</Routes>
</div>
</div>
</div>;
}
export default App;