import styles from "./Complet.module.css"

function Complet() {
 return (
  
  <main className={styles.main}>
   <header className={styles.header}>
    <nav className={styles.nav}>
    <a href=""><img className={styles.imageLogo} src="./public\Complet\logo_trial.png" alt="" /> </a>
    <div className={styles.menuDiv}>
     <input className={styles.checkbox} type="checkbox" name="" id="checkbox" />
     <label htmlFor="checkbox" className={styles.labelMenu}><span className={styles.hamburger}></span></label>
     <ul className={styles.linkList}>
      <li><a href="">home</a></li>
      <li><a href="">sobre</a></li>
      <li><a href="">cardapio</a></li>
      <li><a href="">contato</a></li>
     </ul>
    </div>
    </nav>
   </header>
   <section className={styles.section}></section>
   <footer className={styles.footer}><p>feito por <span><a href="">vinixx</a></span> &copy;</p><img className={styles.imageLogo2} src="./public\Complet\logo_trial.png" alt="" /></footer>
  </main>

 )
}

export default Complet