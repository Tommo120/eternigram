import {Component} from 'react';
import PostUser from './PostUser';
import PostContent from './PostContent';
import PostInteractions from './PostInteractions';
import '../css/UserPost.css'

export default class UserPost extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="userPost">
                <PostUser/>
                <PostContent/>
                <PostInteractions/>
            </div>
         );
    }
}