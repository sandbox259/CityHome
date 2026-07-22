"use client";

import { ReactNode } from "react";
import { motion, useReducedMotion, type Variants } from "motion/react";

type RevealVariant = "fade" | "fade-up" | "mask";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const itemVariants: Record<"fade" | "fade-up", Variants> = {
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  "fade-up": {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0 },
  },
};

interface ScrollRevealProps {
  children: ReactNode;
  variant?: RevealVariant;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}

/**
 * Single-element scroll reveal. Use `mask` for images (a curtain wipe),
 * `fade-up` for text/cards, `fade` for anything that shouldn't move.
 */
export function ScrollReveal({
  children,
  variant = "fade-up",
  delay = 0,
  duration = 0.8,
  className,
  once = true,
}: ScrollRevealProps) {
  const reduceMotion = useReducedMotion();

  if (variant === "mask") {
    return (
      <div className={`relative overflow-hidden ${className ?? ""}`}>
        {children}
        <motion.div
          aria-hidden="true"
          initial={reduceMotion ? false : { scaleX: 1 }}
          whileInView={{ scaleX: 0 }}
          viewport={{ once, amount: 0.3 }}
          transition={{ duration, delay, ease: EASE }}
          style={{ originX: 0 }}
          className="absolute inset-0 bg-charcoal"
        />
      </div>
    );
  }

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once, amount: 0.3 }}
      variants={itemVariants[variant]}
      transition={{ duration, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Wrap a grid/list with ScrollRevealGroup, and each child with
 * ScrollRevealItem, to get a staggered entrance as the group scrolls
 * into view.
 */
export function ScrollRevealGroup({
  children,
  stagger = 0.12,
  className,
  once = true,
}: {
  children: ReactNode;
  stagger?: number;
  className?: string;
  once?: boolean;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once, amount: 0.15 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function ScrollRevealItem({
  children,
  className,
  variant = "fade-up",
}: {
  children: ReactNode;
  className?: string;
  variant?: "fade" | "fade-up";
}) {
  return (
    <motion.div
      className={className}
      variants={itemVariants[variant]}
      transition={{ duration: 0.7, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}
