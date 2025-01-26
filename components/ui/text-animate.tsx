"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { ElementType } from "react";

type AnimationType = "text" | "word" | "character" | "line";

interface TextAnimateProps {
  /**
   * The text content to animate
   */
  children: string;
  /**
   * The class name to be applied to the component
   */
  className?: string;
  /**
   * The class name to be applied to each segment
   */
  segmentClassName?: string;
  /**
   * The element type to render
   */
  as?: ElementType;
  /**
   * How to split the text ("text", "word", "character")
   */
  by?: AnimationType;
  /**
   * Whether to start animation when component enters viewport
   */
  startOnView?: boolean;
}

const blurInVariants = {
  container: {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05, // Customize the delay between segments
      },
    },
  },
  item: {
    hidden: { opacity: 0, filter: "blur(10px)" },
    show: (i: number) => ({
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.1, // Staggered animation
        duration: 0.3,  // Duration of each segment's animation
      },
    }),
  },
};

export function TextAnimate({
  children,
  className,
  segmentClassName,
  as: Component = "p",
  startOnView = true,
  by = "word",
}: TextAnimateProps) {
  const MotionComponent = motion(Component);

  // Split text into segments based on the `by` prop
  let segments: string[] = [];
  switch (by) {
    case "word":
      segments = children.split(/(\s+)/); // Split by words, keeping spaces
      break;
    case "character":
      segments = children.split(""); // Split by characters
      break;
    case "line":
      segments = children.split("\n"); // Split by lines
      break;
    case "text":
    default:
      segments = [children]; // Treat as a single block
      break;
  }

  return (
    <AnimatePresence mode="popLayout">
      <MotionComponent
        variants={blurInVariants.container}
        initial="hidden"
        whileInView={startOnView ? "show" : undefined}
        exit="hidden"
        className={cn("whitespace-pre-wrap", className)}
      >
        {segments.map((segment, i) => (
          <motion.span
            key={`${by}-${segment}-${i}`}
            variants={blurInVariants.item}
            custom={i}
            className={cn(
              by === "line" ? "block" : "inline-block whitespace-pre",
              segmentClassName
            )}
          >
            {segment}
          </motion.span>
        ))}
      </MotionComponent>
    </AnimatePresence>
  );
}
