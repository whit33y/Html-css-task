import styles from "./button.module.css";

function BuyButton() {
    return (
        <a href='/specs'>
            <button className={styles.buyButton}>
                Buy
            </button>
        </a>
    );
}

export default BuyButton;