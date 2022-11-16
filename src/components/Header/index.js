import "./index.scss";
import Button from "../base/Button";
import { BiMenuAltRight } from "react-icons/bi";


const Header = () => {
    return (
        <div className="container-header">
            <div className="toggle-nav">
                <code>DeG</code>
                <BiMenuAltRight className="icon-header-toggle" />
            </div>
            <div className="manu-navbar">
                <span>DeepG</span>
                <ul>
                    <li>Home</li>
                    <li>Nosotros</li>
                    <li>Extra</li>
                </ul>
                <Button dark text="Login" />
            </div>
        </div>

    )
}


export default Header