import styles from "./nav.module.css";
import Image from "next/image";
import BuyButton from "../buttons/buybutton";
import WatchButton from "../buttons/watchbutton";

function Navigation() {
    return (
        <nav className={styles.nav}>
            <div className={styles.upperNav}>
                <div>
                    <a href="/">
                        <Image src="/applelogo.png" alt="Apple logo" width={32} height={32} />
                    </a>
                </div>
                <div>
                    <ol>
                        <li><a href='/'>Home</a></li>
                        <li><a href='/specs'>Specs</a></li>
                        <li><a href='/contact'>Contact</a></li>
                    </ol>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={styles.nav} width={32} height={32} color="#FFFFF0">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                </div>
            </div>
            <div className={styles.bottomNav}>
                <div className={styles.rainbowText}>
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