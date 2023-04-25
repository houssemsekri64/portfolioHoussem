import * as React from "react";
import ParticleImage, { Vector, forces } from "react-particle-image";

const motionForce = (x, y) => {
  return forces.disturbance(x, y, 5);
};

export default function ImageParticles({ url, Logocolor }) {
  return (
    <ParticleImage
      src={url}
      scale={0.5}
      entropy={20}
      maxParticles={2000}
      particleOptions={{
        filter: ({ x, y, image }) => {
          // Get pixel
          const pixel = image.get(x, y);
          // Make a particle for this pixel if blue > 50 (range 0-255)
          return pixel.b > 50;
        },
        color: ({ x, y, image }) => Logocolor,
        radius: () => Math.random() * 1.5 + 0.5,
        mass: () => 40,
        friction: () => 0.15,
        initialPosition: ({ canvasDimensions }) => {
          return new Vector(
            canvasDimensions.width / 2,
            canvasDimensions.height / 2
          );
        },
      }}
      mouseMoveForce={motionForce}
      touchMoveForce={motionForce}
      backgroundColor="transparent"
    />
  );
}
