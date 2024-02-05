import styles from "./projetos.module.css";

const projetos = [
  {
    nome: "Helo Realtor",
    url: "https://site-imobiliario-frontend.vercel.app/",
  },
  {
    nome: "Jordan Shoes",
    url: "https://desafios-front-end-jordan-shoes.vercel.app/",
  },
  { nome: "Mini Blog", url: "https://desafios-front-end-blog.vercel.app/" },
  {
    nome: "Helo Realtor",
    url: "https://site-imobiliario-frontend.vercel.app/",
  },
  {
    nome: "Jordan Shoes",
    url: "https://desafios-front-end-jordan-shoes.vercel.app/",
  },
  { nome: "Mini Blog", url: "https://desafios-front-end-blog.vercel.app/" },
];

const Projetos = () => {
  return (
    <section id="projetos" className={styles.projetos}>
      {projetos.map((projeto, index) => (
        <div className={styles.siteContainer} key={index}>
          <h2>
            {projeto.nome}
          </h2>
            <div className={styles.sites}>
              <svg
                className={styles.svgdiv}
                fill="#111111"
                version="1.1"
                id="Capa_1"
                viewBox="0 0 96.82 96.82"
              >
                <g>
                  <path
                    d="M71.74,0H25.08c-3.216,0-5.833,2.616-5.833,5.833v85.155c0,3.215,2.616,5.832,5.833,5.832h46.66
            c3.216,0,5.833-2.615,5.833-5.832V5.832C77.573,2.616,74.956,0,71.74,0z M45.364,3.936h9.04c0.403,0,0.729,0.327,0.729,0.729
            c0,0.403-0.326,0.729-0.729,0.729h-9.04c-0.402,0-0.729-0.326-0.729-0.729C44.635,4.263,44.962,3.936,45.364,3.936z M42.561,3.673
            c0.483,0,0.875,0.392,0.875,0.875s-0.392,0.875-0.875,0.875s-0.875-0.392-0.875-0.875S42.078,3.673,42.561,3.673z M48.41,93.54
            c-0.967,0-1.75-0.783-1.75-1.75c0-0.968,0.783-1.75,1.75-1.75c0.966,0,1.75,0.782,1.75,1.75C50.16,92.757,49.376,93.54,48.41,93.54
            z M72.907,88.217H23.913V8.603h48.994V88.217z"
                  />
                </g>
              </svg>
              <iframe
                className={styles.frame}
                src={projeto.url}
                title={projeto.nome}
              ></iframe>
              <a href={projeto.url} target="_blank">
                <span></span>
              </a>
            </div>
          
        </div>
      ))}
    </section>
  );
};

export default Projetos;
