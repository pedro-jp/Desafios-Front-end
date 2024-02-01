import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div>
        <div>
            <h2>Olá, eu sou</h2>
            <h1>
              &lt;Pedro <br /> Dev /&gt;
            </h1> 
            <h2 style={{ fontSize: "2rem", marginTop: "20px" }}>
              Full Stack Developer
            </h2>
            <div className={styles.xp}>
              <span>5</span>
              <span>
                Anos de <br />
                estudos
              </span>
              <div>
                <span>+10</span>
                <span>
                  Projetos pessoais
                  <br />
                  realizados
                </span>
              </div>
            </div>
        </div>
        <div className={styles.photo}>
          <span className={styles.sphere}></span>
          <span className={styles.sphere}></span>
          <span><img className={styles.icons} src="./assets/icons/react-original 1.svg"  alt="React svg" style={{height: "70px", width: "70px"}}></img></span>
          <span><img className={styles.icons} src="./assets/icons/javascript-original 1.svg" alt="Javascript svg" style={{height: "35px", width: "35px"}}></img></span>
          <span><img className={styles.icons} src="./assets/icons/nodejs-original 1.svg" alt="Node svg" style={{height: "60px", width: "60px"}}></img></span>
        <img src="/assets/perfil-disney.png" alt="me" style={{height: "230px", width: "230px", zIndex: "0"}}/>
      </div>

      <div className={styles.sobre}>
      
      </div>
      </div>
      
    </section>
  );
};

export default Hero;
