import { getRandomNumber } from '../../../utils/getRandomNumberBetween';

export class Walker {
	private x: number;

	private y: number;

	public constructor(width: number, height: number) {
		this.x = width / 2;
		this.y = height / 2;
	}

	public draw(ctx: CanvasRenderingContext2D) {
		ctx.fillStyle = 'black';
		ctx.fillRect(this.x, this.y, 1, 1);
	}

	public step() {
		const xStep = getRandomNumber(-1, 1);
		const yStep = getRandomNumber(-1, 1);

		this.x += xStep;
		this.y += yStep;
	}
}
