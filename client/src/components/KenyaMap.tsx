"use client";
import React from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { motion } from "framer-motion";

// ✅ GeoJSON file path (should be in /public/ke.json)
const geoUrl = "ke.json";

export default function KenyaMap() {
  return (
    <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden">
      {/* Animated blue glow background */}
      <motion.div
        className="absolute w-[1300px] h-[1300px] rounded-full translate-x-20"
        style={{
          background:
            "radial-gradient(circle, rgba(37,99,235,0.15) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
        animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.9, 0.5] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Kenya Map */}
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 3000, // ⬇ slightly reduced from 3200
          center: [38.3, 0.5], // ⬆ shifted slightly east
        }}
        style={{
          width: "175%",
          height: "140%", // ⬇ reduced height for balance
          opacity: 0.65,
        }}
      >
        <defs>
          {/* Soft glowing edge gradient */}
          <radialGradient id="glowGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFD54F" stopOpacity="0.8" />  {/* vivid golden center */}
            <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" /> {/* smooth fade */}
          </radialGradient>
        </defs>

        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo, i) => (
              <motion.g
                key={geo.rsmKey}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: i * 0.015,
                  duration: 0.6,
                  ease: "easeOut",
                }}
              >
                <Geography
                  geography={geo}
                  fill="#2563EB" // rich blue for Kenya fill
                  stroke="url(#glowGradient)" // ✨ golden edge glow
                  strokeWidth={1.2} // slightly thicker stroke for visibility
                  style={{
                    default: { outline: "none" },
                    hover: {
                      fill: "#3B82F6",
                      stroke: "#FFD700", // bright gold on hover
                      cursor: "pointer",
                    },
                  }}
                />
              </motion.g>
            ))
          }
        </Geographies>

        {/* Soft glow behind the map */}
        <motion.circle
          cx="55%" // shifted slightly to the right
          cy="50%"
          r="480"
          fill="url(#glowGradient)"
          animate={{ opacity: [0.25, 0.45, 0.25] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </ComposableMap>
    </div>
  );
}
