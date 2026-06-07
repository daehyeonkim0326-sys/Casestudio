import "./section.scss";
import logoImg from "../../assets/images/logo.png";
const BannerSection = () => {
  return (
    <section id="banner">
      <div className="box">
        <div className="txt-box">
          <h2>히노키의 감성을 담은<br/>새로운 문구 컬렉션을 만나보세요.</h2>
          <img src={logoImg} alt="로고 이미지"/>
          <button>감성별 추천 박스 보기</button>
        </div>
      </div>
    </section>
  )
}

export default BannerSection