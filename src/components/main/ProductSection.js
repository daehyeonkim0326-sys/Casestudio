import productData from "../../assets/data/products.json";
import ProductCard from "../ui/ProductCard";
import "./section.scss";
import { useEffect, useState } from "react";
const ProductSection = () => {
  const [bestItems,setBestItems] = useState([]);
  useEffect(()=>{
    //isBest 값이 true인 상태목록만 저장
    const items = productData.filter((item)=>{
      return item.isBest === true;
    });
    setBestItems(items);
  },[]);
  return (
    <section id="product">
        <div className="txt">
          <h2>BEST SELLERS</h2>
          <p>가장 사랑받는 베스트 아이템을 만나보세요</p>
        </div>
        <div className="product-grid">
          {/*slice 처리로 destitem 8개만 보여지게 */}
        {bestItems.slice(0,8).map((item)=>{
          return(
          <ProductCard key={item.id} item={item}/>
          )
        })
          }
        </div>
    </section>
  )
}

export default ProductSection