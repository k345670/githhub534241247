function sendAjax(url, obj) {
	var xhr = null;
	if (window.XMLHttpRequest) {
		xhr = new XMLHttpRequest();
	} else {
		xhr = new ActiveXObject("Microsoft.XMLHTTP");
	}//兼容写法
	var _default = {
		method: 'GET',
		data: null,
	}
	//建一个新对象用来防止用户输入的对象属性有误
	//更改默认值
	if (obj) {
		for (var i in _default) {
			if (i in obj) {
				_default[i] = obj[i];
			}
		}
	}

	//判断类型
	if (_default.method.toUpperCase() === "GET") {
		//get中的地址拼接
		let flage = url.indexOf('?') == -1 ? "?" : "&";
		url += flage;
		for (let i in _default.data) {
			let value = `${i}=${_default.data[i]}`;
			url += value + "&";
		}
		//设置时间戳来解决get的缓存问题
		url += `${Date.now()}`;
		//将数据重新设置为null
		_default.data = null;

	} else if (_default.method.toUpperCase() === "POST") {
		_default.data = JSON.stringify(_default.data);
	} else {
		console.log("告辞");
		return;
	}
	xhr.open(_default.method, url, true);
	xhr.send(_default.data);

	return new Promise((resolve, reject) => {
		xhr.onreadystatechange = function () {
			//判断请求是否成功
			if (xhr.readyState == 4) {
				if (xhr.status == 200) {
					// console.log(xhr.responseText);
					resolve(xhr.responseText);
					// console.log(resolve);
				} else {
					reject(xhr.responseText);
					// console.log(xhr.responseText);
				}
			}
		}
	})
}