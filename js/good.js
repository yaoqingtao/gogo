(function() {
	function GoodItem(obj) {
		this.des = obj;

		var space = 20;
		var colume = 5;
		var width = (1200 - space * (colume - 1)) / colume;

		this.item = $("<div class='good-box' data-id='"+obj.goods_id+"'></div>");
		var name = $("<p class='good-name'>" + obj.goods_name +
			"</p>");
		var oimg = $("<p><img width='30px'height='40px'  src='../img/TB1czH5PXXXXXbNXpXXXXXXXXXX-136-122.png'></p>")
		var other = $("<p><img width='" + width + "px' src='" + obj.goods_thumb +
			"' alt=''></p><h3>￥" + obj.price + "</h3><div>" + obj.goods_desc +
			"</div>");
		this.item.append(oimg)
		this.item.append(name);
		this.item.append(other);
		oimg.css({
			position: "absolute",
			padding: "0px 10px",
			"z-index": " 999"
		})
		this.item.css({
			width: width + "px",
			height: "384px",
			"box-sizing": "border-box",
			float: "left",
			overflow: "hidden",
			position: "relative",
			margin: "10px 10px 0 0"
		});

		name.css({
			position: "absolute",
			height: "20px",
			"line-height": "20px",
			display: "none",
			"background-color": "red",
			"text-overflow": "ellipsis",
			"white-space": "nowrap",
			overflow: "hidden",
			"font-size": "20px",
			padding: "0px 10px"
		});

		this.item.hover(function() {
			$(this).children().css("display", "block");
			$(this).css("border", "2px #ff4411 solid");
		}, function() {
			$(".good-name").css("display", "none");
			$(this).css("border", "none");
		});

	}
	GoodItem.prototype.click = function(callback) {
		this.item.on("click", this, callback)
		return this
	}

	function Good(url, parm, superView, action) {
		this.loadData(url, parm, superView, action);
		this.goodDetail(url)
	}
	Good.prototype.loadData = function(url, parm, superView, action) {
		$.get(url, parm, function(result) {
			if(result.code == 0) {
				this.showGoodsView(result.data, superView, action);
			}
		}.bind(this));

	}
	Good.prototype.showGoodsView = function(goods, superView, action) {
		console.log(superView)
		goods.forEach(function(data) {
			superView.append(new GoodItem(data).click(action).item)
		})
	}
	//商品详情
	Good.prototype.goodDetail = function(url) {
		$(document).on('click', '.good-box', function() {
			var detId = $(this).data("id");
			 console.log(detId);
			 window.open("html/details.html?goods_id="+detId)
			
		});
	}
	var myInputFirst='';
$(".header-search-content").find("input:first").keyup(function(){
	myInputFirst=$(".header-search-content").find("input:first").val();
	localStorage.setItem("myInputFirst",myInputFirst);
	console.log(myInputFirst)
});

$(".header-search-content").find("input:last").click(function(){
	window.open("html/search.html")
});
	window.Good = Good;

})()