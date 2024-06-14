import React, { useEffect, useRef } from "react";
import { useLoader, useThree } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Vector3 } from "three";
import gsap from "gsap";

function SpaceshipModel() {
  const gltf = useLoader(GLTFLoader, "spaceship/scene.gltf");
  const spaceShipRef = useRef(null);
  const { camera } = useThree();
  const direction = new Vector3();

  useEffect(() => {
    // Get camera's direction vector in world coordinates
    document.addEventListener("mousemove", (e) => {
      camera.getWorldDirection(direction);
    });

    document.addEventListener("keyup", (e) => {
      if (e.key === "ArrowUp" || e.key === "w") {
        // spaceShipRef.current.rotation.x = 0;
        // gsap.to(spaceShipRef.current.rotation.x, {
        //   rotateZ: 0,
        //   duration: 0.1,
        // });
      }
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowUp" || e.key === "w") {
        console.log(spaceShipRef.current.rotation.y);
        spaceShipRef.current.rotation.y = -10;
        // gsap.to(spaceShipRef.current.rotation.x, {
        //   rotateZ: -10,
        //   duration: 2.5,
        // });
        spaceShipRef.current.position.z += spaceShipRef.current.scale.z;
      }
      if (e.key === "ArrowDown" || e.key === "s") {
        spaceShipRef.current.position.z -= spaceShipRef.current.scale.z;
      }
      if (e.key === "ArrowRight" || e.key === "d") {
        spaceShipRef.current.position.x -= spaceShipRef.current.scale.x;
      }
      if (e.key === "ArrowLeft" || e.key === "a") {
        spaceShipRef.current.position.x += spaceShipRef.current.scale.x;
      }
    });
  }, []);

  if (!gltf) {
    return null; // Render nothing while loading
  }

  return (
    <>
      <mesh position={[0, 5, 0]} scale={0.2} ref={spaceShipRef}>
        <primitive object={gltf.scene} />
      </mesh>
    </>
  );
}

export default SpaceshipModel;
