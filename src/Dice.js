import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Box, RoundedBox } from "@react-three/drei";

const RoundedCube = ({ onClick }) => {
  const cubeRef = useRef();
  const [isAnimating, setAnimating] = useState(false);

  // Rotation animation
  useFrame(() => {
    if (isAnimating) {
      cubeRef.current.rotation.x += 0.1;
      cubeRef.current.rotation.y += 0.1;
    }
  });

  const handleClick = () => {
    // Trigger the jump, spin, and fall animations
    setAnimating(true);
    setTimeout(() => {
      setAnimating(false);
    }, 1000); // Adjust the duration of the animations
    onClick();
  };

  return (
    <RoundedBox
      ref={cubeRef}
      radius={0.1}
      args={[1, 1, 1, 16, 16, 16]} // Set the last three parameters for rounded corners
      onClick={handleClick}
      scale={isAnimating ? [1,1,1] : [0.8,0.8,0.8]}
      position={isAnimating ? [0, 1, 0] : [0, 0, 0]}
    >
      <meshStandardMaterial color="white" />
    </RoundedBox>
  );
};

const AnimatedRoundedCube = () => {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <RoundedCube
        onClick={() => {
          console.log("Cube clicked!");
        }}
      />
    </Canvas>
  );
};

export default AnimatedRoundedCube;
