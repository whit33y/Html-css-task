import "./nav.css";
import BuyButton from "../buttons/buybutton";
import WatchButton from "../buttons/watchbutton";
import Search from "../Search/search";

function Navigation() {
    return (
        <nav className="nav">
            <div className="nav-top">
                <div>
                    <a href="/" >
                        <img src="/applelogo.png" alt="Apple logo" className="appleLogo" />
                    </a>
                </div>
                <div className="nav-links">
                    <a href='/'>Home</a>
                    <a href='/specs'>Specs</a>
                    <a href='/contact'>Contact</a>
                </div>
                <Search />
            </div>
            <div className="nav-bottom">
                <div className="text-rainbow">
                    Apple Vision Pro
                </div>
                <div>
                    <WatchButton />
                    <BuyButton />
                </div>
            </div>
        </nav >
    );
}

export default Navigation;