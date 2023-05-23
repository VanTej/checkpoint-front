import { useParams } from "react-router-dom";
import { GET_ALL_COUNTRIES_BY_CONTINENT } from "../graphql/queries";
import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { ContinentType, CountryType } from "../types";
import { Card, Input, Row, Space } from "antd";
import { SearchOutlined } from '@ant-design/icons';

const containerStyle: React.CSSProperties = {
    height: "100vh",
    width: "100vw",
  };

  const gridStyle: React.CSSProperties = {
    width: '25%',
    backgroundColor: "#b4caf7",
    textAlign: 'center',
    margin: "1rem",
  };

const cardStyle: React.CSSProperties = {
    marginTop:"10vh",
    paddingInline: "10%",
    border: "none",
  };

const linkStyle: React.CSSProperties = {
    color: "#030030",
    textDecoration: "none",
  };

const Countries = () => {
    const { codeContinent } = useParams();

    const [countries, setCountries] = useState<CountryType[]>();
    const [allContinent, setAllContinent] = useState<ContinentType>();
    const [filter, setFilter] = useState<string>("");

    const {} = useQuery(GET_ALL_COUNTRIES_BY_CONTINENT, {
        variables: {code: codeContinent},
        onCompleted: (continent) => {
            setCountries(continent.continent.countries);
            setAllContinent(continent.continent);
        },
    });

    useEffect(() => {
        setCountries(allContinent?.countries?.filter((country) => {
            return filter.toLowerCase() == country.name.toLowerCase().substring(0, filter.length)
        }))
    }, [filter])

    return (
        <div style={containerStyle}>
            <h1>{allContinent?.name}</h1>
            <Space.Compact size="large">
                <Input addonBefore={<SearchOutlined />} placeholder="search country" style={{ width: 400 }} onChange={(event)=>setFilter(event.target.value)} value={filter}/>
            </Space.Compact>
            <Card style={cardStyle}>
                <Row justify="center">
                    {countries?.map(country => (
                        <Card.Grid key={country.code} style={gridStyle}>
                            <a href={"/countryDetails/" + country.code} style={linkStyle}>
                                {country.name}
                            </a>
                        </Card.Grid>
                    ))}
                </Row>
            </Card>
        </div>
    )

}

export default Countries;