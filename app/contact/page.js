import "./page.css";

function Page() {
    return (
        <main className="container">
            <h1 className="container-title">Feel free to contact us</h1>
            <div className="container-top">
                <div className="container-top-map">
                    <h2>Our headquaters- Apple Park</h2>
                    <img src="/map.png" alt="Apple Park Cupertino on map" />
                    <a href="https://maps.app.goo.gl/yR7cBXuWCFTChqSD9" target="_blank"><p>One Apple Park Way, Cupertino, CA 95014, USA 📌-press to view on map</p></a>
                    <p>Visit us 7 days a week from 9:00am to 6:00pm</p>
                </div>
                <div className="container-top-contact">

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
            <div className="container-bottom">
                <h2>Feedback</h2>
                <p className="container-bottom-text">Write an e-mail or call us about what we can change on our website or in our products</p>
                <p className="container-bottom-text-details">feedback@apple.com</p>
                <p className="container-bottom-text-details">001–800–692–7753</p>
            </div>
        </main>
    );
}

export default Page;