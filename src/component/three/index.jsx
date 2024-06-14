import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React from "react";

// Main component to render the 3D scene
export default function Three() {
  /**
   * The useFrame will run this callback function each time a frame will be rendered, depending on your frame rate it can range anywhere from 24-30 fps.
   * This is same as requestAnimationFrame of the browser.
   * @param {state} - This state object gives us access to various things including camera, scene, raycaster etc.
   */
  useFrame((state) => {
    // The mouse variable contains a 2D vector representing the position of the mouse.
    // consoe.log(state.mouse);
    // These vectors are normalized i.e. regardless of the screen size we make an axis with the ends of x axis being -1 0 and 1 and same for Y-axis.Thus these mouse vector has values between -1 and 1.
    // Now in order to relate my mouse movement with the camera what i will need is first to persisit the
  });

  return (
    <>
      {/* Be careful about the polar angles and Azimuthal angles when dealing with Perspective camera and orbit controls together. */}
      {/* Manual perspective camera */}
      <PerspectiveCamera makeDefault position={[0, 0.5, 5]} />
      <OrbitControls />
      {/* Now we can move the camera by holding the click.But what if we need to move the camera as the mouse moves ?? well for this the fiber gives us the hook called useFrame. */}

      {/* Ball */}
      <mesh position={[-1, 1, 0]} castShadow>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial wireframe={false} />
      </mesh>

      {/* Plane */}
      <mesh position={[0, 0, 0]} rotation={[-1.5708, 0, 0]} receiveShadow>
        <planeGeometry args={[25, 25, 5, 5]} />
        <meshStandardMaterial color="#3b3b6b" side={2} />
      </mesh>

      {/* Adding an ambient light */}
      <ambientLight color="#ffffff" intensity={15} />

      {/* <Environment background>
        <mesh>
          <sphereGeometry args={[9, 70, 70]} />
          <meshNormalMaterial />
        </mesh>
      </Environment> */}
    </>
  );
}
