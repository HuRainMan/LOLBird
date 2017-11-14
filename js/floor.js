(function () {
	function Floor(options) {
		options = options || {};
		this.game = options.game;
		this.canvas = this.game.canvas;
		this.w = -48;
	}

	var methods = Floor.prototype;

	methods.init = function () {
		
		for (var i = 0; i < 23;i++) {
			this.game.ctx.drawImage(this.game.img.bg3,0,0,48,48,48*i + this.w,this.game.canvas.height-48,48,48);
			this.game.ctx.drawImage(this.game.img.bg1,0,0,300,256,150*i +  this.w * 0.5,this.game.canvas.height-150,150,128);
			this.game.ctx.drawImage(this.game.img.bg2,0,0,300,216,50*i + this.w * 2,this.game.canvas.height-120,50,72);
		}
		this.w -= 10;

		this.w <= -96 && (this.w = -48);



	}

	window.Floor = Floor;
})()