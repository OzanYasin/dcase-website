import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function ThreeScene() {
  const pointsRef = useRef<THREE.Points>(null);

  const particlesCount = 5000;
  const particleSize = 0.02;

  const particles = useMemo(() => {
    const temp = new Float32Array(particlesCount * 3);
    const shape = new THREE.Shape();

    // Define the "D" shape
    shape.moveTo(0, 0);
    shape.lineTo(0, 2.5);
    shape.bezierCurveTo(1.8, 2.5, 1.8, 0, 0, 0);

    for (let i = 0; i < particlesCount; i++) {
      const t = Math.random();
      const [x, y] = shape.getPoint(t).toArray();
      const angle = Math.random() * Math.PI * 2;
      const radius = Math.random() * 0.2;

      temp[i * 3] = x + Math.cos(angle) * radius;
      temp[i * 3 + 1] = y + Math.sin(angle) * radius;
      temp[i * 3 + 2] = (Math.random() - 0.5) * 0.1;
    }
    return temp;
  }, []);

  // Store initial positions for animation reference
  const initialPositions = useMemo(
    () => new Float32Array(particles),
    [particles]
  );

  useFrame((state) => {
    if (pointsRef.current) {
      const positions = pointsRef.current.geometry.attributes.position
        .array as Float32Array;
      const time = state.clock.getElapsedTime();

      for (let i = 0; i < positions.length; i += 3) {
        positions[i] = initialPositions[i] + Math.sin(time + i * 0.1) * 0.02;
        positions[i + 1] =
          initialPositions[i + 1] + Math.cos(time + i * 0.1) * 0.02;
        positions[i + 2] =
          initialPositions[i + 2] + Math.sin(time + i * 0.1) * 0.02;
      }
      pointsRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.length / 3}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={particleSize}
        sizeAttenuation={true}
        color={new THREE.Color("hsl(160.1, 84.1%, 39.4%)")}
        transparent
        opacity={0.8}
      />
    </points>
  );
}
