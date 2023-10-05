import React, { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

const Pokeball = () => {
  const pokeball = useGLTF("./models/pokeball/scene.gltf");
  const pokeballRef = useRef(); // Create a reference to the pokeball object
  const [isAnimating, setAnimating] = useState(false); // Keep track of the animation state

  // Shaking animation
  useFrame(() => {
    if (isAnimating) {
      // Randomly move the pokeball along the x and z axes
      pokeballRef.current.position.x += Math.random() * 0.1 - 0.05;
      pokeballRef.current.position.z += Math.random() * 0.1 - 0.05;
    }
  });

  const handleClick = () => {
    // Trigger the shaking animation
    setAnimating(true);
    setTimeout(() => {
      setAnimating(false);
    }, 1000); // Adjust the duration of the animation
  };

  return (
    <primitive
      object={pokeball.scene}
      scale={0.2}
      ref={pokeballRef} // Assign the reference to the object
      onClick={handleClick} // Add an onClick handler
    />
  );
};

const PokeballCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      {/* Ambient light */}
      <ambientLight intensity={0.5} />

      {/* Directional light */}
      <directionalLight position={[5, 5, 5]} intensity={1} castShadow />

      <Suspense fallback={null}>
        <OrbitControls
          autoRotate
          enableRotate={true}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Pokeball />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default PokeballCanvas;
