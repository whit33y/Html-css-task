import "./page.css";

function Page() {
    return (
        <main className="container">
            <h1 className="container-title">Feel free to contact us</h1>
            <div className="container-top">
                <div className="container-top-map">
                    <h2>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" width={26} height={26}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="m20.893 13.393-1.135-1.135a2.252 2.252 0 0 1-.421-.585l-1.08-2.16a.414.414 0 0 0-.663-.107.827.827 0 0 1-.812.21l-1.273-.363a.89.89 0 0 0-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 0 1-1.81 1.025 1.055 1.055 0 0 1-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 0 1-1.383-2.46l.007-.042a2.25 2.25 0 0 1 .29-.787l.09-.15a2.25 2.25 0 0 1 2.37-1.048l1.178.236a1.125 1.125 0 0 0 1.302-.795l.208-.73a1.125 1.125 0 0 0-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 0 1-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 0 1-1.458-1.137l1.411-2.353a2.25 2.25 0 0 0 .286-.76m11.928 9.869A9 9 0 0 0 8.965 3.525m11.928 9.868A9 9 0 1 1 8.965 3.525" />
                        </svg>Our headquaters- Apple Park
                    </h2>
                    <img src="/map.png" alt="Apple Park Cupertino on map" />
                    <a href="https://maps.app.goo.gl/yR7cBXuWCFTChqSD9" target="_blank"><p><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" width={20} height={20}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                        One Apple Park Way, Cupertino, CA 95014, USA -press to view on map
                    </p></a>
                </div>
                <div className="container-top-contact">

                    <h2>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" width={26} height={26}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                        </svg>
                        Call us
                    </h2>
                    <p><a href="tel:(877) 412–7753">Apple Enterprise Sales (877) 412–7753</a></p>
                    <p><a href="tel:(877) 418–2573">Apple Government Sales (877) 418–2573</a></p>
                    <p><a href="tel:001–800–692–7753">Apple Education Sales 001–800–692–7753</a></p>

                    <h2><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" width={26} height={26}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                        Mail us
                    </h2>
                    <h3>-Order status </h3>
                    <p><a href="mailto:contact@apple.com">contact@apple.com</a></p>
                    <h3>-Need support?</h3>
                    <p><a href="mailto:support@apple.com">support@apple.com</a></p>
                    <h3>-Find reseller</h3>
                    <p><a href="mailto:resellers@apple.com">resellers@apple.com</a></p>
                </div>
            </div>
            <div className="container-bottom">
                <h2>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" width={26} height={26}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                    </svg>

                    Feedback
                </h2>
                <p className="container-bottom-text">Write an e-mail or call us about what we can change on our website or in our products</p>
                <p className="container-bottom-text-details"><a href="mailto:feedback@apple.com">feedback@apple.com</a></p>
                <p className="container-bottom-text-details"><a href="tel:001–800–692–7753">001–800–692–7753</a></p>
            </div>
        </main>
    );
}

export default Page;