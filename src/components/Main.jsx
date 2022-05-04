import Container from "./Container/Container"
import Footer from "./Footer/Footer"
import Header from "./Header/Header"
import style from './style.module.css'
function Main() {
    return (
        <div className={style.layout}>
            <Header />
            <Container />
            <Footer />

        </div>
    )
}

export default Main