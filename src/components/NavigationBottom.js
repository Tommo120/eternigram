import {Component} from 'react';
import '../css/NavigationBottom.css';
const homeLogo = './icons/home.png';
const searchLogo = './icons/search.png';
const plusLogo = './icons/plus.png';
const heartLogo = './icons/heart.png';

export default class NavigationBottom extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className="navFooter">
                <img className="icon" src={homeLogo}/>
                <img className="icon" src={searchLogo}/>
                <img className="icon" src={plusLogo}/>
                <img className="icon" src={heartLogo}/>
            </div>
        );
    }
}