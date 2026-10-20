import { useEffect, useRef } from "react";
import katex from "katex";
import "katex/dist/katex.min.css";

export function InlineMath({ math, children, className = "" }) {
  const ref = useRef(null);
  const formula = math ?? children;

  useEffect(() => {
    if (!ref.current) return;

    katex.render(String(formula ?? ""), ref.current, {
      throwOnError: false,
      strict: "warn",
      output: "html",
    });
  }, [formula]);

  return <span ref={ref} className={className} />;
}

export function BlockMath({ math, children, className = "" }) {
  const ref = useRef(null);
  const formula = math ?? children;

  useEffect(() => {
    if (!ref.current) return;

    katex.render(String(formula ?? ""), ref.current, {
      throwOnError: false,
      strict: "warn",
      displayMode: true,
      output: "html",
    });
  }, [formula]);

  return (
    <div
      ref={ref}
      className={`overflow-x-auto py-2 ${className}`}
    />
  );
}