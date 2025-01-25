"use client";

import { cn } from "@/lib/utils";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

interface FlickeringBinaryGridProps extends React.HTMLAttributes<HTMLDivElement> {
  gridGap?: number;
  flickerChance?: number;
  color?: string;
  fontSize?: number;
  width?: number;
  height?: number;
  className?: string;
  maxOpacity?: number;
}

export const FlickeringGrid: React.FC<FlickeringBinaryGridProps> = ({
  gridGap = 6,
  flickerChance = 0.3,
  color = "rgb(0, 255, 0)",
  fontSize = 14,
  width,
  height,
  className,
  maxOpacity = 0.8,
  ...props
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 });

  const memoizedColor = useMemo(() => {
    return color;
  }, [color]);

  const setupCanvas = useCallback(
    (canvas: HTMLCanvasElement, width: number, height: number) => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      const cols = Math.floor(width / (fontSize + gridGap));
      const rows = Math.floor(height / (fontSize + gridGap));

      const binaryValues = new Array(cols * rows).fill(0).map(() => ({
        value: Math.random() > 0.5 ? "1" : "0",
        opacity: Math.random() * maxOpacity,
      }));

      return { cols, rows, binaryValues, dpr };
    },
    [fontSize, gridGap, maxOpacity]
  );

  const updateBinaryValues = useCallback(
    (
      binaryValues: Array<{ value: string; opacity: number }>,
      deltaTime: number
    ) => {
      for (let i = 0; i < binaryValues.length; i++) {
        if (Math.random() < flickerChance * deltaTime) {
          binaryValues[i] = {
            value: Math.random() > 0.5 ? "1" : "0",
            opacity: Math.random() * maxOpacity,
          };
        }
      }
    },
    [flickerChance, maxOpacity]
  );

  const drawGrid = useCallback(
    (
      ctx: CanvasRenderingContext2D,
      width: number,
      height: number,
      cols: number,
      rows: number,
      binaryValues: Array<{ value: string; opacity: number }>,
      dpr: number
    ) => {
      ctx.clearRect(0, 0, width, height);
      ctx.font = `${fontSize * dpr}px monospace`;
      ctx.textBaseline = "middle";
      ctx.textAlign = "center";

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const { value, opacity } = binaryValues[i * rows + j];
          ctx.fillStyle = `${memoizedColor.replace("rgb", "rgba").replace(
            ")",
            `, ${opacity})`
          )}`;
          ctx.fillText(
            value,
            i * (fontSize + gridGap) * dpr + fontSize * dpr * 0.5,
            j * (fontSize + gridGap) * dpr + fontSize * dpr * 0.5
          );
        }
      }
    },
    [memoizedColor, fontSize, gridGap]
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let gridParams: ReturnType<typeof setupCanvas>;

    const updateCanvasSize = () => {
      const newWidth = width || container.clientWidth;
      const newHeight = height || container.clientHeight;
      setCanvasSize({ width: newWidth, height: newHeight });
      gridParams = setupCanvas(canvas, newWidth, newHeight);
    };

    updateCanvasSize();

    let lastTime = 0;
    const animate = (time: number) => {
      if (!isInView) return;

      const deltaTime = (time - lastTime) / 1000;
      lastTime = time;

      updateBinaryValues(gridParams.binaryValues, deltaTime);
      drawGrid(
        ctx,
        canvas.width,
        canvas.height,
        gridParams.cols,
        gridParams.rows,
        gridParams.binaryValues,
        gridParams.dpr
      );
      animationFrameId = requestAnimationFrame(animate);
    };

    const resizeObserver = new ResizeObserver(() => {
      updateCanvasSize();
    });

    resizeObserver.observe(container);

    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0 }
    );

    intersectionObserver.observe(canvas);

    if (isInView) {
      animationFrameId = requestAnimationFrame(animate);
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
    };
  }, [setupCanvas, updateBinaryValues, drawGrid, width, height, isInView]);

  return (
    <div
      ref={containerRef}
      className={cn(`h-full w-full ${className}`)}
      {...props}
    >
      <canvas
        ref={canvasRef}
        className="pointer-events-none"
        style={{
          width: canvasSize.width,
          height: canvasSize.height,
        }}
      />
    </div>
  );
};
