function ss(){
	var myInputFirst='';
$(".header-search-content").find("input:first").keyup(function(){
	myInputFirst=$(".header-search-content").find("input:first").val();
	localStorage.setItem("myInputFirst",myInputFirst);
	console.log(myInputFirst)
});

$(".header-search-content").find("input:last").click(function(){
	window.open("search.html")
});
//new Good(PRODUCT_HOST + GOODS, {search_text:localStorage.getItem('myInputFirst')}, $(".goods-container"), function(result) {
//			 console.log(result)
//		});
$.get(PRODUCT_HOST+GOODS,{search_text:localStorage.getItem('myInputFirst')},function(result){
	console.log(result)
	var goodBox='';
	result.data.forEach(function(obj){
        var space = 20;
        var colume = 5;
        var width = (1200-space*(colume-1))/colume;
        goodBox +=`
        	<div class='good-box' data-id='${obj.goods_id}'>
        		<p class='good-name'>${obj.goods_name}</p>
        		<p><img class="oimg" width='30px'height='40px'  src='../img/TB1czH5PXXXXXbNXpXXXXXXXXXX-136-122.png'></p>
        		<p>
        			<img width='${width}px' src='${obj.goods_thumb}' alt=''>
        		</p>
        		<h3 class='goods-price'>￥${obj.price}</h3>
        		<p class='goods-desc'>${obj.goods_desc}</p>
        	</div>
        `; 
        $(".search-con").html(goodBox);
		 $('.good-box').css({
			width: width + "px",
			height: "384px",
			"box-sizing": "border-box",
			float: "left",
			overflow: "hidden",
			position: "relative",
			margin: "10px 10px 0 0"
		});
        $('.oimg').css({
			position: "absolute",
			padding: "0px 10px",
			"z-index": " 999"
		})
		$('.good-name').css({
			position: "absolute",
			height: "20px",
			"line-height": "20px",
			display: "none",
			"background-color": "red",
			"text-overflow": "ellipsis",
			"white-space": "nowrap",
			overflow: "hidden",
			"font-size": "20px",
			padding: "0px 10px",
			"z-index": " 0"
		});
        $('.good-box').hover(function () {
            $(this).children().css("display", "block");
			$(this).css("border", "2px #ff4411 solid");;
        },function () {
            $(".good-name").css("display", "none");
			$(this).css("border", "none");
        });
	});
});
$(document).on('click','.good-box',function () {
        var detId=$(this).data("id");
        window.open("details.html?goods_id="+detId);
        // console.log(detId);
});
}
ss()


