"use client";
import { useEffect, useRef } from "react";

class Snowflake {
  canvas: HTMLCanvasElement;
  x: number;
  y: number;
  radius: number;
  baseSpeed: number;
  swing: number;
  swingSpeed: number;
  opacity: number;
  layer: number;

  constructor(canvas: HTMLCanvasElement, layer: number) {
    this.canvas = canvas;
    this.layer = layer;
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.radius = Math.random() * 2.2 * (1 + layer * 0.3) + 0.8;
    this.baseSpeed = (Math.random() * 0.6 + 0.4) * (1 + layer * 0.4);
    this.swing = Math.random() * Math.PI * 2;
    this.swingSpeed = Math.random() * 0.015 + 0.005;
    this.opacity = Math.random() * 0.6 + 0.3;
  }

  update(flowX: number, flowY: number, turbulence: number) {
    // flowing wind motion (based on perlin-like variation)
    this.swing += this.swingSpeed;

    this.x += flowX + Math.sin(this.swing) * turbulence;
    this.y += this.baseSpeed + flowY + Math.cos(this.swing * 0.5) * turbulence * 0.5;

    // wrap around edges
    if (this.y > this.canvas.height + 10) this.y = -10;
    if (this.x > this.canvas.width + 10) this.x = -10;
    if (this.x < -10) this.x = this.canvas.width + 10;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.save();
    ctx.globalAlpha = this.opacity;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.shadowBlur = this.radius * 2;
    ctx.shadowColor = "#ffffff";
    ctx.fillStyle = "#ffffff";
    ctx.fill();
    ctx.restore();
  }
}

export default function SnowfallWrapper() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const snowflakesRef = useRef<Snowflake[]>([]);
  const animationRef = useRef<number | null>(null);
  const timeRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const snowflakeCount = 180;
    const layers = 3;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      snowflakesRef.current = [];

      for (let i = 0; i < snowflakeCount; i++) {
        const layer = i < 60 ? 0 : i < 120 ? 1 : 2;
        snowflakesRef.current.push(new Snowflake(canvas, layer));
      }
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const animate = () => {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      timeRef.current += 0.005;

      // smoothly shifting flow direction like waves
      const flowX = Math.sin(timeRef.current * 0.7) * 6; // horizontal wave
      const flowY = Math.cos(timeRef.current * 0.5) * 3; // vertical modulation
      const turbulence = Math.sin(timeRef.current * 1.5) * 4 + 0.5; // swirl

      snowflakesRef.current.forEach((flake) => {
        flake.update(flowX, flowY, turbulence);
        flake.draw(ctx);
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-[9999]"
    />
  );
}
