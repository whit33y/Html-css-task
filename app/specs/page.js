import styles from "./page.module.css";

function Page() {
    return (
        <main className={styles.main}>
            <div className={styles.topContent}>
                <h1>Tech specs of our latest <span className={styles.rainbowText}>Apple Vision Pro</span></h1>
                <div className={styles.imageConteiner}>
                    <img src="/specs.jpeg" alt="Apple Vision Pro" />
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.cards}>
                    <h2>Chips</h2>
                    <p>M2 8-core CPU</p>
                    <p>10-core GPU</p>
                    <p>16GB unified memory</p>
                </div>
                <div className={styles.cards}>
                    <h2>Capacity - prices</h2>
                    <p>256GB- 3449$</p>
                    <p>512GB- 3699$</p>
                    <p>1TB- 3899$</p>
                </div>
                <div className={styles.cards}>
                    <h2>Display</h2>
                    <p>23 milion pixels</p>
                    <p>3D display system</p>
                    <p>Micro-Oled</p>
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.cards}>
                    <h2>Camera</h2>
                    <p>Stereoscopic 3D main camera </p>
                    <p>Spatial photo and video capture</p>
                    <p>18 mm, ƒ/2.00 aperture</p>

                </div>
                <div className={styles.cards}>
                    <h2>Battery</h2>
                    <p>Up to 2 hours of general use</p>
                    <p>Video watching up to 2.5h</p>
                    <p>Can be used while charging the battery</p>
                </div>
                <div className={styles.cards}>
                    <h2>Operating system</h2>
                    <p>New revolutionary visionOS</p>
                    <p>Works with iOS</p>
                    <p>Works with macOS from 14.0.0</p>
                </div>
            </div>
            <div className={styles.bottomContentBox}>
                <h2>In the box</h2>
                <div className={styles.bottomContentBoxText}>
                    <div>
                        <p>Apple Vision Pro</p>
                        <p>Cover</p>
                        <p>Dual loop band</p>
                        <p>Battery</p>
                    </div>
                    <div>
                        <p>Light seal cushion</p>
                        <p>Polishing cloth</p>
                        <p>30W USB-C Power adapter</p>
                        <p>USB-C Charge cable 1.5m</p>
                    </div>
                </div>
            </div>
            <div className={styles.bottomContent}>
                <div className={styles.bottomContentBox}>
                    <h2>Availability</h2>
                    <div className={styles.bottomContentBoxText}>
                        <div>
                            <p>Available in America 🇺🇸</p>
                            <p>Product will be available soon in China 🇨🇳</p>
                        </div>
                        <div>
                            <p>Product will be available in Europe in mid-2024 🇪🇺</p>
                            <p>Product will be available in Australia in mid-2024 🇦🇺</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.tobuy}>
                <div>
                    <h2>Apple Vision Pro works perfectly with</h2>
                </div>
                <div className={styles.tobuyImages}>
                    <div>
                        <img src="iphone.jpeg" />
                        <p>IPHONE 15 PRO MAX</p>
                    </div>
                    <div>
                        <img src="airpods.png" />
                        <p>AIRPODS PRO GEN 2</p>
                    </div>
                    <div>
                        <img src="watch.png" />
                        <p>APPLE WATCH SERIES 9</p>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Page;