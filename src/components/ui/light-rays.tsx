import React from "react";

interface LightRaysProps {
  raysOrigin?: "top-center" | "top-left" | "top-right" | "center";
  raysColor?: string;
  raysSpeed?: number;
  lightSpread?: number;
  rayLength?: number;
  pulsating?: boolean;
  fadeDistance?: number;
  saturation?: number;
  followMouse?: boolean;
  mouseInfluence?: number;
  noiseAmount?: number;
  distortion?: number;
  className?: string;
}

const LightRays: React.FC<LightRaysProps> = () => {
  // Componente desactivado - no renderiza efectos de luces
  return null;
};

export default LightRays;
