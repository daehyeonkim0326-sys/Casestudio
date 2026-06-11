import Gnb from "./Gnb";
import logoImg from "../../assets/images/logo.png";
import { FaCartShopping } from "react-icons/fa6";
import "./Header.scss";
import { Link } from "react-router-dom";
import Gnbdesk from "./Gnbdesk";
const Header = () => {
  return (
    <header>
        <div className="header-top">
          <Link to="/">
            <img src={logoImg} alt="luckydori 로고 이미지" />
          </Link>
          <div className="menu">
              <Link to="cart" className="cart-icon">
                <FaCartShopping/>
              </Link>
                <Gnb className="nav"/>
          </div>
        </div>
          <Gnbdesk className="nav" />
    </header>
  )
}

export default Header