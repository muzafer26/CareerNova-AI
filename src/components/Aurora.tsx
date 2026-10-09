import { motion } from "framer-motion";

/**
 * Bauhaus Background:
 * Authentic constructivist canvas with dot grid texture and decorative
 * primary color geometric shapes (Red circle, Blue square, Yellow triangle)
 * with thick black borders and sharp shadows.
 */
export function AuroraBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#F0F0F0]">
      {/* Bauhaus dot grid */}
      <div className="absolute inset-0 bauhaus-grid opacity-25" />

      {/* Large Decorative Bauhaus Geometry in Corners / Margins */}
      {/* Top right: Yellow large circle */}
      <div
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#F0C020] border-4 border-[#121212] opacity-40 shadow-bauhaus-lg"
        aria-hidden="true"
      />

      {/* Bottom left: Blue rotated square */}
      <div
        className="absolute -bottom-36 -left-36 w-80 h-80 rounded-none bg-[#1040C0] border-4 border-[#121212] rotate-12 opacity-30 shadow-bauhaus-lg"
        aria-hidden="true"
      />

      {/* Mid right: Red triangle */}
      <div
        className="absolute top-1/2 -right-20 w-64 h-64 bg-[#D02020] border-4 border-[#121212] clip-triangle opacity-25 -rotate-12"
        aria-hidden="true"
      />

      {/* Constructivist horizontal and vertical division lines */}
      <div className="absolute top-0 bottom-0 left-12 w-px bg-[#121212] opacity-10 hidden lg:block" />
      <div className="absolute top-0 bottom-0 right-12 w-px bg-[#121212] opacity-10 hidden lg:block" />
    </div>
  );
}

/**
 * Bauhaus Geometric Floating Shapes
 * Sparse, clean geometric shapes (circles, squares, triangles) drifting slowly.
 */
export function FloatingParticles({ count = 8 }: { count?: number }) {
  const shapes = [
    { type: "circle", color: "#D02020" },
    { type: "square", color: "#1040C0" },
    { type: "triangle", color: "#F0C020" },
    { type: "square-rot", color: "#121212" },
  ];

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {Array.from({ length: count }).map((_, i) => {
        const item = shapes[i % shapes.length];
        const size = ((i % 3) + 1) * 12 + 10;
        const left = (i * 14 + 8) % 92;
        const top = (i * 22 + 15) % 85;

        return (
          <motion.div
            key={i}
            className="absolute opacity-60"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              width: size,
              height: size,
            }}
            animate={{
              y: [0, -18, 0],
              rotate: item.type === "square-rot" ? [45, 60, 45] : [0, 10, 0],
            }}
            transition={{
              duration: 10 + (i % 4) * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.8,
            }}
          >
            {item.type === "circle" && (
              <div
                className="w-full h-full rounded-full border-2 border-[#121212] shadow-bauhaus-sm"
                style={{ backgroundColor: item.color }}
              />
            )}
            {item.type === "square" && (
              <div
                className="w-full h-full rounded-none border-2 border-[#121212] shadow-bauhaus-sm"
                style={{ backgroundColor: item.color }}
              />
            )}
            {item.type === "square-rot" && (
              <div
                className="w-full h-full rounded-none border-2 border-[#121212] rotate-45 shadow-bauhaus-sm"
                style={{ backgroundColor: item.color }}
              />
            )}
            {item.type === "triangle" && (
              <div
                className="w-full h-full clip-triangle border-2 border-[#121212]"
                style={{ backgroundColor: item.color }}
              />
            )}
          </motion.div>
        );
      })}
    </div>
  );
}
