import styles from "./Navbar.module.css"

const Navbar = () => {
    return(
        <nav id="navbar" className={styles.navbar}>
            <ul>
                <li><a href="#navbar">Pedro<span>Dev</span></a></li>
                <li>
                    <ul>
                        <li><a href="">Sobre</a></li>
                        <li><a href="">Skills</a></li>
                        <li><a href="">Projetos</a></li>
                    </ul>
                </li>
                <li>
                <ul>
                        <li><a href="">LinkedIn</a></li>
                        <li><a href="">Github</a></li>
                        <li id={styles.contato}>Fale comigo 
                            <span><a href="">Whatsapp</a></span>
                            <span><a href="">E-mail</a></span>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;