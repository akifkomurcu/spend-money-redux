import React from 'react'
import style from './style.module.css'
import { useSelector, useDispatch } from 'react-redux'

function Footer() {



    const sayac = useSelector(state => state.items.sayac)

    return (

        sayac.length !== 0 && <div className={style.footer}>
            <div className={style.ListTitle}>
                Your Receipt
            </div>
            {
                sayac.map((item, index) => (
                    <div className={style.ItemsList} key={index}>
                        <div className={style.item}>
                            <div className={style.itemName}>{item.name}</div>
                            <div className={style.ItemAmount}>  x{item.quantity}</div>
                            <div className={style.ItemCost}>   ${item.price}</div>
                        </div>
                    </div>
                ))
            }
            <hr style={{ width: "24%" }} />
            <div className={style.Total}>
                <div className={style.TotalText}>Total</div>
                <div className={style.TotalCost}></div>
            </div>
        </div>
    )
}

export default Footer