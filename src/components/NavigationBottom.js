import '../css/NavigationBottom.css';
const homeLogo = './icons/home.png';
const searchLogo = './icons/search.png';
const plusLogo = './icons/plus.png';
const heartLogo = './icons/heart.png';

export const NavigationBottom = () => {
    return (
        <div className="navFooter">
            <img className="icon" src={homeLogo}/>
            <img className="icon" src={searchLogo}/>
            <img className="icon" src={plusLogo}/>
            <img className="icon" src={heartLogo}/>
        </div>
    )
}