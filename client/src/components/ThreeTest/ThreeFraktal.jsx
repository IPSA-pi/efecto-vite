import { useRef, useEffect } from 'react';
import * as THREE from 'three';

function ThreeJSTest() {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry();

    // Custom Shader Material
    const material = new THREE.ShaderMaterial({
      uniforms: {
        time: { type: 'f', value: 0 },
      },
      vertexShader: `
        varying vec2 vUv;

        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float time;
        varying vec2 vUv;

        void main() {
          // Pan and zoom effect
          float scale = 0.5 + sin(time) * 0.5;
          vec2 c = (vUv * 2.0 - 1.0) * scale; // Transform UV coordinates
          vec2 z = vec2(0.0);
          int iterations = 0;
          const int maxIterations = 100;

          for(int i = 0; i < maxIterations; i++) {
            z = vec2(z.x * z.x - z.y * z.y, 2.0 * z.x * z.y) + c;
            if(length(z) > 2.0) break;
            iterations++;
          }

          float ratio = float(iterations) / float(maxIterations);
          vec3 color = mix(vec3(0.0, 0.5, 0.0), vec3(1.0, 1.0, 1.0), ratio);
          gl_FragColor = vec4(color, 1.0);
        }
      `
    });

    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);

      material.uniforms.time.value += 0.01;

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      mountRef.current.removeChild(renderer.domElement);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <div ref={mountRef}></div>;
};

export default ThreeJSTest;
