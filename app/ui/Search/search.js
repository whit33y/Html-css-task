import styles from "./search.module.css";

function Search() {
    return (
        <div className={styles.upperNavSearch}>
            <input type="text" placeholder="Search..." maxLength={15} />
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width={32} height={32} color="#FFFFF0">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
        </div>
    );
}

export default Search;