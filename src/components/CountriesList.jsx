import { Link } from "react-router-dom"

function CountriesList(props) {

const {countries} = props

return (

        <div className="col-5" style={{maxHeight: "90vh", overflow: "scroll"}}>
            <div className="list-group">
        {
            countries.map((country) => {

               return <Link key={country.alpha3Code} to={`/${country.alpha3Code}`}>
<div className="list-group-item list-group-item-action">
    <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="country_flag"/>
    <h2>{country.name.official}</h2>
</div>

                </Link>
            })
        }
        </div>
        </div>

)
}

export default CountriesList