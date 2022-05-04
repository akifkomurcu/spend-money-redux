import React from 'react'
import style from './style.module.css'
import black from './black.png'
function Header() {
    return (

        <div className={style.header}>
            <div className={style.HeaderTop}>
                <div className={style.HeaderTopText}>
                    akifkomurcu
                </div>
            </div>
            <div className={style.HeaderMain}>

                <img src={black} alt="" className={style.HeaderMainPP} />


                <div className={style.HeaderMainText}>Spend Peasants Money</div>
            </div>
        </div>

    )
}

export default Header