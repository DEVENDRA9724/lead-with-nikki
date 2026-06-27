import React, { useRef, useEffect, useState } from 'react';

interface RevealLayerProps {
  image: string;
  cursorX: number;
  cursorY: number;
  spotlightRadius: number;
}

export const RevealLayer: React.FC<RevealLayerProps> = ({
  image,
  cursorX,
  cursorY,
  spotlightRadius,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const divRef = useRef<HTMLDivElement | null>(null);
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const div = divRef.current;
    if (!canvas || !div) return;

    canvas.width = dimensions.width;
    canvas.height = dimensions.height;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, dimensions.width, dimensions.height);

    if (cursorX === -999 && cursorY === -999) {
      div.style.maskImage = 'none';
      div.style.webkitMaskImage = 'none';
      return;
    }

    // Build radial gradient at (cursorX, cursorY) from 0 to spotlightRadius
    const grad = ctx.createRadialGradient(
      cursorX,
      cursorY,
      0,
      cursorX,
      cursorY,
      spotlightRadius
    );
    grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
    grad.addColorStop(0.4, 'rgba(255, 255, 255, 1)');
    grad.addColorStop(0.6, 'rgba(255, 255, 255, 0.75)');
    grad.addColorStop(0.75, 'rgba(255, 255, 255, 0.4)');
    grad.addColorStop(0.88, 'rgba(255, 255, 255, 0.12)');
    grad.addColorStop(1, 'rgba(255, 255, 255, 0)');

    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(cursorX, cursorY, spotlightRadius, 0, Math.PI * 2);
    ctx.fill();

    try {
      const dataUrl = canvas.toDataURL();
      div.style.maskImage = `url(${dataUrl})`;
      div.style.webkitMaskImage = `url(${dataUrl})`;
      div.style.maskSize = '100% 100%';
      div.style.webkitMaskSize = '100% 100%';
    } catch (e) {
      console.error('Failed to create spotlight mask:', e);
    }
  }, [cursorX, cursorY, dimensions, spotlightRadius]);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-20"
        style={{ display: 'none' }}
      />
      <div
        ref={divRef}
        className="absolute inset-0 bg-center bg-cover bg-no-repeat z-30 pointer-events-none transition-opacity duration-300"
        style={{
          backgroundImage: `url(${image})`,
        }}
      />
    </>
  );
};
