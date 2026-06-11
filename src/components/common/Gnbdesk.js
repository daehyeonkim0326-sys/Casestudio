import React from 'react'
import "./Gnb.scss"
function Gnbdesk({nav}) {
  return(
   <nav className="nav">
           <div className="menu-wrap">
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
)}
export default Gnbdesk