import { useCallback } from 'react';

import { useCanvas } from '../../hooks/useCanvas';
import { getRandomNumber } from '../../utils/getRandomNumberBetween';
import { p5 } from '../../utils/p5';

export const Ch00_06 = () => {
	const randomAnimate = useCallback((_ = 0, ctx: CanvasRenderingContext2D) => {
		const width = ctx.canvas.width;
		let lastPoint = { x: 0, y: getRandomNumber(0, ctx.canvas.height / 2) };

		for (let x = 0; x < width / 2; x++) {
			const y = getRandomNumber(0, ctx.canvas.height / 2);

			ctx.beginPath();
			ctx.moveTo(lastPoint.x, lastPoint.y);
			ctx.lineTo(x, y);
			ctx.lineWidth = 2;
			ctx.stroke();

			lastPoint = { x, y };
		}
	}, []);

	const noiseAnimate = useCallback((_ = 0, ctx: CanvasRenderingContext2D) => {
		const width = ctx.canvas.width;
		let lastPoint = { x: -1, y: ctx.canvas.height / 4 };

		let xoff = 0;

		for (let x = -1; x < width / 2; x++) {
			const y = p5.noise(xoff) * (ctx.canvas.height / 2);

			xoff += 0.01;

			ctx.beginPath();
			ctx.moveTo(lastPoint.x, lastPoint.y);
			ctx.lineTo(x, y);
			ctx.lineWidth = 2;
			ctx.stroke();

			lastPoint = { x, y };
		}
	}, []);

	const noiseCanvasRef = useCanvas(640, 320, noiseAnimate);
	const randomCanvasRef = useCanvas(640, 320, randomAnimate);

	return (
		<div
			style={{
				display: 'flex',
				gap: '20px',
			}}
		>
			<div>
				<h1>noise</h1>
				<canvas
					width={640}
					height={320}
					ref={noiseCanvasRef}
				/>
			</div>
			<div>
				<h1>random</h1>
				<canvas
					width={640}
					height={320}
					ref={randomCanvasRef}
				/>
			</div>
		</div>
	);
};
