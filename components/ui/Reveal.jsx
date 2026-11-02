"use client";
import { motion } from "framer-motion";
const ease = [0.22, 1, 0.36, 1];
const viewport = { once: true, amount: 0.15 };
// Fades/slides content up when it scrolls into view. Reduced motion is handled globally by MotionProvider.
export function Reveal({ as = "div", delay = 0, y = 24, className, children, ...rest }) {
  const Tag = motion[as];
  return (
    <Tag className={className} initial={{ opacity: 0, y }} whileInView={{ opacity: 1, y: 0 }} viewport={viewport} transition={{ duration: 0.7, ease, delay }} {...rest}>
      {children}
    </Tag>
  );
}
// Parent for staggered children; pair with RevealItem.
export function RevealGroup({ as = "div", stagger = 0.08, delay = 0, className, children, ...rest }) {
  const Tag = motion[as];
  return (
    <Tag className={className} initial="hidden" whileInView="show" viewport={viewport} variants={{ hidden: {}, show: { transition: { staggerChildren: stagger, delayChildren: delay } } }} {...rest}>
      {children}
    </Tag>
  );
}
export function RevealItem({ as = "div", y = 18, className, children, ...rest }) {
  const Tag = motion[as];
  return (
    <Tag className={className} variants={{ hidden: { opacity: 0, y }, show: { opacity: 1, y: 0, transition: { duration: 0.55, ease } } }} {...rest}>
      {children}
    </Tag>
  );
}
