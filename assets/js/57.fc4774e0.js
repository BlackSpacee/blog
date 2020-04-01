(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{272:function(s,t,a){"use strict";a.r(t);var n=a(19),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"起步"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#起步"}},[s._v("#")]),s._v(" 起步")]),s._v(" "),a("p",[a("code",[s._v("Less")]),s._v(" (Leaner Style Sheets 的缩写) 是一门 CSS 扩展语言，也成为CSS预处理器。做为 CSS 的一种形式的扩展，它并没有减少 CSS 的功能，而是在现有的 CSS 语法上，为CSS加入程序式语言的 特性。")]),s._v(" "),a("p",[s._v("它在 CSS 的语法基础之上，引入了变量，Mixin(混入)，运算以及函数等功能，大大简化了 CSS 的编写，并且 降低了 CSS 的维护成本，就像它的名称所说的那样，Less 可以让我们用更少的代码做更多的事情。")]),s._v(" "),a("p",[a("a",{attrs:{href:"http://lesscss.cn/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Less中文网"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("常见的CSS预处理器:Sass、Less、Stylus")]),s._v(" "),a("p",[s._v("Less 是一门 CSS 预处理语言，它扩展了CSS的动态特性。")]),s._v(" "),a("h2",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("npm install -g less\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("检查是否安装成功，在终端使用命令“ "),a("code",[s._v("lessc -v")]),s._v(" ”查看版本即可")]),s._v(" "),a("h2",{attrs:{id:"使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[s._v("#")]),s._v(" 使用")]),s._v(" "),a("p",[s._v("我们首先新建一个后缀名为less的文件,可以在这个less文件里面书写less语句")]),s._v(" "),a("h3",{attrs:{id:"less变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#less变量"}},[s._v("#")]),s._v(" less变量")]),s._v(" "),a("p",[s._v("变量是指没有固定的值，可以改变的。因为我们CSS中的一些颜色和数值等经常使用。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("@变量名:值;\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("命名规范:必须有@为前缀,不能包含特殊字符,不能以数字开头,大小写敏感")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/zhongyongfeng/blogimg/img/20200324192351.png",alt:""}})]),s._v(" "),a("p",[s._v("一次编译,后期如果想改变整个页面全局的css属性,就没必要去css文件里面一个个修改了,只需要修改less文件里面属性的值就可以了.")]),s._v(" "),a("h3",{attrs:{id:"less编译"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#less编译"}},[s._v("#")]),s._v(" less编译")]),s._v(" "),a("p",[s._v("vocode Less 插件:"),a("code",[s._v("Easy LESS")])]),s._v(" "),a("p",[s._v("Easy LESS 插件用来把less文件"),a("code",[s._v("编译为 css文件")])]),s._v(" "),a("p",[s._v("安装完毕插件，重新加载下 vscode。 只要保存一下Less文件，会自动生成 CSS文件。然后引入就行")]),s._v(" "),a("h3",{attrs:{id:"less嵌套"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#less嵌套"}},[s._v("#")]),s._v(" less嵌套")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("#header")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".logo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 300px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("编译后")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("#header .logo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" \n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 300px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("如果遇见 (交集|伪类|伪元素选择器)")]),s._v(" "),a("p",[s._v("内层选择器的前面没有 & 符号，则它被解析为父选择器的后代;")]),s._v(" "),a("p",[s._v("如果有 & 符号，它就被解析为父元素自身或父元素的伪类。")]),s._v(" "),a("p",[s._v("写法")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("a")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" \n    "),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("&:hover")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("red"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("编译后")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("a:hover")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("red"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("伪元素道理相同")]),s._v(" "),a("h3",{attrs:{id:"less运算"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#less运算"}},[s._v("#")]),s._v(" less运算")]),s._v(" "),a("p",[s._v("任何数字、颜色或者变量都可以参与运算。就是Less提供了加(+)、减(-)、乘(*)、除(/)算术运算。")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*Less 里面写*/")]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[s._v("@witdh")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 10px + 5"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("div")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("border")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[s._v("@witdh")]),s._v(" solid red"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*生成的css*/")]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("div")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("border")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 15px solid red"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*Less 甚至还可以这样 */")]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[s._v("@width")]),s._v(" + 5"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" * 2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),a("p",[s._v("乘号(*)和除号(/)的写法")]),s._v(" "),a("p",[a("code",[s._v("运算符中间左右有个空格隔开")]),s._v(" 1px + 5")]),s._v(" "),a("p",[s._v("对于两个不同的单位的值之间的运算，运算结果的值取第一个值的单位")]),s._v(" "),a("p",[s._v("如果两个值之间只有一个值有单位，则运算结果就取该单位")])])])}),[],!1,null,null,null);t.default=e.exports}}]);