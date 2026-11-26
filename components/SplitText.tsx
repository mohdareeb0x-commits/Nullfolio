"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { forwardRef, ReactNode, Children, isValidElement } from "react";

interface SplitTextProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children: ReactNode;
  split?: "chars" | "words" | "lines";
  delay?: number;
  stagger?: number;
  className?: string;
  as?: "div" | "p" | "h1" | "h2" | "h3" | "h4" | "span";
  preserveWhitespace?: boolean;
}

const staggerDefaults = {
  chars: 0.015,
  words: 0.05,
  lines: 0.08,
};

const TagMap = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  p: "p",
  span: "span",
  div: "div",
};

export const SplitText = forwardRef<HTMLDivElement, SplitTextProps>(
  (
    {
      children,
      split = "words",
      delay = 0,
      stagger = staggerDefaults.words,
      className = "",
      as: Component = "div",
      preserveWhitespace = false,
      style,
      ...props
    },
    ref
  ) => {
    const nodes = extractElements(children);

    const renderNodes = () => {
      let globalIndex = 0;

      return nodes.map((node, index) => {
        if (isValidElement(node)) {
          return <span key={index}>{node}</span>;
        }

        const text = String(node);
        let items: string[] = [];

        switch (split) {
          case "chars":
            items = Array.from(text);
            break;
          case "words":
            items = text.split(/(\s+)/);
            break;
          case "lines":
            items = text.split(/(\n)/);
            break;
          default:
            items = [text];
        }

        return items.map((item, itemIndex) => {
          if (item === "\n") return <br key={`${index}-${itemIndex}`} />;
          if (item.trim() === "" && !preserveWhitespace) return null;

          const currentIdx = globalIndex++;

          return (
            <motion.span
              key={`${index}-${itemIndex}`}
              initial={{ opacity: 0, y: "1.2em", rotateX: -90 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.19, 1, 0.22, 1],
                delay: delay + currentIdx * stagger,
              }}
              style={{
                display: "inline-block",
                whiteSpace: preserveWhitespace ? "pre" : "nowrap",
              }}
            >
              {item}
            </motion.span>
          );
        });
      });
    };

    const MotionTag = TagMap[Component] || "div";

    return (
      <motion.div
        ref={ref}
        className={className}
        style={{
          display: "inline-block",
          ...style,
        }}
        {...props}
      >
        {renderNodes()}
      </motion.div>
    );
  }
);

SplitText.displayName = "SplitText";

function extractElements(node: ReactNode): ReactNode[] {
  const result: ReactNode[] = [];
  Children.forEach(node, (child) => {
    if (typeof child === "string" || typeof child === "number") {
      result.push(child);
    } else if (isValidElement(child)) {
      result.push(child);
    } else if (Array.isArray(child)) {
      result.push(...child);
    }
  });
  return result;
}