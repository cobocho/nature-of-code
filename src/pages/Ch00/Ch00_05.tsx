import { useCallback, useMemo } from 'react';

import { useCanvas } from '../../hooks/useCanvas';
import { getRandomNumber } from '../../utils/getRandomNumberBetween';

import { Bar } from './classes/Bar';

const acceptreject = () => {
	while (true) {
		const r1 = getRandomNumber(0, 1, true);
		const probability = r1;
		const r2 = getRandomNumber(0, 1, true);

		if (r2 < probability) {
			return r1;
		}
	}
};

export const Ch00_05 = () => {
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
			ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

			const index = Math.floor(acceptreject() * bars.length);

			if (index < bars.length) {
				bars[index].update();
			}

			bars.forEach((bar) => {
				bar.draw(ctx);
			});
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
