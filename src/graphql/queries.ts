import { gql } from "@apollo/client";

const GET_ALL_CONTINENTS = gql`
    query Query {
        continents {
            code
            name
        }
    }
`;

const GET_ALL_COUNTRIES_BY_CONTINENT = gql`
    query Query ($code: ID!) {
        continent (code: $code) {
            countries {
                name
                code
            }
        }
    }
`;

const GET_COUNTRY_DETAILS = gql`
    query Query ($code: ID!) {
        country (code: $code) {
        name
        capital
        currency
        languages {name}
    }
`;

export {
    GET_ALL_CONTINENTS,
    GET_ALL_COUNTRIES_BY_CONTINENT,
    GET_COUNTRY_DETAILS
}