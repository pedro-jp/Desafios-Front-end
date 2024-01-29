import styles from "./Navbar.module.css"

const Navbar = () => {
    return(
        <nav className={styles.navbar}>
            <ul>
                <li>um</li>
                <li>
                    <ul>
                        <li>Um</li>
                        <li>Dois</li>
                        <li>tres</li>
                    </ul>
                </li>
                <li>
                <ul>
                        <li>um</li>
                        <li>dois</li>
                        <li>tres</li>
                    </ul>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;