import '../css/PostContent.css';

export const PostContent = ({postImage}) => {
    let imageClassName = "contentImage " + postImage.id;
    //const image = document.getElementsByClassName(imageClassName);
    //image.style.

    return ( 
        <div className="postContent">
            <img className={imageClassName} src={postImage}/>
        </div>
    );
}