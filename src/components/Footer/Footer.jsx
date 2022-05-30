import React from "react";
import style from "./style.module.css";
import { useSelector } from "react-redux";
import NumberFormat from "react-number-format";
function Footer() {
  const prods = useSelector((state) => state.items.prods);
  const money = useSelector((state) => state.items.money);
  const totalMoney = 100000000000 - parseInt(money);
  return (
    prods.length !== 0 && (
      <div className={style.footer}>
        <div className={style.ListTitle}>Your Receipt</div>
        <hr style={{ width: "40%" }} />
        {prods.map((item, index) => (
          <div className={style.ItemsList} key={index}>
            <div className={style.item}>
              <div className={style.itemName}>{item.ProdName}</div>
              <div className={style.ItemAmount}> x{item.quantity}</div>
              <div className={style.ItemCost}>
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
          </div>
        ))}
        <hr style={{ width: "24%" }} />
        <div className={style.Total}>
          <div className={style.TotalText}>Total</div>
          <div className={style.TotalCost}>
            {
              <NumberFormat
                value={totalMoney}
                className="foo"
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
                renderText={(value, props) => <div {...props}>{value}</div>}
              />
            }
          </div>
        </div>
      </div>
    )
  );
}

export default Footer;
