import { useCallback, useMemo } from 'react';

import { useCanvas } from '../../hooks/useCanvas';
import { getIntervalData, INTERVAL } from '../../utils/getIntervalData';

import { SecondWalker } from './classes/SecondWalker';

export const Ch00_03 = () => {
	const walker = useMemo(() => new SecondWalker(640, 320), []);

	const animate = useCallback(
		(then = 0, ctx: CanvasRenderingContext2D) => {
			window.requestAnimationFrame(() => animate(then, ctx));
			const { now, delta } = getIntervalData(then);

			if (delta >= INTERVAL) {
				walker.step();
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
