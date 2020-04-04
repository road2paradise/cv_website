import React, { useState } from 'react';
import Fade from 'react-reveal/Fade'
import './animated-maps.styles.scss';
import TextBubble from '../text-bubble/text-bubble.component.jsx';
const nzmap = require('../../assets/nz-map.png');
const worldmap = require('../../assets/world-map.png');
const pointer = require('../../assets/pointer.png');

const AnimatedMaps = () => {
    const [selectedpointer, setselectedPointer] = useState('')
    function handleClick () {
        console.log(selectedpointer);
    }        

    return (
        <div className = 'map-container'>
            <TextBubble info = {selectedpointer}/>            
            <Fade
                delay = {1000}>
                <div className = 'nz-map-container'>
                    <Fade
                    delay = {3000}
                    >
                        <img 
                        className = 'akl-pointer' alt = ''  src = {pointer} onClick = {() => {
                            setselectedPointer('auckland')
                        }}/>
                    </Fade>
                    <Fade
                    delay = {3100}
                    >
                        <img className = 'tng-pointer' alt = '' src = {pointer} onClick = {() => {
                            setselectedPointer('tauranga');
                        }}/>           
                    </Fade>
                    <Fade
                    delay = {3200}
                    >
                        <img className = 'ham-pointer' alt = '' src = {pointer} onClick = {() => {
                            setselectedPointer('hamilton');
                        }}/>           
                    </Fade>

                    <Fade
                    delay = {3300}
                    >
                        <img className = 'ro-pointer' alt = '' src = {pointer} onClick = {() => {
                            setselectedPointer('rotorua');
                        }}/>           
                    </Fade>
                    <Fade
                    delay = {3300}
                    >
                        <img className = 'tau-pointer' alt = '' src = {pointer} onClick = {() => {
                            setselectedPointer('taupo');
                        }}/>           
                    </Fade>
                    <Fade
                    delay = {3400}
                    >
                        <img className = 'wtgn-pointer' alt = ''  src = {pointer} onClick = {() => {
                            setselectedPointer('wellington');
                        }}/>           
                    </Fade>
                    <Fade
                    delay = {3500}
                    >
                        <img className = 'chch-pointer' alt = '' src = {pointer} onClick = {() => {
                            setselectedPointer('christchurch');
                        }} 
                        />           
                    </Fade>
                    <img className = 'nz-map' src = {nzmap}/>
                </div>
            </Fade>
        </div>
    )
    
};

export default AnimatedMaps;