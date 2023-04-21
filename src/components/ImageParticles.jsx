import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

// A function to create a particle system from an image
function ImageParticles({ url, width, height }) {
  // A reference to the mesh object
  const mesh = useRef();

  // A state variable to store the particles data
  const [particles, setParticles] = React.useState([]);

  // A useEffect hook to load the image and create the particles
  useEffect(() => {
    // Create a new texture loader
    const loader = new THREE.TextureLoader();

    // Load the image
    loader.load(url, (texture) => {
      // Get the image data from the texture
      const imageData = texture.image.data;

      // Create an array to store the particles positions
      const positions = [];

      // Loop through the image pixels
      for (let i = 0; i < imageData.length; i += 4) {
        // Get the pixel color
        const color = new THREE.Color(
          imageData[i] / 255,
          imageData[i + 1] / 255,
          imageData[i + 2] / 255
        );

        // If the pixel is not transparent
        if (imageData[i + 3] > 0) {
          // Get the pixel coordinates
          const x = (i / 4) % width;
          const y = Math.floor(i / 4 / width);

          // Push the position and color to the array
          positions.push(
            x - width / 2,
            -y + height / 2,
            0,
            color.r,
            color.g,
            color.b
          );
        }
      }

      // Set the particles state with the positions array
      setParticles(positions);
    });
  }, [url, width, height]);

  // A useFrame hook to animate the mesh
  useFrame((state) => {
    // Rotate the mesh slightly on each frame
    mesh.current.rotation.x += 0.01;
    mesh.current.rotation.y += 0.01;
    mesh.current.rotation.z += 0.01;
  });

  // Return a points mesh with a buffer geometry and a shader material
  return (
    <points ref={mesh}>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          attachObject={["attributes", "position"]}
          count={particles.length / 6}
          array={new Float32Array(particles)}
          itemSize={3}
        />
        <bufferAttribute
          attachObject={["attributes", "color"]}
          count={particles.length / 6}
          array={new Float32Array(particles)}
          itemSize={3}
        />
      </bufferGeometry>
      <shaderMaterial
        attach="material"
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
      />
    </points>
  );
}

// The vertex shader code
const vertexShader = `
attribute vec3 color;
varying vec3 vColor;
void main() {
  vColor = color;
  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
  gl_PointSize = 2.0;
  gl_Position = projectionMatrix * mvPosition;
}
`;

// The fragment shader code
const fragmentShader = `
uniform sampler2D pointTexture;
varying vec3 vColor;
void main() {
  gl_FragColor = vec4(vColor, 1.0) * texture2D(pointTexture, gl_PointCoord);
}
`;
