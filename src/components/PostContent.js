import {Component} from 'react';
import '../css/PostContent.css';

export default class PostContent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="postContent">
                <img className="contentImage" src="https://picsum.photos/200"/>
            </div>
         );
    }
}