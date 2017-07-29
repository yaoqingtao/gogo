var url = "http://h6.duchengjiu.top/shop/api_cart.php";
var parm = {
	token: localStorage.getItem("token")
};
$.get(url, parm, function(result) {
	//      document.write(result.message);
	console.log(result.data);
	var goodBox = '';
	result.data.forEach(function(obj) {

		goodBox += `
        	<tr id="xxxx" style="display:'' ;" >
			<td>
			<input type="checkbox" checked="checked" name="danxuan" id="" value="" /> </td>
			<td>
			<img id="src" src="${obj.goods_thumb}"/>
			<i id="sexian">"${obj.goods_name}"</i>
			</td>
			<td >
			<span>${obj.goods_price}</span>元
			</td>
			<td >
			<button id="minus">-</button>
			<input type="text" name="td" id="td" value="${obj.goods_number}" />
			<button id="plus">+</button>
			</td>
			<td><strong>${obj.goods_price}</strong>元 </td>
			<td><a id="xiaoshi" " href="#">删除</a></td>
		    </tr>
        `;
		$("table").append(goodBox)
		//商品++
		$("td #minus").click(function() {
			
			if(this.nextElementSibling.value<= 1) {
				this.nextElementSibling.value = 1
			}
		var ovalue= this.nextElementSibling.value =	this.nextElementSibling.value-1
		
        var opre=this.parentNode.previousElementSibling.children.innerHTML
         
        var onext=this.parentNode.nextElementSibling.childNode.innerHTML
        console.log(this.parentNode.nextElementSibling.children)
           onext=parseInt(eval(opre*onext))
           console.log(onext)
//	$(this).parent().next().children().html() = eval($(this).parent().children().prev().html() * $(this).next().val())
//			console.log($(this).parent().next().children().html())
		})
//		//商品--
//		$("td #plus").click(function() {
//			if($(this).prev().val() <= 1) {
//				$(this).prev().val() = 1
//			}
//			$(this).prev().val() - 1
////			$(this).parent().next().children().html() = eval($(this).parent().children().prev().html() * $(this).prev().val())
////			console.log($(this).parent().next().children().html())
//		});
	});
});