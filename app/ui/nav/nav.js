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
                <div>
                    <ol>
                        <li><a href='/'>Home</a></li>
                        <li><a href='/specs'>Specs</a></li>
                        <li><a href='/contact'>Contact</a></li>
                    </ol>
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
        </nav>
    );
}

export default Navigation;