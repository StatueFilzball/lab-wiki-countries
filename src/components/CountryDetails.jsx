import { useParams, Link } from "react-router-dom"
import axios from "axios"
import {useEffect, useState} from 'react'

function CountryDetails(props){
const {countries} = props
const {id} = useParams()
const [fetchedCountry, setFetchedCountry] = useState({})

const country = countries.find((country) => {
    return id === country.alpha3Code
})

useEffect(() => { 
        axios.get(`https://ih-countries-api.herokuapp.com/countries/${id.toUpperCase()}`)
            .then((response) => {
            setFetchedCountry(response.data);
          });
  }, [id]);

    return (

<div className="col-7">
<img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="country_flag"/>

            <h1>{fetchedCountry.name.official}</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style={{width: "30%"}}>Capital</td>
                  <td>{fetchedCountry.capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                    {fetchedCountry.area} km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>

                    {fetchedCountry.borders.map((borderCode) => {
                      const borderCountry = countries.find((item) => {
                        return borderCode === item.alpha3Code;
                      });
                      return (
                        <li key={borderCode}>
                          <Link to={`/${borderCode}`}>
                            {borderCountry.name.common}
                          </Link>
                        </li>
                      );
                    })}
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div> 
        )
        
}

export default CountryDetails


