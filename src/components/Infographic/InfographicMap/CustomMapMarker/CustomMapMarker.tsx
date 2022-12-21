import React, { FC } from 'react';

interface CustomMapMarkerProps {
    lat: number,
    lng: number,
    text: string
}

const CustomMapMarker: FC<CustomMapMarkerProps> = ( props) => (
  <div data-testid="CustomMapMarker">
      <div className="custom-map-marker">
          <span className={`marker ${props.text}`}/>{ props.text }
      </div>
  </div>
);

export default CustomMapMarker;
