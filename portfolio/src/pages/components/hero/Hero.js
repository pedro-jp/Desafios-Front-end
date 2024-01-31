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
        <img src="/assets/perfil.jpg" alt="me" />
      </div>
      </div>
      
    </section>
  );
};

export default Hero;
