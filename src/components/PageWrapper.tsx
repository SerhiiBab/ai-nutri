// AnimatedDarkBackground.tsx
import React from "react";
import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
}

const PageWrapper: React.FC<Props> = ({ children }) => {
  return (
    <div style={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}>
      {/* Анимированный SVG фон */}
      <motion.svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
        }}
      >
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ebebeb" />
            <stop offset="50%" stopColor="#ebebeb" />
            <stop offset="100%" stopColor="#ebebeb" />
          </linearGradient>
        </defs>
        <motion.rect
  width="100%"
  height="40%"
  fill="url(#grad)"
  animate={{ y: "40%" }} // просто смещение один раз
  transition={{ duration: 0.5, ease: "easeInOut" }} // плавное замедление в начале и в конце
/>
      </motion.svg>

      {/* Содержимое страницы */}
      <div style={{ position: "relative", zIndex: 1 }}>
        {children}
      </div>
    </div>
  );
};

export default PageWrapper;
