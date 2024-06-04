import { useCallback } from 'react';

import { useCanvas } from '../../hooks/useCanvas';
import { p5 } from '../../utils/p5';

export const Ch00_08 = () => {
	const animate = useCallback((_ = 0, ctx: CanvasRenderingContext2D) => {
		let xoff = 0;

		for (let x = 0; x < ctx.canvas.width / 2; x++) {
			let yoff = 0;

			for (let y = 0; y < ctx.canvas.height / 2; y++) {
				const bright = Math.floor(p5.map(p5.noise(xoff, yoff), 0, 1, 0, 255));
				ctx.globalAlpha = bright / 300;
				ctx.fillRect(x, y, 1, 1);
				ctx.globalAlpha = 1;
				yoff += 0.01;
			}
			xoff += 0.01;
		}
	}, []);

	const canvasRef = useCanvas(640, 320, animate);

	return (
		<canvas
			width={640}
			height={320}
			ref={canvasRef}
		/>
	);
};
