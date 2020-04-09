import React from 'react';
import Fade from 'react-reveal/Fade'
import './animated-maps.styles.scss';
import TextBubble from '../text-bubble/text-bubble.component.jsx';
const worldmap = require('../../assets/worldmap.jpg');
const pointer = require('../../assets/pointer.png');

class AnimatedMaps extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            nextPointer: '',
            prevPointer: '',
            hidden: false
        }
        this.handleClick = this.handleClick.bind(this)
        this.props = props
    }
    handleClick(newPointer){
        if (this.state.nextPointer === '' || newPointer !== this.state.prevPointer || this.state.hidden === true){
            this.setState({
                nextPointer: newPointer,
                prevPointer: newPointer,
                hidden: false
            })
        } else if (newPointer === this.state.prevPointer) {
            this.setState ({hidden: true})
        }
    }

    render() {
        return(
            <div className = 'map-container'>
            <TextBubble 
                info = {this.state.nextPointer} 
                hidden = {this.state.hidden} 
                onHide = {() => this.setState({hidden: true})}/>            
            <Fade
                delay = {1000}>
                <div className = 'nz-map-container'>
                    <Fade
                    delay = {3000}
                    >
                        <img 
                        className = 'syd-pointer' alt = ''  src = {pointer} onClick = {() => this.handleClick('sydney')}/>
                    </Fade>
                    <Fade
                    delay = {3100}
                    >
                        <img className = 'mel-pointer' alt = '' src = {pointer} onClick = {() => this.handleClick('melbourne')} />           
                    </Fade>
                    <Fade
                    delay = {3200}
                    >
                        <img className = 'bris-pointer' alt = '' src = {pointer} onClick = {() => this.handleClick('brisbane')}/>           
                    </Fade>
                    <Fade
                    delay = {3300}
                    >
                        <img className = 'jp-pointer' alt = '' src = {pointer} onClick = {() => this.handleClick('japan')}/>           
                    </Fade>
                    <Fade
                    delay = {3300}
                    >
                        <img className = 'kor-pointer' alt = '' src = {pointer} onClick = {() => this.handleClick('korea')}/>           
                    </Fade>
                    <Fade
                    delay = {3400}
                    >
                        <img className = 'haw-pointer' alt = ''  src = {pointer} onClick = {() => this.handleClick('hawaii')}/>           
                    </Fade>
                    <Fade
                    delay = {3500}
                    >
                        <img className = 'sng-pointer' alt = '' src = {pointer} onClick = {() => this.handleClick('singapore')} 
                        />           
                    </Fade>
                    <img className = 'nz-map' alt = 'nz-map' src = {worldmap}/>
                </div>
            </Fade>
        </div>
        )
    }    
};

export default AnimatedMaps;