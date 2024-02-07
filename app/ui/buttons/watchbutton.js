import styles from "./button.module.css";

function WatchButton() {
    return (
        <a href="https://www.youtube.com/watch?v=TX9qSaGXFyg" target="_blank">
            <button className={styles.watchButton}>
                Watch demo
            </button>
        </a>
    );
}

export default WatchButton;