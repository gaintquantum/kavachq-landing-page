"use client";
import { MotionConfig } from "framer-motion";
// Honour prefers-reduced-motion globally (transforms/layout animations off, opacity fades kept) without
// per-component branching, so server and client render identical markup.
export default function MotionProvider({ children }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
