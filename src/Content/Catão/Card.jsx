import styles from "./Card.module.css";

function Card() {

 return (

  
   <main className={styles.main}>
   <div className={styles.container}>
    <div className={styles.columnOne}>
      <img className={styles.imageOne} src="./public\card\imageOne.jpg" alt="" />
      <div className={styles.enterprise}>
        <p className={styles.aboutText}>Bem vindo a</p>  <p className={styles.zenith}><span>Zenith</span></p><p className={styles.sushi}>Sushi</p>
        <div className={styles.divIcons}>
          <img className={styles.icons} src="public\icons\whatsapp.svg" alt="" />
          <img className={styles.icons} src="public\icons\instagram.svg" alt="" />
          <img className={styles.icons} src="public\icons\ifood.svg" alt="" />
        </div>
      </div>
    </div>
    <div className={styles.columnTwo}>
      <img className={styles.imageTwo} src="./public\card\imageTwo.jpg" alt="" />
      <img className={styles.imageThree} src="./public\card\imageThree.jpg" alt="" />
      <div className={styles.about}>
      <p>
      Bem-vindo ao <strong>Zenith Sushi</strong>, Explore a fusão de sabores <strong>clássicos</strong> e <strong>contemporâneos</strong> em um ambiente acolhedor, onde cada cliente se torna parte de uma jornada <strong>gastronômica</strong> memorável. Sinta a tradição, saboreie a inovação e permita-nos guiá-lo por uma experiência de sushi que transcende o ordinário.
      </p>
      </div>
    </div>
    <div className={styles.columnThree}>
      <img className={styles.imageFour} src="./public\card\imageFour.jpg" alt="" />
      <img className={styles.imageFive} src="./public\card\imageFive.jpg" alt="" />
    </div>
   </div>
   </main>
  
 )
}

export default Card