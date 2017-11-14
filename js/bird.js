(function () {
	function Bird (options) {
		this.options = options || {};
		this.game = options.game;
		this.bird= {
			// 初始化的位置	
				x : 150,
				y : 200,
			// 鸟的索引
				index : 0,
			// 水平速度
				vx : 0,
			// 垂直速度	
				vy : 0,
			// 重力加速度	
				g : 3,

			// 	得分
				points : 0,
			// 位移
				dis : 192.5	
			};
		this.canvas = this.game.canvas;
		this.ctx = this.game.ctx;	
	}

	var methods = Bird.prototype;



		// 画出小鸟 并控制小鸟的形态
		methods.render = function () {
			

			this.ctx.drawImage(this.game.img.bird,85*this.bird.index,0,85,60,this.bird.x,this.bird.y,42,30);

			this.bird.index++;
			this.bird.index >= 3 && (this.bird.index = 0 );

			this.birdMove();
		}

		// 让鸟会往前方飞翔
		methods.birdMove = function () {
			this.bird.x += this.bird.vx;
			this.bird.y += this.bird.vy;
			this.bird.vy += this.bird.g;

			// 得分加加
			this.bird.points++;
			// 移动距离++
			this.bird.dis += 10;

			// this.bird.vx = this.bird.x >= 200 ? 200 : this.bird.x;

			// 飞的时候判断会不会死亡
			this.birdDie();

			// 飞行的时候判断撞墙了没有 
			this.game.blood.init();
			// 
			// console.log(this.bird.points)
		}

		// 按键之后向上飞 
		methods.upMove = function (e) {
			e = e || event;
			if (e.keyCode === 38) {
				// this.bird.vy = - 1.3 * this.bird.vy;
				// 每一次按键的时候 给他一个固定向上的速度 这样子就可以解决动态绑定速度导致越飞越高的bug了
				this.bird.vy = - 10;

			}

		}
		// 判断死亡
		methods.birdDie = function () {
			// bug y的坐标到了 但是死在了空中
			if (this.bird.y > 440) {
				this.bird.y = 440;
				this.game.gameover();
			}

			if (this.bird.y <= -10) {
				this.game.gameover();
			}

			for (var i = 0; i < this.game.pipe.pipes.length;i++) {

					// 鸟在这个时候已经圆柱体侵犯到了tube

					if (this.bird.dis - 42.5 >= this.game.pipe.pipes[i].x && this.bird.dis - 42.5 <= this.game.pipe.pipes[i].x + 37) {

						// 这时候判断具体的有没有碰到圆柱体

							if (this.bird.y <= this.game.pipe.pipes[i].y + this.game.pipe.pipes[i].l || this.bird.y + 30 >= this.canvas.height - this.game.pipe.pipesBottom[i].l - 48  ) {

								this.game.gameover();	

								
							}
					}
			}']'
			
		}

	window.Bird = Bird;
})()