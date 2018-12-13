var img_xr = (function () {
    var $shop_left = $(".shop_left");
    // var $ul = document.querySelector('ul');

    return {
        init() {
            this.event();
            this.getData();
        },
        event() {

            // $ul.onclick = function (e) {
            //     e = e || window.event;
            //     var target = e.target || e.srcElement;
            //     if (target.className === 'shop_buy') {
            //         // 获取商品数量
            //         // 获取当前li
            //         var father = target.parentNode;
            //         // 拿到的值是字符串, count应该是number类型的
            //         var count = father.querySelector('.count').value;
            //         // 从商品数据中,获取对应这一个商品的数据
            //         _this.data[father.index].count = Number(count);
            //         _this.setItem(_this.data[father.index]);
            //     }
            // }
        },
        getData() {
            sendAjax('static/json/particulars.json').then(res => {
                res = JSON.parse(res);
                // console.log(res);
                if (res.code == 0) {
                    this.data = res.data;
                    // this.insertData(res.data);
                    console.log(this.insertData(res.data));
                } else {
                    alert("获取信息失败, 请查询网络状况");
                }
            });
        },
        insertData(data) {
            console.log(data[1]);
            // console.log(res.data);
            // console.log($(this).data.eq(0));

            var $div = document.createElement('div');
            // var $ul = document.createElement('ul');
            // 循环数组
            for (let i = 0; i < data.length; i++) {
                var $ul = document.createElement('ul');
                $ul.className = 'f_left';
                $ul.innerHTML = `
                <li class="active"><img src="${ data[1].ac1}" /></li>
                <li><img src="${ data[1].ac2}" /></li>
                <li><img src="${ data[1].ac3}" /></li>
                <li><img src="${ data[1].ac4}" /></li>
                <li><img src="${ data[1].ac5}" /></li>
                <div class="_xuan"></div>
            `
            }
            $shop_left.append($ul);
            for (let i = 0; i < data.length; i++) {
                var $ul = document.createElement('ul');
                $ul.className = 'f_right';
                $ul.innerHTML = `
                <li class="_datu"><img src="${ data[1].ac1}" /></li>
                <li><img src="${ data[1].ac2}" /></li>
                <li><img src="${ data[1].ac3}" /></li>
                <li><img src="${ data[1].ac4}" /></li>
                <li><img src="${ data[1].ac5}" /></li>   
            `
            }
            $shop_left.append($ul);

            for (let i = 0; i < data.length; i++) {
                $div.className = 'ol_list';
                $div.innerHTML = `
                <ol>
                <li class="_xiaotu"><img src="${ data[1].xt1}" /></li>
                <li><img src="${ data[1].xt2}" /></li>
                <li><img src="${ data[1].xt3}" /></li>
                <li><img src="${ data[1].xt4}" /></li>
                <li><img src="${ data[1].xt5}" /></li>
                </ol>
                
            `
            }
            $shop_left.append($div);

            var $h1 = $(".right_top h1");
            $h1.html(`${data[1].title}`);
            var $span1 = $(".span_1");
            var $span2 = $(".span_2");
            $span1.html(`￥${data[1].min_price}`);
            $span2.html(`￥${data[1].max_price}`)
        }
    }
}());



