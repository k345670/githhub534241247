
var $tel = document.getElementById("tel");
// console.log($tel);
$tel.onchange = function () {
    ajax({
        method: "post",
        url: "http://localhost/githhub534241247/server/php/once1.php",
        data: {
            tel: this.value
        },
        success: function (res) {
            console.log(res);
            if (res == "1") {
                alert('手机号已注册，请更换，谢谢！');
                return false;
            } else {
                return true;
            }
        }
    })
}



