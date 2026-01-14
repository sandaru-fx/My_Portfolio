"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { Mesh } from "three";
import { Environment, Float } from "@react-three/drei";

function RotatingObject() {
    const meshRef = useRef<Mesh>(null);

    useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.x += delta * 0.2;
            meshRef.current.rotation.y += delta * 0.3;
        }
    });

    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
            <mesh ref={meshRef}>
                <icosahedronGeometry args={[1.5, 0]} />
                <meshStandardMaterial color="#6366f1" wireframe />
            </mesh>
        </Float>
    );
}

export function HeroScene() {
    return (
        <div className="absolute inset-0 -z-10 h-screen w-full">
            <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <RotatingObject />
                <Environment preset="city" />
            </Canvas>
        </div>
    );
}
