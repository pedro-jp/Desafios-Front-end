import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.cabecalho}><h1>Code<span>lândia</span></h1>
        <div>
        <img src="/assets/svg/Vector.svg" alt="SVG Image" width="100" height="100" />
          <input type='text' placeholder='Pesquisar no blog'></input>
        </div>
      </section>
      <section className={styles.posts}>
     </section>
    </main>
  )
}
