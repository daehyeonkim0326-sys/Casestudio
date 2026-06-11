import { useEffect, useState } from "react";
import "./CartPage.scss";
import { useNavigate } from "react-router-dom";

const CartPage = ({ cartItems, onUpdate, onDelete }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartView, setCartView] = useState(false);
  const Navigate =useNavigate();
useEffect(() => {
  if (cartItems.length <= 0) {
    setCartView(false);
  } else{setCartView(true)}

    const total = cartItems.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);

    setTotalPrice(total);
  }, [cartItems]);

  return (
    <div className="cart-page">
      <h2>쇼핑카트</h2>
      <p>주문하실 상품을 확인해 주세요</p>
      {
        !cartView && (
          <div className="cart-zero">
            <div>장바구니가 비었습니다.</div>
            <button onClick={()=>{Navigate('/')}}>쇼핑하러 가기</button>
          </div>
        )
      }
        {
          cartView &&(

          
        
      <div className="cart-wrap">
        <ul className="cart-list">
          {cartItems.map((item) => (
            <li key={item.id}>
              <div className="img-box">
                <img
                  src={require(`../assets/images/new/${item.image}`)}
                  alt={item.title}
                />
              </div>

              <div className="info-box">
                <h3>{item.title}</h3>

                <div className="price-wrap">
                  {/* <p>￦ {Number(item.price).toLocaleString()}</p> */}

                  <div className="count-wrap">
                    <button onClick={() => onUpdate(item.id, "minus")}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => onUpdate(item.id, "plus")}>+</button>
                  </div>

                  <p>￦ {Number(item.price * item.quantity).toLocaleString()}</p>
                </div>
              </div>

              {/* ✅ id 넘겨야 삭제됨 */}
              <button onClick={() => onDelete(item.id)}>삭제</button>
            </li>
          ))}
        </ul>

        <div className="cart-summary">
          <div className="ex">
          <h3>주문 예상 금액</h3>

          <div className="summary-wrap">
            <span>총 상품 금액</span>
            <span>￦ {Number(totalPrice).toLocaleString()}</span>
          </div>

          <div className="summary-wrap">
            <span>배송비</span>
            <span>￦ 0 (무료)</span>
          </div>
          </div>

          <div className="summary-total">
            <span>총 결제 금액</span>
            <span>￦ {Number(totalPrice).toLocaleString()}</span>
          <button>주문하기</button>
          </div>

        </div>
      </div>
  )}
    </div>
  );
};

export default CartPage;
