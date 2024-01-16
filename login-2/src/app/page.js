import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
    <form className={styles.form}>
      <h1>Login</h1>

      <div>
        <label htmlFor="txt">E-mail</label>
        <input type="text" name="txt" id="txt" placeholder='exemplo@gmail.com' />
        <label htmlFor="pass">Senha</label>
        <input type="password" name="pass" id="pass" placeholder='Exemplo123' />

        <input type="submit" value="Entrar" />
      </div>

      <a href="#">Esqueci a senha</a>
    </form>
    </main>
  )
}
