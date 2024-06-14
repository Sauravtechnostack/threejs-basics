import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { degreeToRadian } from "../../utils/degreeToRadians";
import { useThree } from "@react-three/fiber";
import { Html } from "@react-three/drei";

function AnimationGsap() {
  // To access the mesh dom element we need to use ref
  const animationSphereRef = useRef(null);
  const { gl } = useThree();
  const timelineRef = useRef(null); // To store the timeline ref so we can use the play pasue buttons globally and after every render

  useEffect(() => {
    // Basic animation
    // gsap.to(animationSphereRef.current.position, {
    //   duration: 10,
    //   x: 20,
    //   repeat: 1,
    //   ease: "bounce",
    // });

    const t1 = gsap.timeline();
    t1.to(animationSphereRef.current.position, {
      duration: 10,
      x: 20,
      repeat: 1,
      ease: "bounce",
      yoyo: true,
    }).to(animationSphereRef.current.position, {
      duration: 10,
      x: -20,
      repeat: 1,
      ease: "bounce",
      yoyo: true,
    });

    timelineRef.current = t1;
  }, []);

  // Function to pause the animation from timeleine
  const pauseAnimation = () => {
    console.log("paused");
    timelineRef.current.pause();
  };
  // Function to play the animation from timeleine
  const playAnimation = () => {
    timelineRef.current.play();
  };

  return (
    <>
      {/* Ball */}
      <mesh position={[1, 1, 1]} ref={animationSphereRef}>
        <sphereGeometry args={[1, 50, 50]} />
        <meshStandardMaterial color={"#eb4034"} />
      </mesh>

      {/* Plane */}
      <mesh
        rotation={[degreeToRadian(90), 0, 0]}
        scale={[20, 20, 20]}
        position={[0, 0, 0]}
      >
        <planeGeometry args={[2, 2, 10, 10]} />
        <meshStandardMaterial side={2} wireframe={false} />
      </mesh>

      <ambientLight />

      {/* Buttons to control the animations. */}
      <Html position={[0, 0, 0]} center>
        {/* Container div with absolute positioning */}
        <div
          style={{
            position: "fixed",
            top: "20px",
            right: "20px",
            zIndex: 999,
          }}
        >
          {/* Play button */}
          <button onClick={playAnimation} style={{ marginRight: "10px" }}>
            Play
          </button>
          {/* Pause button */}
          <button onClick={pauseAnimation}>Pause</button>
        </div>
      </Html>
    </>
  );
}

export default AnimationGsap;
