import React, { FC } from 'react';
import {Button} from "@mui/material";


interface LandingSectionProps {}

const LandingSection: FC<LandingSectionProps> = () => (
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
                          <li>
                              <Button>2020</Button>
                          </li>
                          <li>
                              <Button>2021</Button>
                          </li>
                          <li>
                              <Button>2022</Button>
                          </li>
                      </ol>
                  </div>
              </div>
          </div>
      </section>
  </div>
);

export default LandingSection;
