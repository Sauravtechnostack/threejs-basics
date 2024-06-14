/**
 * Lights and shadows.
 * Soo basically in threejs we need to do three things. 1. Create a light source. 2. Tell the object that it can cast shadow. 3. Create a surface that can accept the shadow.
 */

import React from "react";

function Light() {
  return (
    <>
      <mesh position={[2, 0.5, 0]} castShadow>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial metalness={0.2} roughness={0.1} />
      </mesh>

      {/* Light type 1: Ambient Light is a light that illuminates all the object in the scene. This light cannot cast a shadow as it does not have a direction. */}
      {/* Light type 2: Directional light is a light that is simulated as if it is coming from far away and it casts shadow. */}
      {/* Light type 3: hemisphere light, sometimes what we need is an object having 2 different light source, eg, a bird flying, so the upper part of the bird must be different and the lower portion of flying bird must be different thus we will use this. Also this light does not cast shadow. */}
      {/* Light type 4: This light decays with distance like the light from the candle. */}
      {/* Light type 5: Spot light */}

      <directionalLight args={["#FFFFFF", 3]} position={[2, 2, 0]} castShadow />
      <directionalLight args={["#FFFFFF", 3]} position={[0, 0, 0]} castShadow />
    </>
  );
}

export default Light;
