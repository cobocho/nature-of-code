import { p5 } from '../../../utils/p5';

export class PerlinWalker {
	private x: number = 0;

	private y: number = 0;

	private tx: number = 0;

	private ty: number = 1;

	public draw(ctx: CanvasRenderingContext2D) {
		ctx.beginPath();
		ctx.strokeStyle = 'black';
		ctx.arc(this.x, this.y, 16, 0, Math.PI * 2);
		ctx.stroke();
		ctx.fillStyle = 'grey';
		ctx.fill();
	}

	public step(ctx: CanvasRenderingContext2D) {
		this.x = p5.map(p5.noise(this.tx), 0, 1, 0, ctx.canvas.width / 2);
		this.y = p5.map(p5.noise(this.ty), 0, 1, 0, ctx.canvas.height / 2);

		this.tx += 0.01;
		this.ty += 0.01;
	}
}
