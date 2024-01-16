import Card from "./Catão/Card"
import styles from "./Main.module.css"
import Header from "./header/Header"
import Footer from "./Footer/Footer"

function Main() {


  return (
    <body className={styles.body}>
    <Header />
    <Card />
    <Footer />
    </body>
  )
}

export default Main

