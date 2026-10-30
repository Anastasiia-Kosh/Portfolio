
import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import css from "./Reveal.module.css";

type RevealProps = {
  children: ReactNode;
};

export default function Reveal({ children }: RevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const revealRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = revealRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.15,
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={revealRef}
      className={`${css.reveal} ${isVisible ? css.visible : ""}`}
    >
      {children}
    </div>
  );
}
