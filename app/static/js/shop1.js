var shop = (function () {
    var $ul = document.querySelector('#submit');
    return {
        init() {
            this.event();
            this.getData();
        },
        event() {
            var _this = this;
            $ul.onclick = function (e) {
                e = e || window.event;
                var target = e.target || e.srcElement;
                if (target.className == "shop_buy") {
                    var count = document.querySelector('.amount_nume').value;
                    _this.data.count = Number(count);
                    _this.setItem(_this.data);
                }
            }
        },
        getData() {
            sendAjax('static/json/particulars.json').then(res => {
                res = JSON.parse(res);
                if (res.code == 0) {
                    // 把商品数据存到shop对象里
                    this.data = res.data[1];
                    // console.log(res.data[1]);
                    this.insertData(res.data);
                } else {
                    alert("获取信息失败, 请查询网络状况");
                }
            });
        },
        insertData(data) {
            // console.log(data);
            // // 循环数组
            // for (let i = 0; i < data.length; i++) {
            //     var index = i;
            // }
        },
        // 把商品数据存储到本地
        setItem(data) {
            // 现获取原有数据
            console.log(data);
            var shopList = localStorage.getItem('shopList') || '[]';
            shopList = JSON.parse(shopList);
            // 判断购物数据中, 是否存在当前商品
            for (var i = 0; i < shopList.length; i++) {
                if (data.id == shopList[i].id) {
                    // 此商品已经存在
                    shopList[i].count += data.count;
                    console.log(shopList[i]);
                    break;
                }
            }
            if (i == shopList.length) {
                // 商品不存在
                shopList.push(data);
                console.log(data);

            }
            // shopList[i].count += data.count;
            // 在把全部数据存到本地
            localStorage.shopList = JSON.stringify(shopList);
            // console.log(shopList);

        }
    }
}())
