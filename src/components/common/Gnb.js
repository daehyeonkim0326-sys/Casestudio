import "./Gnb.scss";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from "react";

const Gnb = ({nav}) => {
    const [isShow,setIsShow]=useState(false);
    const handleClick=()=>{
        setIsShow(!isShow);
    }
  return (
    <nav className="nav">
        <div className="mobile" onClick={handleClick}>
            <button>{
                isShow ? <IoCloseSharp/> : <RxHamburgerMenu/>
                }
            </button>
        </div>
        <div className={`menu-wrap ${isShow ? 'on' : ''}`}>
           <ul className="menu-top">
                   <li>전체보기</li>
                   <li>인기상품</li>
                   <li>신상 케이스</li>
                   <li>액세서리</li>
               </ul>
               <ul className="menu-bottom">
                   <li>랜덤박스📦</li>
                   <li>선물박스🎁</li>
                   <li>계절박스☀️</li>
               </ul>
        </div>
    </nav>
  )  
}

export default Gnb