(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{266:function(t,s,n){"use strict";n.r(s);var a=n(19),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"查看滚动条"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#查看滚动条"}},[t._v("#")]),t._v(" 查看滚动条")]),t._v(" "),n("p",[t._v("查看滚动条的滚动距离\n"),n("code",[t._v("window.pageXOffset/pageYOffset(IE8及IE8以下不兼容)")]),t._v(" "),n("code",[t._v("document.body/documentElement.scroll")]),t._v("    Left/scollTop\n(兼容性比较混乱,同时取两个值相加,因为不可能存在两个同时有值)")]),t._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("window"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pageYOffset  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//滚动条滚动y的距离")]),t._v("\nwindow"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pageXOffset  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//横向滚动条X的距离")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//IE8及IE8以下的浏览器")]),t._v("\ndocument"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scrollLeft"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Top\ndocument"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("documentElement"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scrollLeft"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Top\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//上面的方法在此浏览器上有值，下面一定为0")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//兼容性写法")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//document.body.scrollLeft + docuemnt.documentElement.scrollLeft")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br")])]),n("h2",{attrs:{id:"封装函数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#封装函数"}},[t._v("#")]),t._v(" 封装函数")]),t._v(" "),n("p",[t._v("封装一个兼容性方法,求滚动轮滚动离getScrollOffset()")]),t._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getScrollOffset")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("window"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pageXOffset"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                x"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" window"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pageXOffset"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                 y"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" window"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pageYOffset\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\nx"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" document"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scrollLeft "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" docuemnt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("documentElement"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scrollLeft"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\ny"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" document"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scrollTop "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" document"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("documentElement"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scrollTop\n             "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getScrollOffset")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br")])]),n("h2",{attrs:{id:"查看可视区窗口"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#查看可视区窗口"}},[t._v("#")]),t._v(" 查看可视区窗口")]),t._v(" "),n("p",[t._v("查看可视区窗口的尺寸,编写的html文档部分\n"),n("code",[t._v("window.innerWidth/innerHeight")])]),t._v(" "),n("p",[t._v("IE8及IE8以下不兼容\n"),n("code",[t._v("document.documentElement.clientWidth/clientHeight")]),t._v("\n标准模式下，任何浏览器都兼容(声明文档类型)")]),t._v(" "),n("p",[n("code",[t._v("doument.body.clientWidth/clientHeight")]),t._v("\n适用于怪异模式下的浏览器(混杂模式)")]),t._v(" "),n("p",[t._v("标准模式:DOCTYPE html--\x3eDTD\n怪异模式:删除了文档声明")]),t._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("查看浏览器是否为标准模式或怪异/混杂模式")]),t._v(" "),n("p",[t._v("标准模式"),n("code",[t._v("doucment.compatMode CSS1compat")]),t._v("\n怪异模式"),n("code",[t._v("document.compatMode BackCompat")])])]),t._v(" "),n("h2",{attrs:{id:"封装函数-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#封装函数-2"}},[t._v("#")]),t._v(" 封装函数")]),t._v(" "),n("p",[t._v("封装兼容性方法,返回浏览器视口尺寸"),n("code",[t._v("getViewportOffset()")])]),t._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getViewportOffset")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("widow"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerWidth"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            w"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" window"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerWidth"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            h "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" window"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerHeight\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("document"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("compatMode "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"BackCompat"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            w"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" document"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("clientWidth"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            h"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" document"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("clientHeight\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            w "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" document"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("documentElement"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("clientWidth"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            h "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" document"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("documentElement"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("clientHeight\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getViewportOffset")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br")])]),n("h2",{attrs:{id:"查看元素的几何尺寸"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#查看元素的几何尺寸"}},[t._v("#")]),t._v(" 查看元素的几何尺寸")]),t._v(" "),n("p",[n("code",[t._v("dom元素.getBoundingClientRect()")]),t._v(";\n兼容性很好,该方法返回一个对象,对象里面有left,top,right,bottom等属性。left和top代表该元素左上角的X和Y坐标,right和bottom代表元素右下角的X和Y坐标")]),t._v(" "),n("p",[t._v('height和width属性老版本IE并未实现(可以用right-left和bottom-top)\n返回的结果并不是"实时的"(用一个参数接收)修改完方块的位置后再次调用参数的值不变')]),t._v(" "),n("p",[t._v("##查看元素的尺寸\n(查看元素的宽高像素,"),n("code",[t._v("访问的是视觉上的尺寸``包含padding")]),t._v("等大小)\n"),n("code",[t._v("dom.offsetWidth")]),t._v(" "),n("code",[t._v("dom.offsetHeight")])]),t._v(" "),n("h2",{attrs:{id:"查看元素的位置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#查看元素的位置"}},[t._v("#")]),t._v(" 查看元素的位置")]),t._v(" "),n("p",[t._v("(对于无定位父级的元素，返回相对于文档的坐标。对于有定位父级的元素，返回相对于最近的有定位的父级的坐标,并不是针对于两个都是定位元素的,只要父级有定位,就相对于父级而计算)\n"),n("code",[t._v("div.offsetLeft")]),t._v(" "),n("code",[t._v("div.offsetTop")])]),t._v(" "),n("p",[n("code",[t._v("dom.offsetParent")]),t._v("\n返回最近的有定位的父级，如无，返回body,\nbody.offsetParent返回null")]),t._v(" "),n("h2",{attrs:{id:"让滚动条滚动"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#让滚动条滚动"}},[t._v("#")]),t._v(" 让滚动条滚动")]),t._v(" "),n("p",[t._v("window上有三个方法\n"),n("code",[t._v("scroll()&&scrollTo()")]),t._v(",\n"),n("code",[t._v("window.scroll(0,100)")]),t._v(";让滚动条滚动到相应的xy坐标。")]),t._v(" "),n("hr"),t._v(" "),n("p",[n("code",[t._v("scrollBy();")]),t._v(" "),n("code",[t._v("window.scrollBy(0,10)")]),t._v(";\n跟上面两个方法用途一样,但是此方法会累加坐标,上面两个不会")]),t._v(" "),n("h2",{attrs:{id:"脚本化css"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#脚本化css"}},[t._v("#")]),t._v(" 脚本化CSS")]),t._v(" "),n("h2",{attrs:{id:"读写元素css属性"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#读写元素css属性"}},[t._v("#")]),t._v(" 读写元素css属性")]),t._v(" "),n("p",[n("code",[t._v("dom.style.prop")])]),t._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("读写元素CSS属性")]),t._v(" "),n("p",[t._v("1.可读写***行间的样式***,不是头部的样式,也不是引入的样式,没有兼容性问题,碰到float这样的保留字属性,前面应加css,"),n("code",[t._v('div.style.cssFloat = "left"')]),t._v(";")]),t._v(" "),n("p",[t._v("2.复合属性必须拆解,组合单词变成小驼峰式写法\n"),n("code",[t._v('div.style.borderWidth = "100px"')]),t._v(";\n"),n("code",[t._v('div.style.backgroundColor = "green"')]),t._v(";")]),t._v(" "),n("p",[t._v("3.属性值必须加字符串")])]),t._v(" "),n("div",{staticClass:"custom-block danger"},[n("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),n("p",[t._v("除了dom.style可以写入,再也没有什么能够写入了,其他方法都是读取操作")])]),t._v(" "),n("h2",{attrs:{id:"查询计算样式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#查询计算样式"}},[t._v("#")]),t._v(" 查询计算样式")]),t._v(" "),n("p",[n("code",[t._v("window.getComputedStyle(div,null)")]),t._v("\n获取到div元素的所有样式属性,获取到的是元素最终展示的样式属性")]),t._v(" "),n("p",[t._v("window.getComputedStyle(div,null).width获取宽度")]),t._v(" "),n("p",[t._v('第一个参数填元素,第二个参数可以获取伪元素的样式(div,"after").获取到的是一个类数组,肉眼可见的元素样式大小,也可以给后面加.width直接返回页面上的样式大小,返回的计算样式的值都是绝对值,没有相对单位IE8级IE8以下不兼容')]),t._v(" "),n("p",[n("code",[t._v("IE8")]),t._v("及以下 "),n("code",[t._v("ele.currentStyle(IE独有的属性)")])]),t._v(" "),n("h2",{attrs:{id:"封装函数-3"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#封装函数-3"}},[t._v("#")]),t._v(" 封装函数")]),t._v(" "),n("p",[t._v("封装兼容性方法getStyle(elem,prop);")]),t._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getStyle")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("elem"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("prop")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("window"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("getComputedStyle"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" window"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getComputedStyle")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("elem"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("prop"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" elem"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("currentStyle"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("prop"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br")])]),n("div",{staticClass:"custom-block warning"},[n("p",{staticClass:"custom-block-title"},[t._v("技巧")]),t._v(" "),n("p",[t._v("如果说要在页面上添加事件修改元素的样式,可以提前把想改的类样式写好,然后点击后改变元素的类名div.className")])])])}),[],!1,null,null,null);s.default=e.exports}}]);