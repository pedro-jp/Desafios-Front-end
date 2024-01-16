import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <img src="/assets/svg.png" alt="Logo"></img>
      <form>
        <span>Bem-vindo de volta</span>
        <h1>Faca login na sua conta</h1>

        <label for="email">E-mail</label>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="exemplo@gmail.com"
        />
        <label for="senha">Senha</label>
        <input
          type="password"
          name="senha"
          id="senha"
          placeholder="Exemplo1928"
        />

        <div className={styles.esqueceu}>
          <div>
            <input type="checkbox" name="lembre" id="lembre" />
            <label for="lembre">Lembre de mim</label>
          </div>
          <a href="#">Esqueceu sua senha?</a>
        </div>

        <div className={styles.conta}>
          <input type="button" name="lembre" id="entrar" value={"Entrar"} />

          <input
            type="button"
            name="google"
            id="google"
            value={"Ou faca login com o Google"}
          />
        </div>

        <div className={styles.naoTemConta}>
          <p>Não tem uma conta? <a href='#'>Cadastre-se</a></p>
        </div>
      </form>
    </main>
  );
}
