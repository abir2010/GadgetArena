import React, { useEffect, useState } from "react";
import "./Checkout.css";
import useData from "../../Hooks/useData";
import Cart from "../Cart/Cart";
import imgChip from "../../Images/chip.png";
import imgVisa from "../../Images/visa.png";

export default function Checkout() {
  const [price, setPrice] = useState(0);
  const { cart, setCart } = useData();
  // console.log(cart);
  const handlePrice = () => {
    let sum = 0;
    cart.map((item) => (sum += item.price * item.amount));
    setPrice(sum);
  };
  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
  };
  const handleRemoveAll = () => {
    setCart([]);
  };
  const handleChange = (item, d) => {
    let ind = -1;
    cart.forEach((data, index) => {
      if (data.id === item.id) ind = index;
    });

    const tempArray = cart;
    tempArray[ind].amount += d;
    if (tempArray[ind].amount === 0) tempArray[ind].amount = 1;
    setCart([...tempArray]);
    console.log(item, d);
  };
  useEffect(() => {
    handlePrice();
  });
  return (
    <div className="main-containerr">
      <div className="c-cards">
        <div className="c-card">
          <div className="product-container">
            <div className="CartContainer">
              <div className="Header">
                <h3 className="Heading">Shopping Cart</h3>
                <h5 className="Action" onClick={handleRemoveAll}>
                  Remove all
                </h5>
              </div>
              {/* <!-- first section --> */}
              {cart?.map((scart) => (
                <Cart
                  key={scart.id}
                  scart={scart}
                  handleRemove={handleRemove}
                  handleChange={handleChange}
                />
              ))}
              <hr />
              {/* <!-- last section --> */}
              <div className="checkout">
                <div className="total">
                  <div>
                    <div className="Subtotal">Sub-Total</div>
                    <div className="items">{cart.length} items</div>
                  </div>
                  <div className="total-amount">${price}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*------- payment section---------- */}
        <div className="c-card">
          <div class="container2">
            <div class="card-container">
              <div class="front">
                <div class="image">
                  <img src={imgChip} alt="" />
                  <img src={imgVisa} alt="" />
                </div>
                <div class="card-number-box">################</div>
                <div class="flexbox">
                  <div class="box">
                    <span>card holder</span>
                    <div class="card-holder-name">full name</div>
                  </div>
                  <div class="box">
                    <span>expires</span>
                    <div class="expiration">
                      <span class="exp-month">mm</span>
                      <span class="exp-year">yy</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="back">
                <div class="stripe"></div>
                <div class="box">
                  <span>cvv</span>
                  <div class="cvv-box"></div>
                  <img src="image/visa.png" alt="" />
                </div>
              </div>
            </div>

            <form action="">
              <div class="inputBox">
                <span>card number</span>
                <input type="text" maxlength="16" class="card-number-input" />
              </div>
              <div class="inputBox">
                <span>card holder</span>
                <input type="text" class="card-holder-input" />
              </div>
              <div class="flexbox">
                <div class="inputBox">
                  <span>expiration mm</span>
                  <select name="" id="" class="month-input">
                    <option value="month" selected disabled>
                      month
                    </option>
                    <option value="01">01</option>
                    <option value="02">02</option>
                    <option value="03">03</option>
                    <option value="04">04</option>
                    <option value="05">05</option>
                    <option value="06">06</option>
                    <option value="07">07</option>
                    <option value="08">08</option>
                    <option value="09">09</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                  </select>
                </div>
                <div class="inputBox">
                  <span>expiration yy</span>
                  <select name="" id="" class="year-input">
                    <option value="year" selected disabled>
                      year
                    </option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                    <option value="2028">2028</option>
                    <option value="2029">2029</option>
                    <option value="2030">2030</option>
                  </select>
                </div>
                <div class="inputBox">
                  <span>cvv</span>
                  <input type="text" maxlength="4" class="cvv-input" />
                </div>
              </div>
              <input type="submit" value="submit" class="submit-btn" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
