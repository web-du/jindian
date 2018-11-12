//by zyp
;(function($, window, document, undefined) {
    var LuckDraw = function(ele, opt) {
        this.$element = ele,
        this.defaults = {
			row:3, //行
			column:3, //列
			spacing:0,
			click :null,
			time : 3,
            end:function(e){}
        },
		this.target,
        this.options = $.extend({},this.defaults, opt);
    }
    LuckDraw.prototype = {
        init: function() {
			var $this = this.$element;
			var row = this.options.row;
			var col = this.options.column;
			var spacing = this.options.spacing;
			var click = this.options.click;
			var allNumber = 2 * (row + col) - 4;
			var line = row-2;//除去上下de行数
			var length = $this.children('li').length;
			var options = this.options;

			if(length < allNumber){
				for(var i=length;i<=(allNumber-length);i++){
					$this.append("<li></li>");
				}
			}
			var children = $this.children('li');
			var width = children.eq(0).width() || 0;
			var height = children.eq(0).height() || 0;

			//元素初始化
			$this.css({
				position:'relative',
				width:col * width + (col-1) * spacing,
				height:row * height + (row-1) * spacing
			});
			children.css({
				position:'absolute'
			});


			if(line == 0){
				initOne();
			}else{
				initTwo();
			}

			//初始化函数
			//此时分成4个部分，上、右、下、左
			//上： 0  ~  col-1
			//右： col ~ col+line
			//下： col+line+1 ~ 2*col+line-1
			//左： else
			//如果只有两行
			//此时分成4个部分，上、右、下、左

			function initOne(){
				children.each(function(index){
					if(index >=0 && index <= (col-1)){
						$(this).css({
							top:0,
							left: index * width + index * spacing
						});
					}else{
						$(this).css({
							bottom:0,
							right: index%col*width
						});
					}
				});
			}
			//如果大于两行
			function initTwo(){
				children.each(function(index){
					if(index >=0 && index <= (col-1)){
						$(this).css({
							top:0,
							left: index * width + index * spacing
						});
					}else if(index >= col && index <= (col+line-1)){
						$(this).css({
							top:((index+1-col))*(height+spacing),
							right: 0
						});
					}else if(index >= (col+line) && index <= (2*col+line-1)){
						$(this).css({
							bottom:0,
							right:(index-((col+line)))*(width+spacing)
						});
					}else{
						$(this).css({
							left:0,
							bottom:(index-(2*col+line-1))*(height+spacing)
						});
					}
				});
			}


			var target = $this.target || Math.floor(Math.random()*allNumber+1); //目标，指定或随机
			var ix = 0; //位置
			var stop ;
			var flg = false; //抽奖是否正在运行
			/*
				加速度公式
				v1 = v0 + a*t;注意加速度的v代表时间
				此时的t可以我们自己定义，所以是常量，所以只需要求a的值
			*/
			var a = -25.0;
			var v0 = 300.0;
			var t = 0.0 , v ;
			var time = this.options.time*1000;//匀速运行的时间，单位秒

			if(click == 'now'){
                if(!flg){
                    flg = true;
                    target = $this.target || Math.floor(Math.random()*allNumber+1);
                    speedUp();
                }else{
                    return ;
                }
			}else{
                $(click).on('click',function(){
                    if(!flg){
                        flg = true;
                        target = $this.target || Math.floor(Math.random()*allNumber+1);
                        speedUp();
                    }else{
                        return ;
                    }
                });
			}


			//加速
			function speedUp(){
				runner(ix);
				if(v <= 40){
					clearTimeout(stop);
					v = 40;
					t = 0.0;
					uniform(); //跳转到匀速
				}else{
					t++;
					v = v0 + a*t;
					stop = setTimeout(speedUp,v);
				}
			}
			//匀速
			function uniform(){
				stop = setTimeout(uniform,v);
				if(t == time/40){
					clearTimeout(stop);
					t = 0.0;
					speedDown();
				}else{
					t++;
				}
				runner(ix);
			}
			//减速
			function speedDown(){
				var stop3 = setTimeout(speedDown,v);
				if(v >= 300){
					v = 300;
					if(ix == target-1){
						clearTimeout(stop3);
						options.end(target);
						flg = false;
					}
				}else{
					t++;
					v = v - a*t;
				}
				runner(ix);
			}
			//ix++
			function runner(i){
				children.removeClass('on').eq(ix).addClass('on');
				i++;
				if(i == allNumber){
					ix = 0;
				}else{
					ix = i;
				}
			}
		},
		setTarget: function(options){
			var $this = this.$element;
			$this.target = options;
		}
    }
    $.fn.myLuckDraw = function(options,target) {
        var Ld = new LuckDraw(this,options);
		Ld.setTarget(target);
		Ld.init();
        return this;
    }
})(jQuery,window,document);

$(function(){

	// var tar = 5;
	$('.cj1').myLuckDraw({
		width:100, //宽
        height:100, //高
		row : 3, //行
		column : 3, //列
		spacing: 5, //空隙
		time: 3 ,//匀速运动的时间
		end:function(e){
			//抽奖执行完毕的回调函数,参数e为获奖编号
			//因为这里是指定的，所以e == 12
			// if(e == 5){
			// 	$(".myBox li").eq(e-1).addClass("now")
			// }
            //
			// $(".myBox").on("webkitAnimationEnd","li",function(){
			// 	$(this).addClass('over')
			// })
		}
	},0); //这里tar是确定想要抽奖的目标是几号


});