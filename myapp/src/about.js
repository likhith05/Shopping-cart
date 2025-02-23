import { useNavigate } from "react-router-dom";

function About() {
    const navigate = useNavigate();

    return (
        <div>
            {/* Header Section */}
            <div className="" style={{ backgroundColor: "#f8f8ff" }}>
                <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                    <a href="/home" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                        <i className="bi bi-person me-2" style={{ fontSize: "1.5rem" }}></i>
                        <span className="fs-4">Simple header</span>
                    </a>

                    <ul className="nav nav-pills">
                        <li className="nav-item">
                            <a href="#" className="nav-link" onClick={() => navigate("/home")}>
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link" onClick={() => navigate("/cart")}>
                                <i className="bi bi-cart">Cart</i>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link active" onClick={() => navigate("/about")}>
                                About
                            </a>
                        </li>
                    </ul>
                </header>
            </div>

            {/* About Section */}
            <div style={{backgroundColor:""}}>
            <div className="container">
                <h1 className="mt-5">About Our Watch Collection</h1>
                <p>
                    Welcome to our premium watch collection website! We are dedicated to offering you the finest selection of watches, carefully curated to fit every style, occasion, and personality.
                    Our goal is to help you find the perfect timepiece that not only keeps time but also reflects your individual style and taste.
                </p>
                <h3>Why Choose Us?</h3>
                <ul>
                    <li>Exclusive collection of luxury and modern watches.</li>
                    <li>Top brands with timeless designs.</li>
                    <li>Expert customer service to guide you through your purchase.</li>
                    <li>Secure online shopping experience.</li>
                </ul>
                <p>
                    Whether you're looking for a classic timepiece, a sports watch, or a sophisticated accessory to complement your look, we have it all.
                    At our store, every watch tells a story—let us help you find yours!
                </p>

                <h3>Our Mission</h3>
                <p>
                    Our mission is to provide a seamless shopping experience where quality meets elegance. We believe that a watch is more than just a tool for telling time—it's an expression of one's unique style and character.
                </p>

                <h3>Contact Us</h3>
                <p>
                    Have any questions or need assistance? Feel free to contact us at support@watchstore.com or call us at +123-456-7890. We're here to help!
                </p>
            </div>
            </div>

            {/* Footer Section */}
            <div className="" style={{ backgroundColor: "#d3d3d3" }}>
                <footer className="py-3 my-4">
                    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                        <li className="nav-item">
                            <a href="#" className="nav-link px-2 text-body-secondary" onClick={() => navigate("/home")}>
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link px-2 text-body-secondary" onClick={() => navigate("/cart")}>
                                Cart
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link px-2 text-body-secondary" onClick={() => navigate("/about")}>
                                About
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link px-2 text-body-secondary">
                                FAQs
                            </a>
                        </li>
                    </ul>
                    <p className="text-center text-body-secondary">© 2024 Company, Inc</p>
                </footer>
            </div>
        </div>
    );
}

export default About;
