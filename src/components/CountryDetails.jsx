import { useParams, Link } from "react-router-dom"

function CountryDetails(props){
const {countries} = props
const {id} = useParams()

const country = countries.find((country) => {
    return id === country.alpha3Code
})

    return (

<div className="col-7">
<img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="country_flag"/>

            <h1>{country.name.official}</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style={{width: "30%"}}>Capital</td>
                  <td>{country.capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                    {country.area} km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>

                    {country.borders.map((borderCode) => {
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


