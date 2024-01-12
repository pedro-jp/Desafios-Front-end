// components/JordanComponent.js
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import styles from "./Jordan.module.css"

const JordanComponent = (props) => {
  const canvasRef = useRef();

  useEffect(() => {
    // Criar cena
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xF3F7FF); // Definir o fundo como branco

    // Criar câmera
    const camera = new THREE.PerspectiveCamera(75, 500 / 300, 0.1, 1000);
    camera.position.set(0, 1.7, 2);

    // Criar renderizador
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
    renderer.setSize(350, 200);

    // Adicionar modelo 3D fictício (substitua o caminho pelo seu modelo)
    const loader = new GLTFLoader();
    let model;

    loader.load(`/${props.tenis}/scene.gltf`, (gltf) => {
      model = gltf.scene;
      scene.add(model);
    });

    const ambientLight = new THREE.AmbientLight(0xffffff); // Luz ambiente
    scene.add(ambientLight);

    // Adicionar controles de órbita
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.screenSpacePanning = false;
    controls.maxPolarAngle = Math.PI / 2;

    // Função de animação
    const animate = () => {
      requestAnimationFrame(animate);

      // Atualizar controles de órbita
      controls.update();

      // Adicionar rotação automática ao modelo (ajuste conforme necessário)
      if (model) {
        model.rotation.y += 0.005;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Limpar recursos quando o componente for desmontado
    return () => {
      controls.dispose(); // Limpar controles de órbita
    };
  }, []);

  const valor = Number(props.preco)
  
  const preco = () => {
return valor.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
}

  return (
    <div className={styles.card}>
      <canvas style={{ width: '250px', aspectRatio: "16/9" }} ref={canvasRef} />
      <p id={styles.descricao}>{props.descricao}</p>
      <p id={styles.nome}>{props.nome}</p>
      <p id={styles.preco}>
      {preco()}
    </p>
    </div>
  )
 };

export default JordanComponent;
