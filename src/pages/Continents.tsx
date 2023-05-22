import { useQuery } from "@apollo/client";
import { GET_ALL_CONTINENTS } from "../graphql/queries";
import { useState } from "react";
import { ContinentType } from "../types";

const Continents = () => {
    const [continents, setContinents] = useState<ContinentType[]>([]);

    const {} = useQuery(GET_ALL_CONTINENTS, {
        onCompleted: (continents) => {
            setContinents(continents.continents);
        },
        });

    return (
        <div>
            <h1>Continents</h1>
            <ul>
                {continents.map(continent => (
                <li key={continent.code}>
                    <a href={"/countries/" + continent.code}>{continent.name}</a>
                </li>))
                }
            </ul>
        </div>
    )

}

export default Continents;