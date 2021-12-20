import '../css/NavigationTop.css';
const cameraLogo = './icons/camera.png';
const planeLogo = './icons/paperPlane.png';

export const NavigationTop = () => {
    return (
        <div className="navHeader">
            <img className="icon" src={cameraLogo}/>
            <h1 className="navTitle">eternigram</h1>
            <img className="icon" src={planeLogo}/>
        </div>
    );
}