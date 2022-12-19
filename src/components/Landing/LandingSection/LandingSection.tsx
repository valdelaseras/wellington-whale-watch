import React, { FC } from 'react';
import {Button} from "@mui/material";
import {Link} from "react-router-dom";

interface LandingSectionProps {}

const LandingSection: FC<LandingSectionProps> = () => {

    const years = [ 2020, 2021, 2022 ];

    return (
        <div data-testid="LandingSection">
            <section>
                <div className="column">
                    <div className="column">
                        <div className="content">
                            <h1>Wellington Whale Watch</h1>
                            <p>Whales and stuff</p>
                        </div>
                    </div>
                    <div className="column">
                        <div className="content">
                            <ol className="horizontal-list">
                                { years.map(( year) =>
                                    <li key={year}>
                                        <Link to={`/sightings/${year}`}
                                              state={{ target: year }}>
                                            <Button>
                                                { year }
                                            </Button>
                                        </Link>
                                    </li>
                                )}
                            </ol>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default LandingSection;
