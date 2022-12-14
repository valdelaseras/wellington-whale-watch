import React, { FC } from 'react';


interface InfographicHeaderProps {
    year: string,
    speciesTotal: number,
    sightingsTotal: number,
}

const InfographicHeader: FC<InfographicHeaderProps> = ( props ) => (
  <div data-testid="InfographicHeader">
    <header className="infographic-header">
        <div className="column">
            <div className="column">
                <div className="content">
                    <h1>{props.year}</h1>
                </div>
            </div>
            <div className="column three">
                <div className="content">
                    <h2>Total species</h2>
                    <p>{props.speciesTotal}</p>
                </div>
            </div>
            <div className="column three">
                <div className="content">
                    <h2>Total sightings</h2>
                    <p>{props.sightingsTotal}</p>
                </div>
            </div>
            <div className="column three">
                <div className="content">
                    <h2>Lorem</h2>
                    <p>Ipsum</p>
                </div>
            </div>
        </div>
    </header>
  </div>
);

export default InfographicHeader;
