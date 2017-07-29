function init() {
	$(".header-top-logoin").click(function() {
		new Login(function(user) {
			$(".header-top-menu ul li:first-child").html("<a href='#'>" + user.username + "</a>");
		});
	});
	$("#login").click(function() {
		new Login(function(user) {
			$(".header-top-menu ul li:first-child").html("<a href='#'>" + user.username + "</a>");
		});
	});
	//导航
	new Navigater().createView(PRODUCT_HOST + PRODUCT_TYPE, $(".main-nav-container"), function(event) {
		console.log(event);
      $(".goods-container").html("")
		
		new Good(PRODUCT_HOST + GOODS, {cat_id: event.data.id,page: 1,
			pagesize: 10}, $(".goods-container"), function(event) {
			 
		});
	});

	new corouselView.Corouse("#left-course", [{
		imagePath: "img/hot1.jpg"
	}, {
		imagePath: "img/hot2.jpg"
	}], 200, 400).putSuperView().startTimer(3 * 1000).createControlButton();

	new corouselView.Corouse("#mid-course", [{
		imagePath: "img/TB1jT3mRVXXXXXnXXXXXXXXXXXX-750-340.jpg"
	}, {
		imagePath: "img/TB1BunHRVXXXXagaXXXXXXXXXXX-750-340.jpg"
	}], 750, 400).putSuperView().startTimer(3 * 1000, function() {
		var r = parseInt(Math.random() * 256);
		var g = parseInt(Math.random() * 256);
		var b = parseInt(Math.random() * 256);
		$(".main-course").css("background-color", "rgb(" + r + "," + g + "," + b + ")")
	});
	new Good(PRODUCT_HOST + GOODS, null, $(".goods-container"), function(event) {
		console.log(event.data);
	});

}
init();