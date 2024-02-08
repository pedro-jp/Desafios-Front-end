import styles from "./About.module.css";

function About() {
    return (
        <div id="about" className={styles.about}>
            <div>
                <h2>
                    sobreMim<span>( )</span>
                </h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.Suspendisse placerat cursus urna a consectetur. Vestibulum sit amet ex vehicula, efficitur odio non, mollis orci. Mauris pretium volutpat odio, id egestas quam porta eu. Mauris pharetra neque ac eleifend volutpat. Proin id imperdiet neque. Mauris viverra pulvinar orci at sodales. Vivamus leo augue, convallis nec lorem sit amet, porta molestie arcu. Etiam feugiat nibh eu lacinia pretium. Cras vitae tincidunt dolor, id efficitur lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc tincidunt turpis vitae risus imperdiet condimentum.
                </p>
            </div>

            <div>
                <div>
                    <div>
                        <h2>Fullstack Developer</h2><span><h2>{"</>"}</h2></span>
                    </div>
                    <a href="https://github.com/pedro-jp">Projetos</a>
                </div>
                <div>
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