import React from 'react'
import style from './style.module.css'
function Footer() {
    return (

        <div className={style.footer}>
            <div className="ListTitle">
                Your Receipt
            </div>
            <div className="ItemsList">
                <div className="item">
                    <div className="itemName"></div>
                    <div className="ItemAmount"></div>
                    <div className="ItemCost"></div>
                </div>
                <hr style={{ width: "24%" }} />
            </div>
            <div className="Total">
                <div className="TotalText">Total</div>
                <div className="TotalCost"></div>
            </div>
        </div>
    )
}

export default Footer