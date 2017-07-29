
var $=jQuery.noConflict();
(function(){
	function Login(success){
		this.showLogin(success);
		
	}
	Login.prototype.showLogin=function(success){
		var longinContainer=$("<div class='lognContainer'></div>")
		var closeButton=$("<p>关闭</p>")
		var usernameInput=$("<p>用户名:<input type='text' placeholder='请输入用户名'/></p>")
		var passworldInput=$("<p>密&nbsp;&nbsp;码:<input type='password' placeholder='请输入密码'/></p>")
		var longinButton=$("<button>登录</button>")
		longinContainer.css({
			width:"300px",
			height:"200px",
			"background-color":"#912020",
			border:"5px #ffd42e solid",
			position:"absolute",
			top:"50%",
			left:"50%",
			"border-sizing":"border-box",
			"margin-left":"-200px",
			"margin-top":"-150px",
		})
		closeButton.css({
			float:"right",
			color:"white",
			padding:"5px"
		})
		closeButton.click(function(){
			longinContainer.fadeOut(500,function(){
				longinContainer.remove()
//				success(date.date);
			})
		})
		longinButton.click(function () {
			$.post(PRODUCT_HOST+LOGIN,{status:"login",username:usernameInput.children().val(),password:passworldInput.children().val()},function (data) {
                    console.log(data.data.token);
                    localStorage.setItem('token',data.data.token)
                    if (data.code == 0){
                    	
                        longinContainer.slideUp(500,function () {
                            longinContainer.remove();
                            success(data.data);
                        });

                    }else {
                        alert(data.message);
                    }
                }
            );
       });
		usernameInput.css({
			color:"white",
			margin:"0px 20px",
			padding:"30px 0"
		})
		passworldInput.css({
			color:"white",
			margin:"0px 20px",
			padding:"10px 0"
		})
		longinButton.css({
			margin:"5px 110px",
			"background-color":"greenyellow ",
			padding:"5px 15px"
			
		})
		longinContainer.append(closeButton);
		longinContainer.append(usernameInput);
		longinContainer.append(passworldInput);
		longinContainer.append(longinButton);
        $(document.body).append(longinContainer);
	}
	window.Login=Login;
})();

