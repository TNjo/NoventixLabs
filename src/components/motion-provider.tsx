"use client";

import { MotionConfig } from "motion/react";
import type { ReactNode } from "react";

/** Respects the OS "reduce motion" setting without changing server-rendered markup. */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
