import {PostUser} from './PostUser';
import {PostContent} from './PostContent';
import {PostInteractions} from './PostInteractions';
import '../css/UserPost.css'

export const UserPost = ({postContent}) => {    
    return ( 
        <div className="userPost">
            <PostUser postAuthor={postContent.author}/>
            <PostContent postImage={postContent.download_url}/>
            <PostInteractions/>
        </div>
    );
}