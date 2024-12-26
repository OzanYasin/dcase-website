"use client";

import React from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";
// import dynamic from "next/dynamic";
import Image from "next/image";
import { FlipWords } from "@/components/ui/flip-words";

// const HeroModel = dynamic(() => import("./hero-model"), { ssr: false });

const HeroSection: React.FC = () => {
  const words = ["modern", "efficient", "reliable", "streamlined", "compliant"];

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="container mx-auto flex h-full items-center justify-between px-4">
        <div className="z-10 w-1/2">
          <div className="flex flex-col space-y-20 px-4">
            <div className="text-6xl font-bold leading-tight tracking-wide text-black subpixel-antialiased">
              Reengineered for the
              <FlipWords words={words} /> <br />
              IT Ecosystem
              <div className="mt-8 text-lg font-normal">
                Transform your IT operations with
                <span className="font-bold text-dcase"> DCase</span>, an
                innovative platform that redefines service management through
                intelligent workflows, unified integrations, and unmatched
                scalability.
                <div className="mt-8">
                  Simplify processes and deliver results faster than ever.
                </div>
              </div>
            </div>
            <div>
              <button className="duration-400 transform rounded-lg bg-dcase px-6 py-2 font-bold text-white transition hover:-translate-y-1">
                Request a Demo
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
            src="/placeholder.svg"
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
