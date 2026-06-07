import "./section.scss";
import listData from "../../assets/data/categories.json";
import { Link } from "react-router-dom";
const CategorySection = () => {
  return (
    <section id="category">
       <div className="collection">
          <div className="txt">
            <h3>NEW COLLECTION</h3>
            <h3>소소한 일상에 작은 설렘을 더해줄 감성 문구 컬렉션!</h3>
            <p>우정,공부,힐링,다꾸까지 각자의 이야기를 담은 랜덤박스를<br/>만나보세요</p>
          </div>
            <ul>
              {listData.map((item,idx)=>{
                return(
                  <li key={idx}>
                    <Link to="파우치">
                      <img src={require(`../../assets/images/circle_small/${item.image}`)} alt={item.title}/>
                      <p>{item.title}</p>
                    </Link>
                  </li>
                )
              })}
            </ul>
          
       </div>
    </section>
  )
}

export default CategorySection