import '../css/PostUser.css';

const profileCircle = './icons/profileCircle.png';

export const PostUser = ({postAuthor}) => {
    return ( 
        <div className="postUser">
            <img className="postUserPicture" src={profileCircle}/>
            <h2 className="postUserName">{postAuthor}</h2>
        </div>
    );
}