import React, { FC } from 'react';
import { useLocation } from "react-router-dom";
import InfographicHeader from "./InfographicHeader/InfographicHeader";
import InfographicMap from "./InfographicMap/InfographicMap";
import InfographicTable from "./InfographicTable/InfographicTable";

const Infographic: FC = () => {
    const location = useLocation();
    const year = location.state.target;

    return (
        <div data-testid="Infographic">
            <div className="column">
                <div className="column">
                    <section>
                        <InfographicHeader year={year}/>
                    </section>
                </div>
                <div className="column">
                    <section>
                        <InfographicMap year={year}/>
                    </section>
                </div>
                <div className="column">
                    <section>
                        <InfographicTable year={year}/>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default Infographic;


