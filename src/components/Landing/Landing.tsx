import React, { FC } from 'react';
import LandingSection from "./LandingSection/LandingSection";


interface LandingProps {}

const Landing: FC<LandingProps> = () => (
  <div data-testid="Landing">
      <div className="column">
          <LandingSection/>
      </div>
  </div>
);

export default Landing;
