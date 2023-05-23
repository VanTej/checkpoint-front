import { useQuery } from "@apollo/client";
import { GET_ALL_CONTINENTS } from "../graphql/queries";
import React, { useEffect, useState } from "react";
import { ContinentType } from "../types";
import { Card, Input, Row, Space } from 'antd';
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

const Continents = () => {
    const [continents, setContinents] = useState<ContinentType[]>([]);
    const [allContinents, setAllContinents] = useState<ContinentType[]>([]);
    const [filter, setFilter] = useState<string>("");

    const {} = useQuery(GET_ALL_CONTINENTS, {
        onCompleted: (continents) => {
            setContinents(continents.continents);
            setAllContinents(continents.continents);
        },
    });

    useEffect(() => {
        setContinents(allContinents.filter(continent => {
            return filter.toLowerCase() == continent.name.toLowerCase().substring(0, filter.length)
        }))
    }, [filter])
    

    return (
        <div style={containerStyle}>
            <h1>Continents</h1>
            <Space.Compact size="large">
                <Input addonBefore={<SearchOutlined />} placeholder="search continent" style={{ width: 400 }} onChange={(event)=>setFilter(event.target.value)} value={filter}/>
            </Space.Compact>
            <Card style={cardStyle}>
                <Row justify="center">
                    {continents.map(continent => (
                        <Card.Grid key={continent.code} style={gridStyle}>
                            <a href={"/countries/" + continent.code} style={linkStyle}>
                                {continent.name}
                            </a>
                        </Card.Grid>
                    ))}
                </Row>
            </Card>
        </div>
    )

}

export default Continents;