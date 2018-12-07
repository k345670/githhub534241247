
var $tel = document.getElementById("tel");
// console.log($tel);
$tel.onchange = function () {
    // 
    sendAjax("http://localhost/githhub534241247/server/php/once.php",
        {
            method: "POST",
            data: {
                tel: this.value
            }
        },
        // console.log({ tel: this.value })
    )
        .then(res => {
            console.log(res);
            if (res == "1") {
                alert('手机号已注册，请更换，谢谢！');
                return false;
            } else {
                return true;
            }
        })
}

// console.log($("tel"));
// $("tel").on("change", function () {
//     console.log(222);
// })
// $("tel").on('click', function () {
// console.log($(this));
    //     sendAjax("../../../server/php/once.php",
    //         {
    //             method: "POST",
    //             data: {
    //                 tel: this.value
    //             }
    //         },

    //     )
    //         .then(res => {
    //             // console.log(res);
    //             if (res == "1") {
    //                 alert('手机号已注册，请更换，谢谢！');
    //                 return false;
    //             }
    //         })
// })
// var $tel = document.getElementById("tel");
// console.log($tel);
// $tel.onchange = function () {
//     console.log(111);
// }