import styles from "./About.module.css";

function About() {
    return (
        <div id="about" className={styles.about}>
            <div>
                <h2>
                    sobreMim<span>( )</span>
                </h2>

                <br />

                <p>
                E aí, galera! Sou o João Pedro, entrei no mundo da programação lá em 2019 com o Portugol e, desde então, não parei mais. Em 2020, dei um salto e entrei no curso de Análise e Desenvolvimento de Sistemas na Etec de Taboão da Serra, saindo de lá em 2022 com a bagagem cheia de conhecimento. <br /> <br />
                </p>
                <p>
                No ano passado (2023), me joguei de cabeça em React, MySQL, JavaScript e CSS,  foram muitos aprendizados. Agora tô começando o curso de Engenharia da Computação, prontíssimo pra mais desafios e conhecimentos.
                </p> <br />
                <p>
                Abraços, <br />
João Pedro
                </p>
            </div>

            <div>
                <div className={styles.fullstack}>
                    <div>
                        <h2>Fullstack Developer</h2><span><h2>{"</>"}</h2></span>
                    </div>
                    <a href="https://github.com/pedro-jp">Projetos</a>
                </div>
                <div className={styles.fullstack}>
                    <div>
                        <h2>Freelancer</h2><span><h2>{"{ }"}</h2></span>
                    </div>
                    <a href="https://linkedin.com/in/pedro-jp">Cotrate-me</a>
                </div>
            </div>
        </div>
    );
}

export default About;