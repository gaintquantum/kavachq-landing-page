"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

const CYAN = new THREE.Color("#19d8f2");
const LIGHT_CYAN = new THREE.Color("#7fefff");
// Matches the Request a Demo button (--color-brand); hover uses a lighter tint of it.
const BRAND_BLUE = new THREE.Color("#2f6fda");
const BRAND_LIGHT = new THREE.Color("#6b9bf0");
const SAFE_GREEN = new THREE.Color("#63f3b1");
const RISK_ORANGE = new THREE.Color("#ff7849");

function useVisualPreferences() {
  const [preferences, setPreferences] = useState({ mobile: false, reduced: false });

  useEffect(() => {
    const mobile = window.matchMedia("(max-width: 767px)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () =>
      setPreferences({ mobile: mobile.matches, reduced: reduced.matches });

    update();
    mobile.addEventListener("change", update);
    reduced.addEventListener("change", update);
    return () => {
      mobile.removeEventListener("change", update);
      reduced.removeEventListener("change", update);
    };
  }, []);

  return preferences;
}

function supportsWebGL() {
  try {
    const canvas = document.createElement("canvas");
    return Boolean(
      window.WebGLRenderingContext &&
        (canvas.getContext("webgl2") || canvas.getContext("webgl"))
    );
  } catch {
    return false;
  }
}

function circlePoints(radius, y = 0, axis = "y") {
  return Array.from({ length: 65 }, (_, index) => {
    const angle = (index / 64) * Math.PI * 2;
    if (axis === "y") {
      return new THREE.Vector3(Math.cos(angle) * radius, y, Math.sin(angle) * radius);
    }
    return new THREE.Vector3(Math.cos(angle) * radius, Math.sin(angle) * radius, y);
  });
}

function Ring({ points, opacity = 0.25, color = LIGHT_CYAN }) {
  const geometry = useMemo(
    () => new THREE.BufferGeometry().setFromPoints(points),
    [points]
  );

  useEffect(() => () => geometry.dispose(), [geometry]);

  return (
    <lineLoop geometry={geometry}>
      <lineBasicMaterial
        color={color}
        transparent
        opacity={opacity}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </lineLoop>
  );
}

function BlochSphere({ position, scale = 1, speed = 0.08, mouseRef, reduced }) {
  const group = useRef(null);
  const latitudeRings = useMemo(
    () => [-0.55, 0, 0.55].map((y) => circlePoints(Math.sqrt(1 - y * y), y)),
    []
  );
  const longitudeRing = useMemo(() => circlePoints(1, 0, "z"), []);

  useFrame((state, delta) => {
    if (!group.current) return;
    if (!reduced) {
      group.current.rotation.y += delta * speed;
      group.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.16) * 0.08;
    }
    group.current.position.x = position[0] + mouseRef.current.x * 0.16 * scale;
    group.current.position.y = position[1] + mouseRef.current.y * 0.1 * scale;
  });

  return (
    <group ref={group} position={position} scale={scale}>
      <mesh scale={1.12}>
        <sphereGeometry args={[1, 24, 18]} />
        <meshBasicMaterial
          color={BRAND_BLUE}
          transparent
          opacity={0.025}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
          side={THREE.BackSide}
        />
      </mesh>
      <mesh>
        <sphereGeometry args={[1, 20, 14]} />
        <meshBasicMaterial
          color={BRAND_BLUE}
          wireframe
          transparent
          opacity={0.14}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>
      {latitudeRings.map((points, index) => (
        <Ring key={`lat-${index}`} points={points} opacity={index === 1 ? 0.48 : 0.3} color={BRAND_BLUE} />
      ))}
      {[0, Math.PI / 3, (Math.PI * 2) / 3].map((rotation) => (
        <group key={rotation} rotation={[0, rotation, 0]}>
          <Ring points={longitudeRing} opacity={0.34} color={BRAND_BLUE} />
        </group>
      ))}

      <group rotation={[0, 0, -0.68]}>
        <mesh position={[0, 0.52, 0]}>
          <cylinderGeometry args={[0.018, 0.018, 1.04, 8]} />
          <meshBasicMaterial color={BRAND_LIGHT} transparent opacity={0.9} />
        </mesh>
        <mesh position={[0, 1.12, 0]}>
          <coneGeometry args={[0.085, 0.22, 12]} />
          <meshBasicMaterial color={BRAND_LIGHT} />
        </mesh>
      </group>
      <mesh>
        <sphereGeometry args={[0.055, 12, 12]} />
        <meshBasicMaterial color="#ffffff" />
      </mesh>
    </group>
  );
}

