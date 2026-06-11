import "./footer.scss";
const Footer = () => {
  return (
    <footer>
      <div className="info">
      <div className="name">
        <p>상호명:CASE STUDIO</p>
        <p>대표자:김대현</p>
        <p>주소:수원시 00동</p>
      <p className="pro">
        © 2025 CASE SUTDIO. All Rights Reserved.<br/>
        본 사이트는 포트폴리오 목적으로 제작된 비상업적 프로젝트입니다.
      </p>
      </div>
      <div className="call">
        <p>고객센터 : 1588-0000</p>
        <p>운영시간 : 평일 09:00 ~ 18:00</p>
        <p>점심시간 : 12:00 ~ 13:00</p>
        <p>주말 및 공휴일 휴무</p>
      </div>
      </div>
      
    </footer>
  )
}

export default Footer