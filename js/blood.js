(function (Bird) {
	function Blood(options) {
		this.options = options || {};
		this.game = options.game;
		this.canvas = this.game.canvas;
		this.ctx = this.game.ctx;
		this.bloods = {
			x : 0,
			y : 0,
		};
	}



	var methods = Blood.prototype;

	// 初始化图片  ==> 又一个坑就是图片加载完成之后才可以画出来 ==> 所以不能立执行

	// bird js 48行
	methods.init = function () {

		// 这时需要实时获取小鸟的位置; 并将小鸟的位置赋值给血迹的x,y
		this.bloods.x = this.game.birds.bird.x;
		this.bloods.y = this.game.birds.bird.y;
		
		if (this.bloods.y >= this.canvas.height- 60) {
			this.bloods.y = this.canvas.height- 60;
				this.ctx.drawImage(this.game.img.die,0,0,80,30,this.bloods.x ,this.bloods.y - 15,80,30);
		}
		if (this.bloods.y <= -10) {
				this.ctx.drawImage(this.game.img.die,0,30,80,30,this.bloods.x  ,this.bloods.y + 25,80,30);
		}
		
	}

	window.Blood = Blood;
})(Bird)