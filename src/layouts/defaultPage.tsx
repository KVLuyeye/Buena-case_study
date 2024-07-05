import React from "react";
import { useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

interface PageLayoutProps {
  children?: React.ReactNode;
}

export const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, x: -100 }} // Start from the left
        animate={{
          opacity: 1,
          x: 0, // Move to its original position
          transition: { duration: 0.5, ease: "easeInOut" },
        }}
        exit={{
          opacity: 0,
          x: 100,
          transition: { duration: 0.3, ease: "easeInOut" },
        }} // Exit to the right
      >
        <section className="mx-4 px-4 flex justify-center">{children}</section>
      </motion.div>
    </AnimatePresence>
  );
};
