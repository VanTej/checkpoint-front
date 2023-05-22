import { useParams } from "react-router-dom";
import { GET_ALL_COUNTRIES_BY_CONTINENT } from "../graphql/queries";
import { useQuery } from "@apollo/client";
import { useState } from "react";
import { ContinentType } from "../types";

const Countries = () => {
    const { codeContinent } = useParams();

    const [continent, setContinent] = useState<ContinentType>();

    const {} = useQuery(GET_ALL_COUNTRIES_BY_CONTINENT, {
        variables: {code: codeContinent},
        onCompleted: (continent) => {
            setContinent(continent.continent);
            console.log(continent)
        },
        });

    return (
        <div>
            <h1>Pays du continent {continent?.name}</h1>
            <ul>
                {continent?.countries?.map(country => (
                <li key={continent.code}>
                    <a href={"/countryDetails/" + country.code}>{country.name}</a>
                </li>))
                }
            </ul>
        </div>
    )

}

export default Countries;