import styles from "./Header.module.css";

function Header() {

 return (
  <header className={styles.header}>
   
    <ul className={styles.listLinks}>
     <li><a href="">Completo</a></li>
     <li><a href="">Simples</a></li>
     <li><a href="">Cartão</a></li>
    </ul>
   
  </header>
 )
}
export default Header 