import { useCallback, useMemo } from 'react';

import { useCanvas } from '../../hooks/useCanvas';
import { getIntervalData, INTERVAL } from '../../utils/getIntervalData';
import { getRandomNumber } from '../../utils/getRandomNumberBetween';

import { Bar } from './classes/Bar';

export const Ch00_02 = () => {
	const bars = useMemo(
		() =>
			Array.from({ length: 20 }, (_, i) => {
				return new Bar(i);
			}),
		[],
	);

	const animate = useCallback(
		(then = 0, ctx: CanvasRenderingContext2D) => {
			window.requestAnimationFrame(() => animate(then, ctx));
			const { now, delta } = getIntervalData(then);

			if (delta >= INTERVAL) {
				ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

				const randomIndex = getRandomNumber(0, bars.length - 1);
				bars[randomIndex].update();
				bars.forEach((bar) => {
					bar.draw(ctx);
				});

				then = now - (delta % INTERVAL);
			}
		},
		[bars],
	);

	const canvasRef = useCanvas(640, 320, animate);

	return (
		<canvas
			width={640}
			height={320}
			ref={canvasRef}
		/>
	);
};
