(function (Floor,Bird,Blood,Pipe) {
	function Game(id){
    	this.canvas = document.getElementById(id);
    	this.ctx = this.canvas.getContext('2d');
    	this.over = document.getElementById('over');
    	this.begin = document.getElementById('begin');
		this.timer = null;

		this.img = {};
		this.sourcePath = './json/r.json';

		this.floor = new Floor({game : this})
		this.birds = new Bird({game : this})
		this.blood = new Blood({game : this});
		this.pipe = new Pipe({game : this});
		this.init();
		this.reload();
	}

	var methods = Game.prototype;


	methods.init = function () {

		this.loadImg(function () {
			this.run();
		}.bind(this));

	};

	// 异步加载图片  所以需要一次性载入所有的图片 并且使用 imgLode 的api 判断图片是否加载完毕
	methods.loadImg = function (callback) {
		var self = this;

		var xhr = new XMLHttpRequest();
		xhr.open('get',self.sourcePath);
		xhr.send(null);
		xhr.addEventListener('readystatechange',function () {
			if (xhr.readyState === 4 && xhr.status === 200) {
				var data = JSON.parse(xhr.responseText);
			
				var count = 0;

				data.images.forEach(function (item) {

					var img = new Image();
					img.src = item.src;
					img.onload = function () {
						self.img[item.name] = img;
						count++;
						if (count === data.images.length) {
							callback();
						}
					}
				});
			}
		});
}

		methods.run = function () {

			clearInterval(this.timer);

			this.timer = window.setInterval(function () {
				// console.log(this.birds.bird.points)

			this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);

			this.birds.render();

			// 让鸟往上飞 
			document.onkeydown = (function (e) {

				this.birds.upMove(e);

			}).bind(this);

			// 画出地板
			this.floor.init();

			// 画出地板的同时 画出相应的管子  ==> 但是  地板实时刷新 而管子画出来一次就可以了 
			this.pipe.getPipes();

			// 管子移动
			this.pipe.init();

			}.bind(this),100);
		}

		methods.gameover = function () {

			window.clearInterval(this.timer);

			window.setTimeout(function () {

			this.over.style.display = 'block';

			// 获取得分
			var points = this.birds.bird.points;

			//  判断 百位数 初一一百 是否是 个位是 

			var b = parseInt(points/100);

			
			var s = parseInt((points - b *100) / 10);

			// s = s > 10 ? parseInt(s/10) : s ;


			var g = points - 100 * b - 10 * s;

			this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);

			if (b) {
				this.ctx.beginPath();
				this.ctx.drawImage(this.img.number,b*42,0,42,57,410,320,42,57);	
			}
			if (s) {
				this.ctx.beginPath();
				this.ctx.drawImage(this.img.number,s*42,0,42,57,460,320,42,57);	
			}
				this.ctx.beginPath();
				this.ctx.drawImage(this.img.number,g*42,0,42,57,520,320,42,57);	


			}.bind(this), 1000);

		}

		methods.reload = function () {

			this.over.onclick = (function () {

				this.over.style.display = 'none';

				this.begin.style.display = 'block';

			}).bind(this)
		}


	window.Game = Game;
})(Floor,Bird,Blood,Pipe)

