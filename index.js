console.log("hello");
// 获取元素
let el = document.querySelector(".ct-news .roll-wrapper .roll-box");
console.log(el)


// element(el)
// 封装功能
function _element(elem,iHight){
	// 使用定时器
	var offset = 0
	// var height=30
	var tim = setInterval( function(){
		offset += 5	
		elem.style.top=`-${offset}px`
		if( offset >iHeight){
			clearInterval( tim )
			elem.children[0].remove()
			elem.style.top=`-${0}px`
		}
	},200)
}

// 隔一段时间移动一行
// var iHeight = 0;
// setInterval(function(){
// 	if(iHeight>90){
// 		iHeight=0;
// 	}
// 	element(el,iHeight)
// 	iHeight += 30;

// },4000)

// 隔一段时间移动一行
var iHeight = 0;
var t1 = setInterval(function(){
	var newline = el.children[0].cloneNode(true)
	el.append(newline)
	_element(el,30)

},3000)




// 滚动轮播图
// var el2 = document.querySelector(".ct-news .screen  .print .shot  ul")
// console.log("el2 =  ", el2)

// var t2 = setInterval(function(){
//     // 01-复制第一行元素，加到最后面
//     console.log("第一个元素", el.children[0])
//     // 复制元素
//     var newline = el2.children[0].cloneNode(true)
//     // 把复制的元素加到最后面
//     el2.append(newline)
//     // 02-滚动到显示第二张
//     // 1100 是元素的宽度
//     _animation_left(el2, 1100)

// }, 3000)    // 数字控制每次滚动的间隔


// function _animation_left(elem , iLeft){
//     var offset = 0 ;

//     // 使用定时器
//     var tim = setInterval( function(){
//         offset += 150
//         // 修改 left 属性模拟滚动 -150px
//         elem.style.left = `-${offset }px`
//         if( offset > iLeft ){
//             // 当offset  达到一定程度的时候停止
//             clearInterval( tim )
//             // 停止的时候，把已经滚动完的元素删除掉
//             elem.children[0].remove()
//             elem.style.left = `-${0}px`
//         }
//     }, 200)  // 每20毫秒执行一次
// }

