import React, { FC } from 'react';
import {
    getMostActiveMonth,
    getTotalSightings,
    getUniqueTotalOf
} from "../../../service/service";

interface InfographicHeaderProps {
    year: number,
}

const InfographicHeader: FC<InfographicHeaderProps> = ( props ) => (
  <div data-testid="InfographicHeader">
    <header className="infographic-header">
        <div className="column">
            <div className="column phi a">
                <div className="content">
                    <h1>{props.year}</h1>
                </div>
            </div>
            <div className="column phi b">
                <div className="column three">
                    <div className="content">
                        <h2>Unique species</h2>
                        <p>{getUniqueTotalOf( props.year, 'species' ) }</p>
                    </div>
                </div>
                <div className="column three">
                    <div className="content">
                        <h2>Total sightings</h2>
                        <p>{getTotalSightings( props.year )}</p>
                    </div>
                </div>
                <div className="column three">
                    <div className="content">
                        <h2>Most active month</h2>
                        <p>{getMostActiveMonth( props.year )}</p>
                    </div>
                </div>
            </div>
        </div>
    </header>
  </div>
);

export default InfographicHeader;
