export class Bar {
	private index: number;

	private height: number = 0;

	public constructor(index: number) {
		this.index = index;
	}

	public draw(ctx: CanvasRenderingContext2D) {
		ctx.fillStyle = 'black';
		const width = ctx.canvas.width / 20;
		const x = width * this.index;
		const y = ctx.canvas.height / 2;

		ctx.fillStyle = 'grey';
		ctx.strokeStyle = 'black';
		ctx.fillRect(x, y, width, this.height);
		ctx.strokeRect(x, y, width, this.height);
	}

	public update() {
		this.height -= 5;
	}
}