function QubitNetwork({ mobile, mouseRef, reduced }) {
  const mesh = useRef(null);
  const lines = useRef(null);
  const columns = mobile ? 4 : 6;
  const rows = mobile ? 3 : 5;
  const nodes = useMemo(
    () =>
      Array.from({ length: columns * rows }, (_, index) => ({
        x: (index % columns) * 0.62 - ((columns - 1) * 0.62) / 2,
        y: Math.floor(index / columns) * 0.56 - ((rows - 1) * 0.56) / 2,
        z: Math.sin(index * 1.7) * 0.08,
      })),
    [columns, rows]
  );
  const connections = useMemo(() => {
    const pairs = [];
    nodes.forEach((node, index) => {
      if (index % columns !== columns - 1) pairs.push([node, nodes[index + 1]]);
      if (index < nodes.length - columns && index % 2 === 0) {
        pairs.push([node, nodes[index + columns]]);
      }
    });
    return pairs;
  }, [columns, nodes]);
  const linePositions = useMemo(
    () => new Float32Array(connections.flatMap(([a, b]) => [a.x, a.y, a.z, b.x, b.y, b.z])),
    [connections]
  );
  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame((state) => {
    if (!mesh.current) return;
    const targetX = mouseRef.current.x * 1.7;
    const targetY = mouseRef.current.y * 1.25;

    nodes.forEach((node, index) => {
      const distance = Math.hypot(node.x - targetX, node.y - targetY);
      const hover = Math.max(0, 1 - distance / 0.85);
      const idle = reduced ? 0 : Math.sin(state.clock.elapsedTime * 1.1 + index) * 0.025;
      dummy.position.set(node.x, node.y, node.z + idle + hover * 0.22);
      dummy.scale.setScalar(1 + hover * 0.75);
      dummy.updateMatrix();
      mesh.current.setMatrixAt(index, dummy.matrix);
      mesh.current.setColorAt(index, hover > 0.08 ? BRAND_LIGHT : BRAND_BLUE);
    });
    mesh.current.instanceMatrix.needsUpdate = true;
    if (mesh.current.instanceColor) mesh.current.instanceColor.needsUpdate = true;
    if (lines.current) {
      lines.current.material.opacity = reduced
        ? 0.26
        : 0.24 + Math.sin(state.clock.elapsedTime * 1.4) * 0.07;
    }
  });

  return (
    <group
      position={mobile ? [0.7, -1.7, -2.4] : [5.4, -0.95, -2]}
      rotation={[-0.42, -0.22, 0.06]}
      scale={mobile ? 1 : 0.9}
    >
      <lineSegments ref={lines}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[linePositions, 3]} />
        </bufferGeometry>
        <lineBasicMaterial
          color={BRAND_BLUE}
          transparent
          opacity={0.26}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </lineSegments>
      <instancedMesh ref={mesh} args={[null, null, nodes.length]}>
        <sphereGeometry args={[0.075, 12, 12]} />
        <meshBasicMaterial
          color={BRAND_BLUE}
          toneMapped={false}
          blending={THREE.AdditiveBlending}
        />
      </instancedMesh>
    </group>
  );
}

