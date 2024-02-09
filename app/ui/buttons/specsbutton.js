import "./button.css";

function SpecsButton() {
    return (
        <a href='/specs' className="btn-specs">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" width={24} height={24}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
            Learn more

        </a>
    );
}

export default SpecsButton;