import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav id="navbar" className={styles.navbar}>
      <div id={styles.hamburguer}>
        <span className={styles.Span} id={styles.um}></span>
        <span className={styles.Span} id={styles.dois}></span>
        <span className={styles.Span} id={styles.tres}></span>
      </div>
      <ul>
        <li>
          <a href="#navbar">
            Pedro<span>Dev</span>
          </a>
        </li>
        <li>
          <ul>
            <li>
              <a href="#about">Sobre</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projetos">Projetos</a>
            </li>

            <li>
              <a target="_blank" href="https://linkedin.com/in/pedro-jp">LinkedIn</a>
            </li>
            <li>
              <a target="_blank" href="https://github.com/pedro-jp">Github</a>
            </li>
            <li id={styles.contato}>
              Fale comigo
              <span>
                <a target="_blank" href=" https://wa.me/+5511937219384/?Ol%C3%A1%2C+passei+pelo+seu+portf%C3%B3lio.">Whatsapp</a>
              </span>
              <span>
                <a target="_blank" href="mailto:joaopedroc035@gmail.com">E-mail</a>
              </span>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
