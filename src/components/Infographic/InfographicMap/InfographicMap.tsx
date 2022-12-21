import React, {FC} from 'react';
import GoogleMapReact from 'google-map-react';
import { key } from "../../../foo";
import CustomMapMarker from "./CustomMapMarker/CustomMapMarker";
import {getMarkerData} from "../../../service/service";

interface InfographicMapProps {
    year: number
}

const InfographicMap: FC<InfographicMapProps> = ( props ) => {

    const defaultView = {
        center: {
            lat: -41.226874,
            lng: 174.811963
        },
        zoom: 12
    };

    const sightings = getMarkerData( props.year );

    return (
        <div data-testid="InfographicMap">
            <div style={{ height: '80vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{key:key}}
                    defaultCenter={defaultView.center}
                    defaultZoom={defaultView.zoom}
                >
                    { sightings.map(( sighting ) =>
                        <CustomMapMarker
                            key={`${sighting.coords.lat}${sighting.coords.lng}`}
                            lat={sighting.coords.lat}
                            lng={sighting.coords.lng}
                            text={sighting.text}
                        />
                    )}

                </GoogleMapReact>
            </div>
        </div>
    );
}

export default InfographicMap;
