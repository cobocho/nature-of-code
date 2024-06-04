import { useCallback, useMemo } from 'react';

import { useCanvas } from '../../hooks/useCanvas';
import { getIntervalData, INTERVAL } from '../../utils/getIntervalData';

import { PerlinWalker } from './classes/PerlinWalker';

export const Ch00_07 = () => {
	const walker = useMemo(() => new PerlinWalker(), []);

	const animate = useCallback(
		(then = 0, ctx: CanvasRenderingContext2D) => {
			window.requestAnimationFrame(() => animate(then, ctx));
			const { now, delta } = getIntervalData(then);

			if (delta >= INTERVAL) {
				walker.step(ctx);
				walker.draw(ctx);

				then = now - (delta % INTERVAL);
			}
		},
		[walker],
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
