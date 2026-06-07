import { useParams } from "react-router-dom"
import productData from "../assets/data/products.json";
import { useEffect, useState } from "react";
import ProductCard from "../components/ui/ProductCard";
import "./categorypage.scss";
const CategoryPage = ({onAdd}) => {
  const {categoryName}=useParams();
  const [filterData,setFilterData] = useState([]);
  useEffect(()=>{
    const items = productData.filter((item)=>{
      return item.category === categoryName;
    });
    setFilterData(items);
  },[categoryName]);
  return (
      <div className="category-page">
        <h2>{categoryName}</h2>
        <p>{filterData.length} 개의 상품이 있습니다.</p>
        <div className="product-list">
          {
            filterData.map((item)=>{
              return <ProductCard key={item.id} item={item} onAdd={onAdd}/>
            })
          }
        </div>
      </div>
  )
}

export default CategoryPage