var checkInp = {
	tel(str) {
		var reg = /^[1][345789]\d{9}$/;
		return reg.test(str);
	},
	code(str) {
		var reg = /^\d{6}$/;
		return reg.test(str);
	},
	password(str) {
		var reg = /^\w{6,20}$/;
		return reg.test(str);
	}
}
var getInput = (function () {
	return {
		init(ele) {
			this.$ele = document.querySelector(ele);
			this.$inputAll = this.$ele.querySelectorAll('input');
			this.event();
		},
		event() {
			let _this = this;
			for (var i = 0; i < this.$inputAll.length; i++) {
				this.$inputAll[i].onblur = function () {

					var $p = this.nextElementSibling;
					if (this.value == '') {
						$p.className = 'text-danger bg-danger';
						$p.innerHTML = '内容不能为空';
					} else {
						var flage = checkInp[this.name](this.value);
						if (flage) {
							$p.className = 'text-success';
							$p.innerHTML = '';
						} else {
							$p.className = 'bg-danger text-danger';
							$p.innerHTML = this.getAttribute('data-error');
						}
					}
				}
			}
			var $send = this.$ele.querySelector('.send')
			$send.onclick = function () {
				var $span = _this.$ele.querySelector('#change');
				var $pAll = _this.$ele.querySelectorAll('p');
				var $tel = document.getElementById("tel");
				if($span.className.indexOf('text-success') == -1){
					$tel.focus();
					return false;
				}
				for (let i = 0; i < $pAll.length; i++) {
					if ($pAll[i].className.indexOf('text-success') == -1) {
						$pAll[i].previousElementSibling.focus();
						return false;
					}
				}
			}
		}
	}
}())


