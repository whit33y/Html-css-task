import styles from "./footer.module.css";

function Footer() {
    return (
        <footer className={styles.footer}>
            Apple Inc 2024 United States
            <div className={styles.footerLinks}>
                <a href="../example.pdf">Terms</a>
                <a href="/examplepdf2.pdf">Privacy policy</a>
            </div>
        </footer>);
}

export default Footer;