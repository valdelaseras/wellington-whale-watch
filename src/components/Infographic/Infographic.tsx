import React, { FC } from 'react';
import InfographicHeader from "./InfographicHeader/InfographicHeader";
import InfographicMap from "./InfographicMap/InfographicMap";
import InfographicTable from "./InfographicTable/InfographicTable";
import InfographicWeather from "./InfographicWeather/InfographicWeather";


interface InfographicProps {
    year: string,
    speciesTotal: number
    sightingsTotal: number,
}

const Infographic: FC<InfographicProps> = ( props ) => (
  <div data-testid="Infographic">
      <div className="column">
          <div className="column">
              <section>
                  <InfographicHeader
                      year={props.year}
                      speciesTotal={props.speciesTotal}
                      sightingsTotal={props.sightingsTotal}/>
              </section>
          </div>
          <div className="column">
              <section>
                  <InfographicMap/>
              </section>
          </div>
          <div className="column">
              <section>
                  <InfographicTable/>
              </section>
          </div>
          <div className="column">
              <section>
                  <InfographicWeather/>
              </section>
          </div>
      </div>
  </div>
);

export default Infographic;


