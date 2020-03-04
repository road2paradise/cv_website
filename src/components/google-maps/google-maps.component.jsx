import React from 'react';
import GoogleMapReact from 'google-map-react';
import AnyReactComponent from '../pointer-selector/pointer-selector.components';

import './google-maps.styles.scss'


const GoogleMaps = () => (
    <div className = 'map-container'>
        <div className = 'map' style={{ height: '50vh', width: '50%', padding: '10px', marginLeft: 'auto', marginRight: 'auto'}}>
            <GoogleMapReact 
                bootstrapURLKeys={{ key: 'AIzaSyACbnhKpX2lOBxzekqutlIndieRO4oJxqk' }}
                defaultCenter={[-36.84, 174.76]}
                defaultZoom={10}
                onClick = {(x, y, lat, lng, event) => console.log(x,y,lat,lng,event) }>
                    <AnyReactComponent
                        lat={-36.84}
                        lng={174.76}
                        text="My Marker"
                    />
            </GoogleMapReact>
        </div>
    </div>
);

export default GoogleMaps;



