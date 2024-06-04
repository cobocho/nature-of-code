import { getRandomNumber } from '../../../utils/getRandomNumberBetween';

export class SecondWalker {
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
		const num = getRandomNumber(0, 1);

		if (num < 0.4) {
			this.x++;
		} else if (num < 0.6) {
			this.x--;
		} else if (num < 0.8) {
			this.y++;
		} else {
			this.y--;
		}
	}
}
