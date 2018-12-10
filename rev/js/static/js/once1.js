"use strict";

var $tel = document.getElementById("tel");
var $span = document.querySelector('#change');
console.log($span); // console.log($tel);

$tel.onchange = function () {
  ajax({
    method: "post",
    url: "http://localhost:8888/githhub534241247/server/php/once1.php",
    data: {
      tel: this.value
    },
    success: function success(res) {
      console.log(res);

      if (res == "1") {
        $span.className = 'text-danger bg-danger';
        $span.innerHTML = '账号已存在！请重新注册！';
        return false;
      } else {
        $span.className = 'text-success bg-success';
        $span.innerHTML = '';
      }
    }
  });
};