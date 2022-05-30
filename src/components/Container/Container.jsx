import { useState } from "react";
import style from "./style.module.css";
import { itemSlice, setProds, setId, DeleteProd } from "../../redux/itemSlice";
import { useSelector, useDispatch } from "react-redux";
import productsData from "../../products.json";
import NumberFormat from "react-number-format";
function Container() {
  const sellButton = useSelector((state) => state.items.sellButton);
  const id = useSelector((state) => state.items.id);
  const prods = useSelector((state) => state.items.prods);
  const money = useSelector((state) => state.items.money);
  const sayac = useSelector((state) => state.items.sayac);
  const [input, setInput] = useState(0);
  const dispatch = useDispatch();

  const buyClick = (e) => {
    dispatch(setProds(e.target.value));
  };

  return (
    <div className={style.main}>
      <div className={style.money}>
        <div className={style.MoneyText}>
          {" "}
          <NumberFormat
            value={money}
            className="foo"
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
            renderText={(value, props) => <div {...props}>{value}</div>}
          />
        </div>
      </div>

      <div className={style.products}>
        {productsData.map((item, index) => (
          <div className={style.card} key={item.id}>
            <div>
              <img src={item.img} alt="" className={style.img} />
            </div>
            <div className={style.prodNameArea}>
              <div className={style.prodName}> {item.ProdName} </div>
              <div className={style.prodPrice}>
                {
                  <NumberFormat
                    value={item.ProdPrice}
                    className="foo"
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$"}
                    renderText={(value, props) => <div {...props}>{value}</div>}
                  />
                }
              </div>
            </div>
            <div className={style.buttonsArea}>
              <button
                className={
                  prods.some((prod) => prod.id === item.id)
                    ? style.sellButton
                    : style.sellButtonInactive
                }
                value={item.id}
                onClick={(e) => dispatch(DeleteProd(e.target.value))}
              >
                Sell
              </button>
              <input
                className={style.input}
                type="number"
                value={item.quantity}
              />
              <button
                className={style.buyButton}
                value={item.id}
                onClick={buyClick}
              >
                Buy
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Container;
