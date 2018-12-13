var shop_car = (function () {
    var $div = document.querySelector('.shop_list');
    console.log($div);
    return {
        init() {
            this.getData();
            this.event();
        },
        event() {
            var _this = this;
            var $ul = document.querySelectorAll('ul');

            // $div.oninput = function (e) {
            //     e = e || window.event;
            //     var target = e.target || e.srcElement;
            //     var index = target.parentNode.parentNode.index;
            //     if (target.className === 's_count') {
            //         console.log(909);
            //     // 修改本地的数据
            //     // 获取当前数据
            //     // console.log(_this.data[index]);
            //     var data = _this.data[index];
            //     // console.log(_this.data[index]);
            //     // 修改对应数据的数量
            //     data.count = Number(target.value);
            //     // 更新本地数据
            //     localStorage.shopList = JSON.stringify(_this.data);
            //     // _this.setItem(data);
            //     // 修改小计
            //     _this.insertData(_this.data);
            // }

            // }

            $div.onclick = function (e) {

                e = e || window.event;
                var target = e.target || e.srcElement;
                var pNode = target.parentNode.parentNode;

                if (target.nodeName == 'BUTTON') {
                    _this.data.splice(pNode.index, 1);
                    console.log(_this.data);
                    pNode.remove();
                    localStorage.shopList = JSON.stringify(_this.data);
                }
                // var data = _this.data[0];
                // data.count = Number($(".s_count").val());
                // // 更新本地数据
                // localStorage.shopList = JSON.stringify(_this.data);
                // _this.setItem(data);
                // 修改小计
                //     _this.insertData(_this.data);
            }

            // $(".amount_right").click(function () {
            //     var $max = $(this).siblings('input').val();
            //     console.log($(this));
            //     $max++;
            //     console.log($max);
            // });

            $(".amount_right").on("click", function () {
                var index = $(this).parent().parent().index();
                // console.log($(this));
                var data = JSON.parse(localStorage.shopList);
                data[index].count++;
                localStorage.shopList = JSON.stringify(data);
                _this.insertData(data);
                _this.event();
            });
            $(".amount_left").on("click", function () {
                var index = $(this).parent().parent().index();
                // console.log($(this));
                var data = JSON.parse(localStorage.shopList);
                data[index].count--;
                localStorage.shopList = JSON.stringify(data);
                _this.insertData(data);
                _this.event();
            });
            $(".shop_list").on("input", function () {
                console.log(0000);
                if ($(".s_count").val() > 0 && $(".s_count").val() < 6) {
                    return $(".s_count").val();
                } if ($(".s_count").val() < 0) {
                    return $(".s_count").val() === 1;
                } if ($(".s_count").val() > 6) {
                    return $(".s_count").val() === 5;
                }
            });
        },
        getData() {
            var shopList = localStorage.shopList || '[]';
            shopList = JSON.parse(shopList);
            this.data = shopList;
            // console.log(shopList);
            this.insertData(shopList)

        },
        insertData(data) {

            $div.innerHTML = '';

            data.forEach((item, index) => {
                // console.log(item);
                // $ul.innerHTML = '';
                var $ul = document.createElement('ul');
                $ul.className = 'item';
                $ul.index = index;
                // console.log(index);
                $ul.innerHTML = `
                    <li><input type="checkbox"></li>
                    <li><img src="${ data[index].xt1}" style="width:100px;height:100px;"/></li>
                    <li>${ data[index].title}</li>
                    <li>￥${ data[index].max_price}</li>
                    <li class="fsl">
                    <a class="amount_left" href="javascript:;">-</a>
                    <input class="s_count" style="text-align: center;" value=${data[index].count} />
                    <a class="amount_right" href="javascript:;">+</a></li>
                    <li style="width:0px;">￥${ data[index].yh * data[index].count}</li>
                    <li style="width:0px;">${ data[index].min_price * data[index].count}</li>
                    <li style="color:red;width:40px;">￥${ data[index].min_price * data[index].count}</li>
                    <li>
                        <a href="javascript:;">加入到收藏夹</a>
                        <button style="background:#fff;
                        width: 90px;
                        height: 35px;
                        outline: none;
                        border: 1px solid #000;
                        border-radius: 5px;
                        margin-top: 5px;
                        color: red;">删除</button>
                    </li>
                `
                $div.appendChild($ul);
            })
        }
    }

}())





















// var shop = (function () {
//     var $div = document.getElementsByClassName('shop_list');
//     console.log($div);
//     return {
//         init() {
//             this.event();
//             this.getData();
//         },

//         getData() {
//             sendAjax('static/json/particulars.json').then(res => {
//                 res = JSON.parse(res);
//                 console.log(res);
//                 if (res.code == 0) {
//                     // 把商品数据存到shop对象里
//                     this.data = res.data;
//                     this.insertData(res.data);
//                 } else {
//                     alert("获取信息失败, 请查询网络状况");
//                 }
//             });
//         },
//         insertData(data) {
//             console.log(data);
//             // 循环数组
//             var $ul = document.createElement('ul');
//             for (let i = 0; i < data.length; i++) {
//                 $ul.className = 'item';
//                 // $li.index = i;
//                 $ul.innerHTML = `
//                 <li><input type="checkbox"></li>
//                 <li><img src="${ data[i].xt1}" /></li>
//                 <li>${ data[i].title}</li>
//                 <li>${ data[i].max - price}</li>
//                 <li><a href="javascript:;">-</a><input type="text" /><a href="javascript:;">+</a></li>
//                 <li>${ data[i].yh}</li>
//                 <li>${ data[i].jf}</li>
//                 <li>${ data[i].min - price}</li>
//                 <li>
//                     <a href="javascript:;">加入到收藏夹</a>
//                     <a href="javascript:;">删除</a>
//                 </li>
//                 `
//                 $div.append($ul);
//             }

//         },
//         // 把商品数据存储到本地
//         setItem(data) {
//             // 现获取原有数据
//             var shopList = localStorage.getItem('shopList') || '[]';
//             shopList = JSON.parse(shopList);
//             console.log(shopList, data);
//             // 判断购物数据中, 是否存在当前商品
//             for (var i = 0; i < shopList.length; i++) {
//                 if (data.id == shopList[i].id) {
//                     // 此商品已经存在
//                     shopList[i].count += data.count;
//                     break;
//                 }
//             }
//             if (i == shopList.length) {
//                 // 商品不存在
//                 shopList.push(data);

//             }
//             // shopList[i].count += data.count;
//             // 在把全部数据存到本地
//             localStorage.shopList = JSON.stringify(shopList);
//             // console.log(shopList);

//         }
//     }
// }())
