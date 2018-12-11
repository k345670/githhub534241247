
var $tel = document.getElementById("tel");
var $span = document.querySelector('#change');
var $adl = document.getElementById("denglu_a");

console.log($span);
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
                $span.className = 'text-danger bg-danger';
                // $adl.className = "text-danger bg-danger";
                $span.innerHTML = `
                账号已存在！请直接
                <a href="http://localhost/githhub534241247/app/register.html"
                >登陆</a>
                !
                `;
                // $span.innerHTML = '账号已存在！请直接' + "<a src='http://localhost/githhub534241247/app/register.html'>登录!</a>";
                return false;
            } else {
                $span.className = 'text-success';
                $span.innerHTML = '';
            }
        }
    })
}



