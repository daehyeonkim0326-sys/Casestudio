import "./section.scss";
import logoImg from "../../assets/images/logo.png";
import case1 from "../../assets/images/slider/caseimg1.png"
import case2 from "../../assets/images/slider/caseimg2.png"
import { useEffect, useState } from "react";
const slides = [
  {img:[case1]},
  {img:[case2]}
]
const BannerSection = () => {
  const [slide,setSlide] =useState(0); 
  useEffect(()=>{
    const timer = setInterval(()=>{
      setSlide((prev)=>(prev + 1) % slides.length);
    },3000);
    return () => clearInterval(timer);
  },[]);
  return (
    <section id="banner">
      <div className="box">
        <div className="track" style={{ transform: `translateX(-${slide * 100}%)` }}>
        {slides.map((item,index)=>(
        <img key={index}
          src={item.img}
          alt={`배너 이미지 ${index + 6}`}
          className="banner-img"/>
        ))}
        </div> 
        <ul className="indicator">
          {slides.map((item,index) => (
            <li key={index}
            onClick={() => setSlide(index)}
              className={slide === index ? "active" : ""}>
              </li>
            
          ))}
          
        </ul>
        <div className="txt-boxmoblie">
      <h2>
        케이스 스튜디오의 감성을 담은
        <br />
        새로운 case 컬렉션을 만나보세요.
      </h2>
      <img src={logoImg} alt="로고 이미지" />
      <button>랜덤박스 보기</button>
    </div>
    <div className="txt-box">
      <h2>
        케이스 스튜디오의 감성을 담은
        <br />
        새로운 case 컬렉션을 만나보세요.
      </h2>
      <img src={logoImg} alt="로고 이미지" />
      <button>랜덤박스 보기</button>
    </div>
      </div>
    </section>
  )
}

export default BannerSection