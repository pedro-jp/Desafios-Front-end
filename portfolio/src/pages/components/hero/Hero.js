import styles from "./Hero.module.css"

const Hero = () => {
    return(
        <section className={styles.hero}>
            Olá, mundo!
            <img height={"20 px"} src="./assets/icons/typescript-original 2.svg" alt="Typescript Icon"></img>
        </section>
    )
}

export default Hero;