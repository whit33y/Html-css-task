import styles from "./page.module.css";

function Page() {
    return (
        <main className={styles.main}>
            <h1 className={styles.title}>Feel free to contact us</h1>
            <div className={styles.content}>
                <div className={styles.map}>
                    <h2>Our headquaters- Apple Park</h2>
                    <img src="/map.png" alt="Apple Park Cupertino on map" className={styles.mapImage} />
                    <a href="https://maps.app.goo.gl/yR7cBXuWCFTChqSD9" target="_blank"><p>One Apple Park Way, Cupertino, CA 95014, USA 📌-press to view on map</p></a>
                    <p>Visit us 7 days a week from 9:00am to 6:00pm</p>
                </div>
                <div className={styles.contentRight}>

                    <h2>Call us</h2>
                    <p>Apple Enterprise Sales (877) 412–7753</p>
                    <p>Apple Government Sales (877) 418–2573</p>
                    <p>Apple Education Sales 001–800–692–7753</p>

                    <h2>Mail us</h2>
                    <h3>Order status</h3>
                    <p>contact@apple.com</p>
                    <h3>Need support?</h3>
                    <p>support@apple.com</p>
                    <h3>Find reseller</h3>
                    <p>resellers@apple.com</p>
                </div>
            </div>
            <div className={styles.contentBottom}>
                <h2>Feedback</h2>
                <p>Write an e-mail or call us about what we can change on our website or in products
                </p>
                <p className={styles.contentBottomDetails}>feedback@apple.com</p>
                <p className={styles.contentBottomDetails}>001–800–692–7753</p>
            </div>
        </main>
    );
}

export default Page;