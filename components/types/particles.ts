export interface Particle {
  position: [number, number, number];
  color: string;
}

export interface ParticleSystemProps {
  imageUrl: string;
  particleSize?: number;
  particleCount?: number;
  color?: string;
}
