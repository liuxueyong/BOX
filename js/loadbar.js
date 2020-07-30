$(function () {
	var img = $("img");//首先获取所有的Img对象
	var num = 0;//定义一个变量，赋值给b标签用
	img.each(function(i){//遍历获取到的所有img
		var oImg = new Image();//new一个新对象
		oImg.onload = function(){//使用onload方法，在加载完成后执行
			oImg.onload = null;//首先清除掉缓存
			num++;//每次加载的过程中num++，即执行次数
			$(".loading b").html(parseInt(num/$("img").size()*100)+"%");//改变b标签的内容，用num除以img的个数，再乘以100，再取整，这就是加载的百分数
				if(num >= i){
					$(".loading").fadeOut();//当num的值大于等于个数时隐藏
				}
			}
			oImg.src = img[i].src;//预加载，先指定一个img.src，当onload成功以后可以将数据指定到某一个元素或者图片上，或者返回一个结果
		})
	})
	