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

        <label for="lembre">lembre</label>
        <input type="checkbox" name="lembre" id="lembre" />
      </form>
    </main>
  );
}
