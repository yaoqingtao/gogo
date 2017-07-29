var search = location.search;
// console.log(search);
var i = search.lastIndexOf('=');
// console.log(i);
var gid = search.slice(i + 1);
console.log(gid);
$.get(PRODUCT_HOST + GOODS, {
	goods_id: gid
}, function(result) {
	// console.log(result.data);
	var obj = '';
	if(result.data.length == 2 || result.data.length == 1) {
		obj = result.data[0];
	}
	console.log(obj);
	var html = '';
	html = `    
                    <div class="container-body">
                    <img class="header-photo" src="${obj.goods_thumb}">
                    </div>
                    <div class="container-ahead">
                       <p><big>${obj.goods_name}</big></p>
                       <h3>￥${obj.price}</h3>
                       <p>${obj.goods_desc}</p>
                       <div class="header-box">
                       <button class="header-box-one" >-</button>
                       <input class="esx" type="text" value="1">
                       <button class="header-box-two">+</button>
                       </div>
                       <div class="body-box">
                       <button class="purchase">立即购买</button>
                       <button class="body-box-join">加入购物车</button>
                       </div>
                    </div>
        `;
	$('.detail-container').html(html);

	/*$(".header-box-one").click(function(){
		this.nextSibling.value--;
		
	})*/
	$(document).on('click', '.header-box-one', function() {
		this.nextElementSibling.value == 1 ? 1 : this.nextElementSibling.value--;
	});
	$(document).on('click', '.header-box-two', function() {
		this.previousElementSibling.value == 10 ? 10 : this.previousElementSibling.value++;
	});
	console.log($(".header-box-one"))

	$(document).on('click', '.purchase', function() {
		new Login(function(user) {
			$(".header-top-menu ul li:first-child").html("<a href='#'>" + user.username + "</a>");
		});
	});
	$(".body-box-join").click(function() {
		var url = "http://h6.duchengjiu.top/shop/api_cart.php?token=" + localStorage.getItem("token");
		var parm = {
			goods_id: gid,
			number: $(".body-box-join").val()
		};
		console.log(parm)
		$.post(url, parm, function(result) {
			console.log(result.message);
		});
			window.open("pusGo.html")
	})
});