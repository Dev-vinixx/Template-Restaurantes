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
   <section className={styles.section}>
    <div className={styles.divCarrossel}>
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="public\Complet\imageUm.jpg" alt="Primeiro Slide" />
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="public\Complet\imageDois.jpg" alt="Segundo Slide" />
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="public\Complet\imageTres.jpg" alt="Terceiro Slide" />
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Anterior</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Próximo</span>
  </a>
</div>
    </div>
   </section>
   <footer className={styles.footer}><p>feito por <span><a href="">vinixx</a></span> &copy;</p><img className={styles.imageLogo2} src="./public\Complet\logo_trial.png" alt="" /></footer>
  </main>

 )
}

export default Complet