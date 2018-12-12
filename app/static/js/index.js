var swriper = (function(){
	let $banner = $('.banner'),
		$list = $('.list'),
		$imgAll = $('.banner div'),
		$listAll = $('.list li'),
		timer = null;
	return{
		init(){
			this.index = 0;
			this.autoPlay();
			this.event();
		},
		event(){
			let _this = this;
			$list.on('click','li', function(){
				_this.showImage($(this).index());
				clearInterval(timer);
			})
		},
		showImage(index){
			if(index >= $imgAll.length){
				index = 0;
			}
			this.index = index;
			$($imgAll[index]).animate({opacity:'1'},1000).nextAll().css('opacity','0');
			$($imgAll[index]).prevAll().css('opacity','0')
			$($listAll[index]).children().animate({width:'60px'},3000,function(){
				$($listAll[index]).children().css('width',0);
			});
		},
		autoPlay(){
			const _this = this;
			_this.showImage(0);
			index = _this.index;
			clearInterval(timer);
			timer = setInterval(function(){
				_this.index++;
				_this.showImage(_this.index);
			},3000)
		}
	}
}());