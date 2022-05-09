import style from './style.module.css'
import { itemSlice, setProds, setId, DeleteProd } from '../../redux/itemSlice'
import { useSelector, useDispatch } from 'react-redux'
import productsData from '../../products.json'


function Container() {


    const prods = useSelector(state => state.items.prods)
    const money = useSelector(state => state.items.money)
    const id = useSelector(state => state.items.id)
    const sayac = useSelector(state => state.items.sayac)

    const dispatch = useDispatch()

    const buyClick = (e) => {
        dispatch(setProds(e.target.value))
    }
    const handleChange = (e) => {
        e.target.value = sayac
    }
    return (

        <div className={style.main}>
            <div className={style.money}>
                <div className={style.MoneyText}>
                    ${money}
                </div>
            </div>

            <div className={style.products}>
                {
                    productsData.map(item => (
                        <div className={style.card} key={item.id} >
                            <div >
                                <img src={item.img} alt="" className={style.img} />
                            </div>
                            <div className={style.prodNameArea}>
                                <div className={style.prodName}>  {item.ProdName} </div>
                                <div className={style.prodPrice}>  ${item.ProdPrice} </div>
                            </div>
                            <div className={style.buttonsArea}>
                                <button className={style.sellButton} value={item.id} onClick={(e) => dispatch(DeleteProd(e.target.value))}>Sell</button>
                                <input
                                    className={style.input}
                                    type="number"
                                    onChange={handleChange}
                                />
                                <button className={style.buyButton} value={item.id} onClick={buyClick}>Buy</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>


    )
}

export default Container