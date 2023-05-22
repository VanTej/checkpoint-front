import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { CountryType } from "../types";
import { GET_COUNTRY_DETAILS } from "../graphql/queries";
import { useState } from "react";
import { Card, Row } from "antd";

const gridStyle: React.CSSProperties = {
    width: '25%',
    textAlign: 'center',
    margin: "2rem",
  };

const cardStyle: React.CSSProperties = {
    marginTop:"10vh",
    backgroundColor: "#b4caf7",
    justifyContent: "center",
    border: "none",
  };

const CountryDetails = () => {
    const { codeCountry } = useParams();

    const [country, setCountry] = useState<CountryType>();

    const {} = useQuery(GET_COUNTRY_DETAILS, {
        variables: {code: codeCountry},
        onCompleted: (country) => {
            setCountry(country.country);
        },
        });
    return (
        <div>
            <h1>{country?.name} {country?.emoji}</h1>
            <Card style={cardStyle}>
                <Row justify="center">
                    <Card.Grid style={gridStyle}>Capital : {country?.capital}</Card.Grid>
                    <Card.Grid style={gridStyle}>Currency: {country?.currency}</Card.Grid>
                </Row>
            </Card>
        </div>
    )

}

export default CountryDetails;