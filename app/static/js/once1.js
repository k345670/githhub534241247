
var $tel = document.getElementById("tel");
var $span = document.querySelector('#change');
console.log($span);
// console.log($tel);
$tel.onchange = function () {
    ajax({
        method: "post",
        url: "http://localhost:8888/githhub534241247/server/php/once1.php",
        data: {
            tel: this.value
        },
        success: function (res) {
            console.log(res);
            if (res == "1") {
                $span.className = 'text-danger bg-danger';
				$span.innerHTML = '账号已存在！请登录！';
                return false;
            }else{
            	$span.className = 'text-success';
				$span.innerHTML = '';
            }
        }
    })
}



