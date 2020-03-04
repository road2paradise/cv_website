import React from 'react';
import GoogleMaps from '../../components/google-maps/google-maps.component';
import './homepage.styles.scss';

const HomePage = () => (
    <div className = 'homepage'>
        <h1 className = 'title'>
            Welcome to my HomePage
        </h1>
        <GoogleMaps/>
    </div>
);
export default HomePage