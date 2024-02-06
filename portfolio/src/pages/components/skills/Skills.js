import styles from "./Skills.module.css"
import Svg from "../svg/Svg"

function Skills() {
    return (
        <section id="skills" className={styles.skills}>
            <h2>Skills<span>( )</span></h2>
            <div className={styles.container_svg}>
                <div className={styles.first_svg_line}>
                    <Svg />
                    <Svg />
                    <Svg />
                </div>
                <div className={styles.second_svg_line}>
                    <Svg />
                    <Svg />
                    <Svg />
                </div>
            </div>
        </section>
    )
}

export default Skills