import { Canvas, useFrame } from "@react-three/fiber";
import type React from "react";
import { useMemo, useRef } from "react";
import { BoxGeometry, CanvasTexture, type Mesh as MeshType } from "three";

// Constants
const TEXTURE_SIZE = 1024;
const TEXTURE_BG_COLOR = "#0b57d0";
const TEXTURE_FONT = 'bold 24px "Courier New", monospace';
const TEXTURE_LINES_COUNT = 40;
const TEXTURE_LINE_HEIGHT = 24;
const TEXTURE_START_X = 40;
const TEXTURE_START_Y = 40;
const TEXTURE_INDENT = 40;
const TEXTURE_INDENT_THRESHOLD_1 = 0.7;
const TEXTURE_INDENT_THRESHOLD_2 = 0.8;
const TEXTURE_TOKEN_MIN = 3;
const TEXTURE_TOKEN_RANGE = 5;
const TEXTURE_KEYWORD_THRESHOLD = 0.7;
const TEXTURE_TOKEN_SPACING = 15;
const RADIX = 36;
const SUBSTRING_START = 7;

const CUBE_SIZE = 3.5;
const CUBE_ROTATION_X_SPEED = 0.1;
const CUBE_ROTATION_Y_SPEED = 0.15;
const CUBE_OPACITY = 0.9;
const CUBE_ROUGHNESS = 0.2;
const CUBE_METALNESS = 0.1;
const CUBE_EMISSIVE = "#0b57d0";
const CUBE_EMISSIVE_INTENSITY = 0.2;
const WIREFRAME_COLOR = "#a8c7fa";
const WIREFRAME_OPACITY = 0.3;

const CAMERA_FOV = 45;
const CAMERA_Z = 8;
const AMBIENT_LIGHT_INTENSITY = 0.5;
const POINT_LIGHT_1_POS_X = 10;
const POINT_LIGHT_1_POS_Y = 10;
const POINT_LIGHT_1_POS_Z = 10;
const POINT_LIGHT_1_INTENSITY = 1;
const POINT_LIGHT_1_COLOR = "#a8c7fa";
const POINT_LIGHT_2_POS_X = -10;
const POINT_LIGHT_2_POS_Y = -10;
const POINT_LIGHT_2_POS_Z = -10;
const POINT_LIGHT_2_INTENSITY = 0.5;
const POINT_LIGHT_2_COLOR = "#0b57d0";

const COLORS = ["#a8c7fa", "#6dd58c", "#ffb74d", "#f28b82", "#c4c7c5"];
const KEYWORDS = [
  "function",
  "const",
  "let",
  "return",
  "if",
  "else",
  "import",
  "from",
  "async",
  "await",
];

// Function to generate a code-like texture
const createCodeTexture = () => {
  const canvas = document.createElement("canvas");
  canvas.width = TEXTURE_SIZE;
  canvas.height = TEXTURE_SIZE;
  const ctx = canvas.getContext("2d");
  if (!ctx) {
    return new CanvasTexture(canvas);
  }

  // Background
  ctx.fillStyle = TEXTURE_BG_COLOR;
  ctx.fillRect(0, 0, TEXTURE_SIZE, TEXTURE_SIZE);

  // Text settings
  ctx.font = TEXTURE_FONT;
  ctx.textAlign = "left";
  ctx.textBaseline = "top";

  // Draw random code lines
  for (let i = 0; i < TEXTURE_LINES_COUNT; i++) {
    const y = TEXTURE_START_Y + i * TEXTURE_LINE_HEIGHT;
    let x = TEXTURE_START_X;

    // Indentation
    if (Math.random() > TEXTURE_INDENT_THRESHOLD_1) {
      x += TEXTURE_INDENT;
    }
    if (Math.random() > TEXTURE_INDENT_THRESHOLD_2) {
      x += TEXTURE_INDENT;
    }

    const tokens =
      Math.floor(Math.random() * TEXTURE_TOKEN_RANGE) + TEXTURE_TOKEN_MIN;

    for (let j = 0; j < tokens; j++) {
      const isKeyword = Math.random() > TEXTURE_KEYWORD_THRESHOLD;
      ctx.fillStyle = isKeyword
        ? COLORS[0]
        : COLORS[Math.floor(Math.random() * COLORS.length)];

      const text = isKeyword
        ? KEYWORDS[Math.floor(Math.random() * KEYWORDS.length)]
        : Math.random().toString(RADIX).substring(SUBSTRING_START);

      ctx.fillText(text, x, y);
      x += ctx.measureText(text).width + TEXTURE_TOKEN_SPACING;
    }
  }

  // Add a subtle gradient overlay
  const gradient = ctx.createLinearGradient(0, 0, TEXTURE_SIZE, TEXTURE_SIZE);
  gradient.addColorStop(0, "rgba(11, 87, 208, 0.2)");
  gradient.addColorStop(1, "rgba(0, 0, 0, 0.6)");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, TEXTURE_SIZE, TEXTURE_SIZE);

  return new CanvasTexture(canvas);
};

const RotatingCube = () => {
  const meshRef = useRef<MeshType>(null);
  const texture = useMemo(() => createCodeTexture(), []);

  useFrame((_state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * CUBE_ROTATION_X_SPEED;
      meshRef.current.rotation.y += delta * CUBE_ROTATION_Y_SPEED;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[CUBE_SIZE, CUBE_SIZE, CUBE_SIZE]} />
      <meshStandardMaterial
        emissive={CUBE_EMISSIVE}
        emissiveIntensity={CUBE_EMISSIVE_INTENSITY}
        map={texture}
        metalness={CUBE_METALNESS}
        opacity={CUBE_OPACITY}
        roughness={CUBE_ROUGHNESS}
        transparent
      />
      {/* Wireframe for the "tech" look */}
      <lineSegments>
        <edgesGeometry
          args={[new BoxGeometry(CUBE_SIZE, CUBE_SIZE, CUBE_SIZE)]}
        />
        <lineBasicMaterial
          color={WIREFRAME_COLOR}
          opacity={WIREFRAME_OPACITY}
          transparent
        />
      </lineSegments>
    </mesh>
  );
};

const Cube: React.FC = () => (
  <div className="h-full w-full">
    <Canvas camera={{ position: [0, 0, CAMERA_Z], fov: CAMERA_FOV }}>
      <ambientLight intensity={AMBIENT_LIGHT_INTENSITY} />
      <pointLight
        color={POINT_LIGHT_1_COLOR}
        intensity={POINT_LIGHT_1_INTENSITY}
        position={[
          POINT_LIGHT_1_POS_X,
          POINT_LIGHT_1_POS_Y,
          POINT_LIGHT_1_POS_Z,
        ]}
      />
      <pointLight
        color={POINT_LIGHT_2_COLOR}
        intensity={POINT_LIGHT_2_INTENSITY}
        position={[
          POINT_LIGHT_2_POS_X,
          POINT_LIGHT_2_POS_Y,
          POINT_LIGHT_2_POS_Z,
        ]}
      />
      <RotatingCube />
    </Canvas>
  </div>
);

export default Cube;
