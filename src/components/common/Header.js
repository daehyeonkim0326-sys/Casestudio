import Gnb from "./Gnb";
import logoImg from "../../assets/images/logo.png";
import { FaCartShopping } from "react-icons/fa6";
import "./Header.scss";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
        <div className="header-top">
          <Link to="/">
            <img src={logoImg} alt="luckydori 로고 이미지" />
          </Link>
          <Link to="cart">
            <FaCartShopping className="cart-icon"/>
          </Link>
        </div>
        <Gnb />
    </header>
  )
}

export default Header