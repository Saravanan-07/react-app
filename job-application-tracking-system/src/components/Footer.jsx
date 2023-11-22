import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <footer>
            <p>Copyright &copy; <a href="https://www.github.com/Saravanan-07/">SKCET & Institutions</a> 2023</p>
            <p><Link to="/about">About</Link></p>
            
        </footer>
    );
};

export default Footer;