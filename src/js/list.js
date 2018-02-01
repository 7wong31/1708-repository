// 列表
// !function(){
// 	console.log('列表');
// }();

require(['config'],function(){
	// 建议：有返回值的写前面
	require(['jquery','carousel','zoom'],function($,ca){
		console.log('name:',ca.type($));
		$('.box').gdsZoom({
			position:'bottom'
		})
	})

});
