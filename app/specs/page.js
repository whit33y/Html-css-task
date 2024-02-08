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
            <div className={styles.bottomContent}>
                <div className={styles.bottomContentSpecs}>
                    <h2>Camera</h2>
                    <div className={styles.bottomContentSpecsText}>
                        <p>Stereoscopic 3D main camera system</p>
                        <p>Spatial photo and video capture</p>
                        <p>18 mm, ƒ/2.00 aperture</p>
                        <p>6.5 stereo megapixels</p>
                    </div>
                </div>
                <div className={styles.bottomContentSpecs}>
                    <h2>Battery</h2>
                    <div className={styles.bottomContentSpecsText}>
                        <p>Up to 2 hours of general use</p>
                        <p>Video watching up to 2.5 hours</p>
                        <p>Apple Vision Pro can be used while charging the battery</p>
                    </div>
                </div>
                <div className={styles.bottomContentSpecs}>
                    <h2>In the box</h2>
                    <div className={styles.bottomContentSpecsText}>
                        <p>Apple Vision Pro</p>
                        <p>Cover</p>
                        <p>Dual loop band</p>
                        <p>Battery</p>
                        <p>Light seal cushion</p>
                        <p>Polishing cloth</p>
                        <p>30W USB-C Power adapter</p>
                        <p>USB-C Charge cable 1.5m</p>
                    </div>
                </div>
                <div className={styles.bottomContentSpecs}>
                    <h2>Operating system</h2>
                    <div className={styles.bottomContentSpecsText}>
                        <p>New revolutionary VisionOS</p>
                    </div>
                </div>
                <div className={styles.bottomContentSpecs}>
                    <h2>Availability</h2>
                    <div className={styles.bottomContentSpecsText}>
                        <p>Available in America.</p>
                        <p>Product will be available soon in China...</p>
                        <p>Product will be available in Europe in mid-2024.</p>
                        <p>Product will be available in Australia in mid-2024.</p>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Page;