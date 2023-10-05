import React, { useRef, useState, Suspense, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Cylinder, useTexture } from "@react-three/drei";

const Coin = ({ onClick }) => {
  const coinRef = useRef();
  const [isAnimating, setAnimating] = useState(false);
  const [isHeads, setHeads] = useState(true);

  const headsTexture = useTexture("/assets/heads.png");
  const tailsTexture = useTexture("/assets/tails.png");

  useFrame(() => {
    if (isAnimating) {
      coinRef.current.rotation.x += 0.15; // Adjust the rotation speed as needed
      coinRef.current.rotation.y += 0; // Adjust the rotation speed as needed
    }
  });

  useEffect(() => {
    if (!isAnimating) {
      // Set the final rotation angles when the animation is completed
      coinRef.current.rotation.x = Math.PI / 2; // 90 degrees
      coinRef.current.rotation.y = 45;
    }
  }, [isAnimating]);

  const handleClick = () => {
    setAnimating(true);
    setTimeout(() => {
      setAnimating(false);
      setHeads(!isHeads);
    }, 1000);
    onClick();
  };

  return (
    <Cylinder
      ref={coinRef}
      args={[0.5, 0.5, 0.1, 32]}
      onClick={handleClick}
      scale={isAnimating ? [1.3, 1.3, 1.3] : [1.2,1.2,1.2]}
      position={isAnimating ? [0.1, 1.5, 0.5] : [0, 0, 0]}
    >
      <meshStandardMaterial map={isHeads ? headsTexture : tailsTexture} />
    </Cylinder>
  );
};

const AnimatedCoin = () => {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Suspense fallback={null}>
        <Coin
          onClick={() => {
            console.log("Coin clicked!");
          }}
        />
      </Suspense>
    </Canvas>
  );
};

export default AnimatedCoin;
