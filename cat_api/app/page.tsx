'use client'
import { useEffect, useState } from "react";

import Image from "next/image";
import axios from "axios";
import styles from "./page.module.css";

const apiUrl = "https://api.thecatapi.com/v1/breeds";

export default function Home() {
  const [catData, setCatData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(apiUrl);
        setCatData(response.data);
      } catch (error) {
        console.error("Error fetching cat data:", error.message);
      }
    }

    fetchData();
  }, []);

  return (
    <main>
      <ul>
        {catData.map((cat) => (
          <div key={cat.id}>
            <li>{cat.name}</li>
            <Image src={cat.url}  alt={cat.name} width={100} height={100} />
          </div>
        ))}
      </ul>
    </main>
  );
}
