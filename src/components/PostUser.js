import {Component} from 'react';
import '../css/PostUser.css';

const profileCircle = './icons/profileCircle.png';

export default class PostUser extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="postUser">
                <img className="postUserPicture" src={profileCircle}/>
                <h2 className="postUserName">Username</h2>
            </div>
         );
    }
}