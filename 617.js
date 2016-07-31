$(function(){
       //创建一个新的数组保存图片和a连接的href地址
   var hyp=[
      {img:"mo1.jpg",link:"http://baidu.com"},
      {img:"mo2.jpg",link:"http://baidu.com"},
      {img:"mo3.jpg",link:"http://baidu.com"},
      {img:"mo4.jpg",link:"http://baidu.com"},
      {img:"mo5.jpg",link:"http://baidu.com"},
      {img:"mo6.jpg",link:"http://baidu.com"},
      {img:"mo7.jpg",link:"http://baidu.com"},
      {img:"111.png",link:"http://baidu.com"}


   ]
   /*点击换一批的按钮*/
  $(".button").on("click",function(){
          /* 把bure下面的img里的src替换成数组里的img*/
  	    $(".bure img").attr("src",function(i,oldsrc){
  	    	    return hyp[i].img;
  	    })
        /* 把bure下的a连接替换成数组里的link路径地址*/
  	     $(".bure a").attr("href",function(i,oldsrc){
  	    	    return hyp[i].link;
  	    })
  });
 
  /*点击table里的thead里的input的checkbox当全选复选框被选中时*/
  $(".table thead input").on("click",function(){
    /*tbody里的input里的状态都被选中 checked指复选框的状态都被选中*/
  	$(".table tbody input:checkbox").prop("checked",$(this).prop("checked"));
  })
  /*当点击tbody里的input复选框时*/
  $(".table tbody input:checkbox").on("click",function(){
    /*声明一下tbody下面的复选框的数量传给一个变量*/
  	var len=$(".table tbody input").length;
    /*判断如果tbody里的input复选框里的状态都为选中时*/
  	if($(".table tbody input:checked").length===len){
      /*把全选框的状态也成为选中状态*/
  		$(".table thead input").prop("checked",true);
      /*否则全选框的状态为false */
  	}else{
  		$(".table thead input").prop("checked",false);
  	}

  })
  /*当在search输入框里按下键盘时*/
$(".search").on("keyup",function(){
  /*声明一下按下的值*/
	var key=$(this).val();
	/*删除一个hide类*/
	$(".table tbody tr").removeClass("hide");
  /*如果按下的值为空时  则return 不执行下面的代码*/
	if(key===""){
		return;
	}
  /*当输入的值和其他tbody tr里的值不一样时 给其他的值添加一个hide类 
   hides属性在css里是移除信息的   contains包含的意思*/
	$(".table tbody tr").not(":contains("+key+")").addClass("hide");
})


   /*动画 控制test集合的height为随机数  */
/*setInterval(function(){*/
  $(".test").height(function(){
  	return Math.floor(Math.random()*300+3);
  })
   
/*,200)};*/



   /*点击bure下的li   e参数*/
  $(".bure li").on("click",function(e){
  /*去掉默认样式*/
  e.preventDefault();
  /*给cart添加一个类*/
  $(".cart").addClass("show");
  /*cart.rongqi.img.src替换成了(this指的是bure里)得到img里的src*/
  $(".cart .rongqi img").attr("src",$(this).find("img").attr("src"));
  /*记录当前被点击图片的下标*/
  $(".cart").attr("index",$(this).index());

  })
  /*点击关闭按钮 把cart里的show类删除掉 show在css里是显示窗帘的 */
  $(".cart .close").on("click",function(e){
    e.stopPropagation();
    $(".cart").removeClass("show");
  })
  /*把bure里的img传给声明的变量*/
     var imgs=$(".bure img");
 /*   $(this).attr("index",$(this).index());*/
    /*当鼠标按下时取消它的默认样式*/
     $(".cart").on("mousedown",function(e){
      e.preventDefault();
     })
     /*当点击窗帘时*/
    $(".cart").on("click",function(e){
      /*把获取到的下标传给声明的index*/
    var index=parseInt($(this).attr("index"))
    /*如果当鼠标里浏览器的X轴的位置大于屏幕的宽的二分之一时*/
    if(e.clientX>$(this).outerWidth(true)/2){
      /*下标加1 更换下一张图片*/
      index+=1;
    }else{
      /*如果当鼠标里浏览器的X轴的位置小于屏幕的宽的二分之一时
       下标-1 更换上一张图片*/
     index-=1;
    }
    /*如果下标等于图片的数量时*/
    if(index===imgs.length){
     /*弹出一个8秒的动画提示*/
     $(".last").removeClass("guan");
     setTimeout(function(){
      $(".last").addClass("guan");
      },800)
      /*return 不执行下面代码  */
      return;
    }else{
      $(".last").addClass("guan");
    }
    /*如果下标等于-1时*/
    if(index===-1){
      /*弹出一个8秒提示窗口*/
     $(".first").removeClass("guan");
     setTimeout(function(){
      $(".first").addClass("guan")
     },800)
     /*不执行下面代码*/
      return;
    }else{
      $(".first").addClass("guan")
    }
    /*替换cart下的下标*/
    $(".cart").attr("index",index);
    /*把cart下的图片src替换成bure下的li下的img的下一个下标的src*/
    $(".cart img").attr("src",$(".bure li").find("img").eq(index).attr("src"));
  })
})




