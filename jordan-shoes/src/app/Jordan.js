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

    // Criar câmera
    const camera = new THREE.PerspectiveCamera(75, 200 / 300, 0.1, 1000);
    camera.position.z = 5;

    // Criar renderizador
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
    renderer.setSize(384, 200);

    // Adicionar modelo 3D fictício (substitua o caminho pelo seu modelo)
    const loader = new GLTFLoader();
    loader.load('/air/scene.gltf', (gltf) => {
      scene.add(gltf.scene);
    });

    const ambientLight = new THREE.AmbientLight(0xfffafa); // Luz ambiente

    scene.add(ambientLight);
    scene.background = new THREE.Color(0xF3F7FF); // Definir o fundo como branco

    // Adicionar controles de órbita
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
    controls.dampingFactor = 0.25;
    controls.screenSpacePanning = false;
    controls.maxPolarAngle = Math.PI / 2;

    // Função de animação
    const animate = () => {
      requestAnimationFrame(animate);

      // Atualizar controles de órbita
      controls.update();

      renderer.render(scene, camera);
    };

    animate();

    // Limpar recursos quando o componente for desmontado
    return () => {
      controls.dispose(); // Limpar controles de órbita
    };
  }, []);

  return (
    <div className={styles.card}>
      <canvas style={{ width: '38.5rem', height: '20rem' }} ref={canvasRef} />
      <p id={styles.descricao}>{props.descricao}</p>
      <p id={styles.nome}>{props.nome}</p>
      <p id={styles.preco}>{props.preco}</p>
    </div>
     

  )
 };

export default JordanComponent;
