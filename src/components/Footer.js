// img import
import logo from "../assets/scss/img/logo.png";

const Footer = () => {
    return (
        <footer>
            <div>
                <img src={logo} alt="bifrost" />
            </div>
            <div>
                <p>Made by Halim Boudarra</p>
            </div>

            <div class="lien">
                <a href="https://github.com/hboudarr" target="_blank">
                    GitHub
                </a>
            </div>
            <div>
                <a
                    href="https://www.linkedin.com/in/halim-boudarra-4b74a4143/"
                    target="_blank"
                >
                    Linkedin
                </a>
            </div>
        </footer>
    );
};

export default Footer;
