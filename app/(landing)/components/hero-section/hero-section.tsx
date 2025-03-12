"use client";

import React from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";
// import dynamic from "next/dynamic";
import Image from "next/image";
import { FlipWords } from "@/components/ui/flip-words";
import Link from "next/link";

// const HeroModel = dynamic(() => import("./hero-model"), { ssr: false });

const HeroSection: React.FC = () => {
  const words = ["Cognitive", "Agile", "Unified", "Reliable", "Scalable"];

  return (
    <section className="relative w-full overflow-hidden pb-16 pt-32">
      <div className="container mx-auto flex h-full items-center justify-between px-4">
        <div className="z-10 w-1/2">
          <div className="flex flex-col space-y-10 px-4">
            <div className="text-6xl font-bold leading-tight tracking-wide text-black subpixel-antialiased">
              Reengineered for the
              <FlipWords className="text-dcase" words={words} /> <br />
              IT Ecosystem
              <div className="mt-8 text-lg font-extralight leading-loose text-muted-foreground">
                Empower your IT ecosystem with DCase where intelligent
                workflows, seamless automation, and adaptive integrations drive
                operational excellence.
                <div className="mt-5">
                  Revolutionize IT service management with an intuitive platform
                  that optimizes efficiency, enhances collaboration, and ensures
                  business continuity at scale.
                </div>
              </div>
            </div>
            <div>
              <button className="duration-400 transform rounded-lg bg-dcase px-6 py-2 font-bold text-white transition hover:-translate-y-1">
                <Link href="/request-demo">See DCase in Action</Link>
              </button>
            </div>
          </div>
        </div>
        <div className="relative w-1/2">
          <Image
            alt="ITIL Pro Dashboard"
            loading="lazy"
            width="1000"
            height="1000"
            className="aspect-video overflow-hidden rounded-xl bg-transparent object-cover object-center"
            src="/lp-01.png"
          />
          {/* <Canvas
            camera={{ position: [0, 0, 500], fov: 60 }}
            style={{ width: "100%", height: "100%" }}
          >
            <ambientLight intensity={0.5} />
            <pointLight position={[100, 100, 100]} intensity={0.8} />
            <pointLight position={[-100, -100, -100]} intensity={0.5} />
            <Suspense fallback={null}>
              <HeroModel />
            </Suspense>
            <OrbitControls enableZoom={false} />
          </Canvas> */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
