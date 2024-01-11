"use client";
import { useState } from 'react';
import styles from "./page.module.css";
import Card from "./Card";

export default function Home() {
  function formatarData(data) {
    const meses = [
      "jan",
      "fev",
      "mar",
      "abr",
      "mai",
      "jun",
      "jul",
      "ago",
      "set",
      "out",
      "nov",
      "dez",
    ];

    const dia = data.getDate();
    const mes = meses[data.getMonth()];
    const ano = data.getFullYear();

    return `${dia} de ${mes}, ${ano}`;
  }

  // Exemplo de uso:
  const dataAtual = new Date();
  const dataFormatada = formatarData(dataAtual);

  const [classe, setClasse] = useState(styles.notClicked);

  const handleClick = () => {
    // Atualiza o estado com a nova classe
    setClasse(styles.clicked);
  }

  return (
    <main className={styles.main}>
      <section className={styles.cabecalho}>
        <h1>
          Code<span>lândia</span>
        </h1>
        <div>
          <img
            src="/assets/svg/Vector.svg"
            alt="SVG Image"
            width="100"
            height="100"
          />
          <input type="text" placeholder="Pesquisar no blog"></input>
        </div>
      </section>
      <section className={styles.posts}>
      <Card title="O que é linguagem de programação? Conheça as principais" txt="Uma das mais populares vertentes da tecnologia da informação, a área de programação segue tendo muita demanda de trabalho justamente pela velocidade com que dispositivos tecnológicos vêm avançando." />

      <Card title="GitHub agora permite fazer login sem precisar de senha" txt="O GitHub anunciou nesta quarta-feira (12) o acesso a partir das passkeys, método de autenticação sem senhas. A novidade está disponível em uma versão beta pública e pode substituir a autenticação em dois fatores." />

      <Card title="Por que os hiperlinks são azuis em sua maioria?" txt="Quem navega na internet, certamente já percebeu que ela conta com diversos recursos para tornar a nossa vida mais fácil. Entre essas opções podemos mencionar os hiperlinks – uma palavra ou termo clicável que direciona o leitor." />
        </section>
    </main>
  );
}
