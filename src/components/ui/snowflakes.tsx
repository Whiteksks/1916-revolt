'use client';

import * as React from 'react';
import {
  motion,
  useMotionValue,
  useSpring,
  type SpringOptions,
  type Transition,
  type HTMLMotionProps,
} from 'motion/react';

import { cn } from '@/lib/utils';

type SnowflakeLayerProps = HTMLMotionProps<'div'> & {
  count?: number;
  size?: number;
  transition?: Transition;
  snowColor?: string;
};

function generateSnowflakes(count: number, snowColor: string) {
  const shadows: string[] = [];
  for (let i = 0; i < count; i++) {
    const x = Math.floor(Math.random() * 4000) - 2000;
    const y = Math.floor(Math.random() * 4000) - 2000;
    shadows.push(`${x}px ${y}px ${snowColor}`);
  }
  return shadows.join(', ');
}

function SnowflakeLayer({
  count = 400,
  size = 2,
  transition = { repeat: Infinity, duration: 60, ease: 'linear' },
  snowColor = '#e0f7ff',
  className,
  ...props
}: SnowflakeLayerProps) {
  const [boxShadow, setBoxShadow] = React.useState<string>('');

  React.useEffect(() => {
    setBoxShadow(generateSnowflakes(count, snowColor));
  }, [count, snowColor]);

  return (
    <motion.div
      data-slot="snowflake-layer"
      animate={{ y: [0, 2000], x: [0, 20, -20, 0] }}
      transition={transition}
      className={cn('absolute top-[-2000px] left-0 w-full h-[4000px]', className)}
      {...props}
    >
      <div
        className="absolute bg-transparent rounded-full"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          boxShadow: boxShadow,
          filter: 'blur(0.5px)',
        }}
      />
      <div
        className="absolute bg-transparent rounded-full top-[2000px]"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          boxShadow: boxShadow,
          filter: 'blur(0.5px)',
        }}
      />
    </motion.div>
  );
}

type SnowBackgroundProps = React.ComponentProps<'div'> & {
  factor?: number;
  speed?: number;
  transition?: SpringOptions;
  snowColor?: string;
  pointerEvents?: boolean;
};

export function SnowBackground({
  children,
  className,
  factor = 0.05,
  speed = 60,
  transition = { stiffness: 50, damping: 20 },
  snowColor = '#e0f7ff',
  pointerEvents = true,
  ...props
}: SnowBackgroundProps) {
  const offsetX = useMotionValue(1);
  const offsetY = useMotionValue(1);

  const springX = useSpring(offsetX, transition);
  const springY = useSpring(offsetY, transition);

  const handleMouseMove = React.useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const newOffsetX = -(e.clientX - centerX) * factor;
      const newOffsetY = -(e.clientY - centerY) * factor;
      offsetX.set(newOffsetX);
      offsetY.set(newOffsetY);
    },
    [offsetX, offsetY, factor],
  );

  return (
    <div
      data-slot="snow-background"
      className={cn(
        'relative size-full overflow-hidden bg-[radial-gradient(ellipse_at_top,#9fcffb_0%,#1b1f2f_100%)]',
        className,
      )}
      onMouseMove={handleMouseMove}
      {...props}
    >
      <motion.div
        style={{ x: springX, y: springY }}
        className={cn({ 'pointer-events-none': !pointerEvents })}
      >
        {/* Мелкий снег — частый и лёгкий */}
        <SnowflakeLayer
          count={600}
          size={1}
          transition={{
            repeat: Infinity,
            duration: speed,
            ease: 'linear',
          }}
          snowColor={snowColor}
        />

        {/* Средний снег */}
        <SnowflakeLayer
          count={300}
          size={2}
          transition={{
            repeat: Infinity,
            duration: speed * 1.5,
            ease: 'linear',
          }}
          snowColor="#ffffff"
        />

        {/* Крупные снежинки — реже и медленнее */}
        <SnowflakeLayer
          count={150}
          size={3}
          transition={{
            repeat: Infinity,
            duration: speed * 2,
            ease: 'linear',
          }}
          snowColor="#d8f3ff"
        />
      </motion.div>
      {children}
    </div>
  );
}

export { SnowflakeLayer, type SnowflakeLayerProps, type SnowBackgroundProps };
