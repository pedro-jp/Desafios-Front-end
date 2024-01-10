import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.cabecalho}><h1>Code<span>lândia</span></h1>
        <div>
        <img src="./assets/svg/Vetor.png" alt="SVG Image" width="100" height="100" />
          <input typeof='text' placeholder='Pesquisar no blog'></input>
        </div>
      </section>
     
    </main>
  )
}