function MigrationSignals({ mobile, reduced }) {
  const group = useRef(null);
  const count = mobile ? 4 : 7;

  useFrame((state) => {
    if (!group.current || reduced) return;
    group.current.children.forEach((signal, index) => {
      const progress = (state.clock.elapsedTime * 0.075 + index / count) % 1;
      signal.position.x = mobile ? -2.4 + progress * 2.8 : -0.2 + progress * 2.9; // desktop path stays right of the headline
      signal.position.y = 0.55 + Math.sin(progress * Math.PI * 2 + index) * 0.45;
      signal.scale.setScalar(0.65 + Math.sin(progress * Math.PI) * 0.65);
      signal.material.color.copy(BRAND_BLUE);
      signal.material.opacity = Math.min(progress * 6, (1 - progress) * 7, 0.9);
    });
  });

  return (
    <group ref={group}>
      {Array.from({ length: count }, (_, index) => (
        <mesh key={index}>
          <sphereGeometry args={[0.052, 10, 10]} />
          <meshBasicMaterial
            color={BRAND_BLUE}
            transparent
            opacity={0.65}
            depthWrite={false}
          />
        </mesh>
      ))}
    </group>
  );
}
function ShieldTrace({ mobile, reduced }) {
  const shieldRef = useRef(null);
  const coreRef = useRef(null);
  const ringsRef = useRef(null);

  const shieldPoints = useMemo(
    () =>
      [
        [0, 1.55],
        [1.15, 1.02],
        [1.15, 0.02],
        [0.88, -0.85],
        [0, -1.58],
        [-0.88, -0.85],
        [-1.15, 0.02],
        [-1.15, 1.02],
        [0, 1.55],
      ].map(
        ([x, y]) => new THREE.Vector3(x, y, 0)
      ),
    []
  );

  const shieldShape = useMemo(() => {
    const shape = new THREE.Shape();

    shape.moveTo(0, 1.55);
    shape.lineTo(1.15, 1.02);
    shape.lineTo(1.15, 0.02);
    shape.lineTo(0.88, -0.85);
    shape.lineTo(0, -1.58);
    shape.lineTo(-0.88, -0.85);
    shape.lineTo(-1.15, 0.02);
    shape.lineTo(-1.15, 1.02);
    shape.closePath();

    return shape;
  }, []);

  useFrame((state) => {
    if (reduced) return;

    const time = state.clock.elapsedTime;

    if (shieldRef.current) {
      shieldRef.current.rotation.y =
        Math.sin(time * 0.45) * 0.08;

      shieldRef.current.rotation.x =
        Math.cos(time * 0.35) * 0.025;

      shieldRef.current.position.y =
        Math.sin(time * 0.7) * 0.04;
    }

    if (coreRef.current) {
      const pulse = 1 + Math.sin(time * 2.2) * 0.1;

      coreRef.current.scale.setScalar(pulse);
    }

    if (ringsRef.current) {
      ringsRef.current.rotation.z = time * 0.12;
    }
  });

  return (
    <group
      ref={shieldRef}
      position={mobile ? [0, 0.15, -2.5] : [2.1, 0.5, -2.4]}
      scale={mobile ? 1.25 : 1.32}
    >
      {/* Soft glow behind shield */}
      <mesh position={[0, 0, -0.22]} scale={1.18}>
        <circleGeometry args={[1.45, 48]} />

        <meshBasicMaterial
          color={BRAND_BLUE}
          transparent
          opacity={0.04}
          depthWrite={false}
        />
      </mesh>

      {/* Glass shield surface */}
      <mesh position={[0, 0, -0.08]}>
        <shapeGeometry args={[shieldShape]} />

        <meshBasicMaterial
          color={BRAND_BLUE}
          transparent
          opacity={0.06}
          side={THREE.DoubleSide}
          depthWrite={false}
        />
      </mesh>

      {/* Wide blurred-looking border */}
      <group scale={1.025}>
        <Ring
          points={shieldPoints}
          opacity={0.55}
          color={BRAND_BLUE}
        />
      </group>

      {/* Main bright shield border */}
      <Ring
        points={shieldPoints}
        opacity={0.9}
        color={BRAND_BLUE}
      />

      {/* Inner shield border */}
      <group scale={0.82}>
        <Ring
          points={shieldPoints}
          opacity={0.45}
          color={BRAND_BLUE}
        />
      </group>

      {/* Rotating security rings */}
      <group
        ref={ringsRef}
        position={[0, 0.02, 0.08]}
      >
        <mesh>
          <ringGeometry
            args={[0.45, 0.47, 64]}
          />

          <meshBasicMaterial
            color={BRAND_BLUE}
            transparent
            opacity={0.3}
            side={THREE.DoubleSide}
            depthWrite={false}
          />
        </mesh>

        <mesh rotation={[0, 0, Math.PI / 2]}>
          <ringGeometry
            args={[0.62, 0.63, 64]}
          />

          <meshBasicMaterial
            color={BRAND_BLUE}
            transparent
            opacity={0.35}
            side={THREE.DoubleSide}
            depthWrite={false}
          />
        </mesh>
      </group>

      {/* Quantum-safe centre core */}
      <group
        ref={coreRef}
        position={[0, 0.02, 0.14]}
      >
        <mesh>
          <circleGeometry args={[0.3, 48]} />

          <meshBasicMaterial
            color={BRAND_BLUE}
            transparent
            opacity={0.86}
          />
        </mesh>

        <mesh position={[0, 0, 0.02]}>
          <ringGeometry
            args={[0.29, 0.32, 48]}
          />

          <meshBasicMaterial
            color={BRAND_BLUE}
            transparent
            opacity={0.95}
            side={THREE.DoubleSide}
          />
        </mesh>

        {/* Central protected node */}
        <mesh position={[0, 0, 0.05]}>
          <octahedronGeometry args={[0.11]} />

          <meshBasicMaterial
            color="#ffffff"
          />
        </mesh>
      </group>

      {/* Decorative circuit nodes */}
      {[
        [-0.73, 0.63],
        [0.73, 0.63],
        [-0.62, -0.47],
        [0.62, -0.47],
      ].map(([x, y], index) => (
        <mesh
          key={index}
          position={[x, y, 0.08]}
        >
          <circleGeometry args={[0.035, 16]} />

          <meshBasicMaterial
            color={BRAND_BLUE}
            transparent
            opacity={0.8}
          />
        </mesh>
      ))}
    </group>
  );
}

