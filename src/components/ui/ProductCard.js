import { useState } from "react";
import "./productcard.scss";
const ProductCard = ({item}) => {
    const [isHover,setIsHover]=useState(false);
    const getImagePath = (imgName) => {
        let HoverName = imgName
        if( isHover ){
            //경로값에서 -1 --> -2
            HoverName = imgName.replace('-1','-2');
        }
        return require(`../../assets/images/new/${HoverName}`);
    }
  return (
    <div className="card" onMouseEnter={()=>{setIsHover(true)}} onMouseLeave={()=>{setIsHover(false)}}>
        <div className="img-box">
            <img src={getImagePath(item.image)} alt={item.title}/>
        </div>
        <div className="txt-box">
            <p>{item.title}</p> 
            <p>￦{Number(item.price).toLocaleString()}</p>
        </div>
        <p className="cart">Add Cart</p>
    </div>
  )
}

export default ProductCard