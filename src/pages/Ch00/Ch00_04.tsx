import { useCallback } from 'react';

import { useCanvas } from '../../hooks/useCanvas';
import { getIntervalData, INTERVAL } from '../../utils/getIntervalData';

function gaussianRandom(mean: number = 0, stdDev: number = 1): number {
	let u1 = 0;
	let u2 = 0;
	while (u1 === 0) {
		u1 = Math.random();
	}
	while (u2 === 0) {
		u2 = Math.random();
	}
	const z0 = Math.sqrt(-2.0 * Math.log(u1)) * Math.cos(2.0 * Math.PI * u2);
	return z0 * stdDev + mean;
}

export const Ch00_04 = () => {
	const animate = useCallback((then = 0, ctx: CanvasRenderingContext2D) => {
		window.requestAnimationFrame(() => animate(then, ctx));
		const { now, delta } = getIntervalData(then);

		if (delta >= INTERVAL) {
			ctx.beginPath();
			const x = gaussianRandom(320, 60);
			ctx.fillStyle = 'black';
			ctx.arc(x, 160, 10, 0, 2 * Math.PI);
			ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
			ctx.fill();

			then = now - (delta % INTERVAL);
		}
	}, []);

	const canvasRef = useCanvas(640, 320, animate);

	return <canvas ref={canvasRef} />;
};
