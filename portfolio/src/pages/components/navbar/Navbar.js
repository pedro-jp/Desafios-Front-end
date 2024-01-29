import styles from "./Navbar.module.css"

const Navbar = () => {
    return(
        <nav className={styles.navbar}>
            <ul>
                <li><a href="">Pedro<span>Dev</span></a></li>
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
                        <li>Fale comigo</li>
                    </ul>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;