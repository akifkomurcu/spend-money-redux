import burger from './img/big-mac.jpg'
import style from './style.module.css'
function Container() {
    return (

        <div className={style.main}>
            <div className={style.money}>
                <div className={style.MoneyText}>
                    money
                </div>
            </div>
            <div className={style.products}>
                <div className={style.card}>
                    <div >
                        <img src={burger} alt="" className={style.img} />
                    </div>
                    <div className={style.prodNameArea}>
                        <div className={style.prodName}>  prodName </div>
                        <div className={style.prodPrice}>  $2 </div>
                    </div>
                    <div className={style.buttonsArea}>
                        <button>Sell</button>
                        <input type="number" />
                        <button>Buy</button>
                    </div>
                </div>



            </div>
        </div>


    )
}

export default Container