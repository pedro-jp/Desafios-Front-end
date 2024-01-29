import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Projetos from "./components/projetos/Projetos";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>João Pedro | Dev</title>
        <meta
          name="description"
          content="Portfólio pessoal do deselvolvedor João Pedro"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pedro-dev-port.vercel.app/" />
        <meta property="og:title" content="Pedro | Dev" />
        <meta
          property="og:description"
          content="Portfólio pessoal do desenvolvedor João Pedro"
        />
        <meta
          property="og:image"
          content="https://pedro-dev-port.vercel.app/assets/perfil.jpg"
        />

        <meta
          property="twitter:url"
          content="https://pedro-dev-port.vercel.app/"
        />
        <meta property="twitter:title" content="Pedro | Dev" />
        <meta
          property="twitter:description"
          content="Portfólio pessoal do deselvolvedor João Pedro"
        />
        <meta
          property="twitter:image"
          content="https://pedro-dev-port.vercel.app/assets/perfil.jpg"
        />
      </Head>
      <main className={styles.main}>
        <Projetos />
      </main>
    </>
  );
}