function DataParticles({ mobile, reduced }) {
  const points = useRef(null);
  const count = mobile ? 22 : 52;
  const positions = useMemo(() => {
    const values = new Float32Array(count * 3);
    for (let index = 0; index < count; index += 1) {
      values[index * 3] = (Math.random() - 0.5) * 12;
      values[index * 3 + 1] = (Math.random() - 0.5) * 6;
      values[index * 3 + 2] = -1 - Math.random() * 5;
    }
    return values;
  }, [count]);

  useFrame((state) => {
    if (points.current && !reduced) {
      points.current.rotation.y = state.clock.elapsedTime * 0.008;
      points.current.position.y = Math.sin(state.clock.elapsedTime * 0.12) * 0.08;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        color={BRAND_BLUE}
        size={0.027}
        transparent
        opacity={0.16}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

function Scene({ mouseRef, mobile, reduced }) {
  const scene = useRef(null);
  // Scene is framed by the hero card; shrink it on narrower (laptop) cards so nothing spills out.
  const { width, height } = useThree((state) => state.size);
  const fit = Math.max(0.5, Math.min(1, width / 660, height / 512));

  useFrame(() => {
    if (!scene.current) return;
    scene.current.rotation.y = mouseRef.current.x * 0.025;
    scene.current.rotation.x = -mouseRef.current.y * 0.018;
  });

  return (
    <group scale={fit}>
      <group ref={scene} position={[-3.6, 0.2, 0]}>
        <BlochSphere position={mobile ? [1.45, -0.15, -4.2] : [5.9, 2.15, -3.8]} scale={mobile ? 0.68 : 0.7} speed={-0.12} mouseRef={mouseRef} reduced={reduced} />
        <QubitNetwork mobile={mobile} mouseRef={mouseRef} reduced={reduced} />
        <MigrationSignals mobile={mobile} reduced={reduced} />
        <ShieldTrace mobile={mobile} reduced={reduced} />
        <DataParticles mobile={mobile} reduced={reduced} />
      </group>
    </group>
  );
}

function FallbackVisual() {
  return (
    <div className="absolute inset-0 text-[#7fefff66]" aria-hidden="true">
      <svg className="h-full w-full" viewBox="0 0 1200 700" preserveAspectRatio="xMidYMid slice">
        <g className="filter-[drop-shadow(0_0_8px_rgba(25,216,242,0.48))]" fill="none" stroke="currentColor" strokeWidth="1.4">
          <circle cx="1040" cy="190" r="96" />
          <ellipse cx="1040" cy="190" rx="96" ry="34" />
          <ellipse cx="1040" cy="190" rx="34" ry="96" />
          <path d="m1040 190 56-66" />
          <circle cx="165" cy="430" r="72" />
          <ellipse cx="165" cy="430" rx="72" ry="25" />
          <ellipse cx="165" cy="430" rx="25" ry="72" />
          <path d="m165 430 42-50" />
        </g>
        <g className="filter-[drop-shadow(0_0_7px_rgba(25,216,242,0.7))]" fill="currentColor">
          {Array.from({ length: 20 }, (_, index) => {
            const x = 770 + (index % 5) * 62;
            const y = 400 + Math.floor(index / 5) * 54;
            return <circle key={index} cx={x} cy={y} r="4" />;
          })}
        </g>
        <path
          className="motion-reduce:[animation-play-state:paused]"
          d="M80 390 C330 310 500 400 710 350"
          fill="none"
          stroke="rgba(255,120,73,0.46)"
          strokeWidth="1.5"
          strokeDasharray="5 12"
        />
      </svg>
    </div>
  );
}

// Renders inside the hero card (desktop only); fov is narrowed to the card's height so objects keep their size.
const STAGES = [["01", "SCAN"], ["02", "QUEUE"], ["03", "SCORE"], ["04", "PLAN"], ["05", "MIGRATE"], ["06", "COMPLY"]];
const label = "absolute rounded-full border border-blue-100 bg-white/90 px-2.5 py-1 text-[0.6rem] font-semibold tracking-widest text-slate-600 backdrop-blur-sm";
export default function QuantumBackground({ mouseRef }) {
  const { mobile, reduced } = useVisualPreferences();
  const [webgl, setWebgl] = useState(null);
  useEffect(() => setWebgl(supportsWebGL()), []);
  return (
    <div className="hero-quantum-background pointer-events-none absolute inset-0 overflow-hidden rounded-panel contain-strict" aria-hidden="true">
      <div className="absolute left-1/2 top-1/2 aspect-square w-[85%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(66,133,244,0.06),rgba(66,133,244,0.025)_30%,transparent_68%)] blur-[22px]" />
      {webgl ? (
        <Canvas className="opacity-90" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}
          camera={{ position: [0, 0, 9], fov: 28, near: 0.1, far: 50 }} dpr={[1, 1.5]} frameloop={reduced ? "demand" : "always"}
          gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}>
          <Scene mouseRef={mouseRef} mobile={mobile} reduced={reduced} />
        </Canvas>
      ) : (
        <FallbackVisual />
      )}
      <span className={`${label} right-[6%] top-[38%]`}>ML-KEM-768</span>
      <span className={`${label} right-[5%] bottom-[19%]`}>ML-DSA-65 · SLH-DSA</span>
      <div className="absolute inset-x-4 bottom-4 flex justify-center">
        <div className="flex max-w-full items-center gap-1.5 overflow-hidden rounded-full border border-blue-100 bg-white/90 px-3 py-2 backdrop-blur-sm xl:gap-2 xl:px-4">
          {STAGES.map(([number, name], index) => (
            <div key={name} className="flex shrink-0 items-center gap-1 whitespace-nowrap text-[0.5rem] tracking-[0.1em] text-slate-600 2xl:gap-1.5 2xl:text-[0.55rem] 2xl:tracking-[0.14em]">
              <span className="hidden text-blue-600 2xl:inline">{number}</span><strong className="font-semibold">{name}</strong>
              {index < STAGES.length - 1 && <i className="h-px w-2 bg-blue-200 2xl:w-5" />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
