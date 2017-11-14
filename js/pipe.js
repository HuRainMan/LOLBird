(function (Bird,Blood) {

	function Pipe (options) {
		this.options = options || {};
		this.game = options.game;
		// 自减的变量
		this.left = 0;
		this.pipes = [
			{
				x : 250,
				y : 0, 
				l : Math.random() * 150+ 100,
				w : 37
			},
			{
				x : 350,
				y : 0, 
				l : Math.random() * 150+ 100,
				w : 37
			},
			{
				x : 450,
				y : 0, 
				l : Math.random() * 150+ 100,
				w : 37
			},
			{
				x : 550,
				y : 0, 
				l : Math.random() * 150+ 100,
				w : 37
			},
			{
				x : 650,
				y : 0, 
				l : Math.random() * 150+ 100,
				w : 37
			},
			{
				x : 750,
				y : 0, 
				l : Math.random() * 150+ 100,
				w : 37
			},
			{
				x : 850,
				y : 0, 
				l : Math.random() * 150+ 100,
				w : 37
			},
			{
				x : 950,
				y : 0, 
				l : Math.random() * 150+ 100,
				w : 37
			},
			{
				x : 1050,
				y : 0, 
				l : Math.random() * 150+ 100,
				w : 37
			},
			{
				x : 1150,
				y : 0, 
				l : Math.random() * 150+ 100,
				w : 37
			},


		];
		this.pipesBottom = [
			{
				x : 250,
				y : 0, 
				l :0,
				w : 37
			},
			{
				x : 350,
				y : 0, 
				l :0,
				w : 37
			},
			{
				x : 450,
				y : 0, 
				l :0,
				w : 37
			},
			{
				x : 550,
				y : 0, 
				l :0,
				w : 37
			},
			{
				x : 650,
				y : 0, 
				l :0,
				w : 37
			},
			{
				x : 750,
				y : 0, 
				l : 0,
				w : 37
			},
			{
				x : 850,
				y : 0, 
				l :0,
				w : 37
			},
			{
				x : 950,
				y : 0, 
				l :0,
				w : 37
			},
			{
				x : 1050,
				y : 0, 
				l : 0,
				w : 37
			},
			{
				x : 1150,
				y : 0, 
				l :0,
				w : 37
			},


		];
		// 计数 每失去一根管子 加一
		this.num = 1;

		// 让管子之间的间隔越来越小
		this.gap = 200;
		// this.arrTop = [];
		this.canvas = this.game.canvas;
		this.ctx = this.game.ctx;
		
	}

	var methods = Pipe.prototype;

	// 画出管子 
	methods.getPipes = function () {
		for (var i = 0; i < this.pipes.length;i++) {
			this.ctx.drawImage(this.game.img.pipe1,0,0,148,1664,this.pipes[i].x + this.left,this.pipes[i].y,this.pipes[i].w,this.pipes[i].l);
			this.pipesBottom[i].l = this.canvas.height - this.pipes[i].l - this.gap;
			this.ctx.drawImage(this.game.img.pipe2,0,0,148,1664,this.pipesBottom[i].x + this.left,this.canvas.height - this.pipesBottom[i].l - 48,37,this.pipesBottom[i].l);

		}
		// this.pipes = this.ctx.drawImage(this.game.img.pipe1,0,0,148,1664, Math.random() * 500 + 250 + this.left,0,74,Math.random() * 250);
		// if (this.arrTop[this.arrTop.length] !== this.pipes) {
		// 	this.arrTop.push(this.pipes);	
		// }
		// console.log(this.pipes)
			// for (var i = 0; i < 10; i++) {
				// this.arrTop[this.arrTop.length].x = Math.random() * (10 + i) + 250;	
				// this.arrTop[this.arrTop.length].y = 0;
				// this.arrTop[this.arrTop.length].l = Math.random() * 250;
				// this.arrTop.push(tube); 
				// this.arrTop.push();
				// this.pipes = this.ctx.drawImage(this.game.img.pipe1,0,0,148,1664, Math.random() * (100 + i) + 250 + this.left,0,74,Math.random() * 250);
				// this.arrTop.push(this.pipes)
			// }
			// console.log(this.arrTop)
	}

	methods.init = function () {
		
		for (var i = 0; i < this.pipes.length;i++) {
			if ( this.pipes[i].x + this.left<= -40) {

				// 让两跟柱子之间的间隔越来越小
				this.gap--;

				this.num++;

				this.pipes.push(		
					{
						x : this.canvas.width + 100 * (this.num+1),
						y : 0, 
						l : Math.random() * 150+ 100,
						w : 37
				}
			);
				this.pipes.shift(this.pipes[0]);
				// this.pipes[this.pipes.length - 1].x =  this.canvas.width + 100 * (this.num+1);

				this.pipesBottom.push(
											{
						x : this.canvas.width + 100 * (this.num+1),
						y : 0, 
						l :0,
						w : 37
				}
					);
				this.pipesBottom.shift(this.pipesBottom[0]);
				this.pipesBottom[this.pipesBottom.length - 1].x =  this.canvas.width + 100 * (this.num+1);
			}
		}

		this.left -= 10;



	// for (var i = 0; i < 50; i++) {
	// 	// if (this.arrTop[i].x !== 0) {
	// 		// this.ctx.drawImage(this.game.img.pipe1,0,0,148,1664,this.arrTop[i].x,this.arrTop[i].y,74,this.arrTop[i].l);
	// 		this.ctx.drawImage(this.game.img.pipe1,0,0,148,1664, Math.random() * (100 + i) + 250,0,74,Math.random() * 250);

	// 	}
	}




	



	window.Pipe = Pipe;

})(Bird,Blood)