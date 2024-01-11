"use client";
import { useState } from 'react';
import styles from "./page.module.css";

export default function Card(props) {
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
  
        <div className={styles.card}>
          <span>
            {dataFormatada}
            <svg
              onClick={handleClick}
              className={classe}
              width="28"
              height="24"
              viewBox="0 0 28 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M28 7.75C28 16.5 15.0262 23.5825 14.4737 23.875C14.3281 23.9533 14.1654 23.9943 14 23.9943C13.8346 23.9943 13.6719 23.9533 13.5262 23.875C12.9738 23.5825 0 16.5 0 7.75C0.00231592 5.69528 0.819575 3.72539 2.27248 2.27248C3.72539 0.819575 5.69528 0.00231592 7.75 0C10.3313 0 12.5912 1.11 14 2.98625C15.4088 1.11 17.6688 0 20.25 0C22.3047 0.00231592 24.2746 0.819575 25.7275 2.27248C27.1804 3.72539 27.9977 5.69528 28 7.75Z"
              />
            </svg>
          </span>
          <h3>{props.title}</h3>
          <p>
            {props.txt}
            </p>
        </div>
    
  );
}
