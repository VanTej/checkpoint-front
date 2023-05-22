import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { CountryType } from "../types";
import { GET_COUNTRY_DETAILS } from "../graphql/queries";
import { useState } from "react";

const CountryDetails = () => {
    const { codeCountry } = useParams();

    const [country, setCountry] = useState<CountryType>();

    const {} = useQuery(GET_COUNTRY_DETAILS, {
        variables: {code: codeCountry},
        onCompleted: (country) => {
            setCountry(country.country);
            console.log(country)
        },
        });
    return (
        <div>
            <h1>Détails du pays {country?.name}</h1>
            <ul>
                <li>{country?.capital}</li>
                <li>{country?.currency}</li>
                <li >{country?.emoji}</li>
            </ul>
        </div>
    )

}

export default CountryDetails;