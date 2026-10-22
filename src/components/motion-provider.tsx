"use client";

import { MotionConfig } from "motion/react";
import type { ReactNode } from "react";

/**
 * Keeps Motion animations on even when the OS reports "reduce motion". Windows sends that
 * whenever Animation effects is off, which would otherwise strip the site's reveals for many
 * desktop visitors. The large vestibular triggers are toned down in CSS instead (globals.css).
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="never">{children}</MotionConfig>;
}
