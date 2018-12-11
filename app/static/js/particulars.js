var img_xr = (function () {
    var $shop_left = $(".shop_left");
    // console.log($shop_left);
    return {
        init() {
            this.event();
            this.getData();
        },
        event() {
            // var $vear = $(".versions color");
            // // console.log($(this));
            // $(".versions color").onclick = function () {
            //     console.log($(this));
            // };
            // $(".versions color").on("click", function () {

            //     var index = $(this).index();
            //     console.log(index);
            //     // $(".ol_list>ol li:eq(" + index + ")").addClass("_xiaotu").siblings().removeClass("_xiaotu");
            // })
        },
        getData() {
            sendAjax('static/json/particulars.json').then(res => {
                res = JSON.parse(res);
                console.log(res);
                if (res.code == 0) {
                    this.data = res.data;
                    this.insertData(res.data);
                } else {
                    alert("获取信息失败, 请查询网络状况");
                }
            });
        },
        insertData(data) {
            console.log(data);
            // 循环数组
            for (let i = 0; i < data.length; i++) {
                var $ul = document.createElement('ul');
                // console.log(1);
                $ul.className = 'f_left';
                $ul.innerHTML = `
                <li class="active"><img src="${ data[i].ac1}" /></li>
                <li><img src="${ data[i].ac2}" /></li>
                <li><img src="${ data[i].ac3}" /></li>
                <li><img src="${ data[i].ac4}" /></li>
                <li><img src="${ data[i].ac5}" /></li>
                <div class="_xuan"></div>
            `
            }
            $shop_left.append($ul);


            for (let i = 0; i < data.length; i++) {
                var $ul = document.createElement('ul');
                // console.log(1);
                $ul.className = 'f_right';
                $ul.innerHTML = `
        
                <li class="_datu"><img src="${ data[i].ac1}" /></li>
                <li><img src="${ data[i].ac2}" /></li>
                <li><img src="${ data[i].ac3}" /></li>
                <li><img src="${ data[i].ac4}" /></li>
                <li><img src="${ data[i].ac5}" /></li>   
            `
            }
            $shop_left.append($ul);

            for (let i = 0; i < data.length; i++) {
                var $div = document.createElement('div');
                // console.log(1);
                $div.className = 'ol_list';
                $div.innerHTML = `
                <ol>
                <li class="_xiaotu"><img src="${ data[i].xt1}" /></li>
                <li><img src="${ data[i].xt2}" /></li>
                <li><img src="${ data[i].xt3}" /></li>
                <li><img src="${ data[i].xt4}" /></li>
                <li><img src="${ data[i].xt5}" /></li>
                </ol>
            `
            }
            $shop_left.append($div);

        },
        setItem(data) {
        }
    }
}());



