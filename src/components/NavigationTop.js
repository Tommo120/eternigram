import {Component} from 'react';
import '../css/NavigationTop.css';
const eternigramLogo = './icons/title.png';
const cameraLogo = './icons/camera.png';
const planeLogo = './icons/paperPlane.png';

export default class NavigationTop extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className="navHeader">
                <img className="icon" src={cameraLogo}/>
                <h1 className="navTitle">eternigram</h1>
                <img className="icon" src={planeLogo}/>
            </div>
        );
    }
}