(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{280:function(t,s,n){"use strict";n.r(s);var a=n(19),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"起步"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#起步"}},[t._v("#")]),t._v(" 起步")]),t._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("Vuex")]),t._v(" "),n("p",[t._v("官方解释：Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。")]),t._v(" "),n("p",[t._v("它采用 集中式存储管理 应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。")]),t._v(" "),n("p",[t._v("Vuex 也集成到 Vue 的官方调试工具 devtools extension，提供了诸如零配置的 time-travel 调试、状态快照导入导出等高级调试功能。")])]),t._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("状态管理")]),t._v(" "),n("p",[t._v("可以简单的将其看成把需要多个组件共享的变量全部存储在一个对象里面。")]),t._v(" "),n("p",[t._v("然后，将这个对象放在顶层的Vue实例中，让其他组件可以使用。\n那么，多个组件就可以共享这个对象中的所有变量属性")])]),t._v(" "),n("p",[t._v("什么状态需要我们在多个组件间共享?\n如果做大型开放，一定遇到过多个状态，在多个界面间的共享问题。\n比如用户的登录状态、用户名称、头像、地理位置信息等等。\n比如商品的收藏、购物车中的物品等等。\n这些状态信息，我们都可以放在统一的地方，对它进行保存和管理，而且它们还是响应式的")]),t._v(" "),n("h2",{attrs:{id:"单页面状态管理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#单页面状态管理"}},[t._v("#")]),t._v(" 单页面状态管理")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/zhongyongfeng/blogimg/img/20200321184239.png",alt:""}})]),t._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("单页面状态管理")]),t._v(" "),n("p",[t._v("State：不用多说，就是我们的状态。（姑且可以当做就是data中的属性）")]),t._v(" "),n("p",[t._v("View：视图层，可以针对State的变化，显示不同的信息.")]),t._v(" "),n("p",[t._v("Actions：这里的Actions主要是用户的各种操作：点击、输入等等，会导致状态的改变。")])]),t._v(" "),n("p",[t._v("在项目根目录安装Vuex")]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("npm install vuex --save\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br")])]),n("p",[t._v("在组件文件夹新建一个HeeloVuex.vue,在src文件夹下新建一个store文件夹,新建一个index.js,")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/zhongyongfeng/blogimg/img/20200322095003.png",alt:""}})]),t._v(" "),n("p",[t._v("下载完毕后在main.js下导入vuex")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/zhongyongfeng/blogimg/img/20200322094924.png",alt:""}})]),t._v(" "),n("p",[t._v("在store文件夹下index.js配置Vuex")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/zhongyongfeng/blogimg/img/20200322094852.png",alt:""}})]),t._v(" "),n("p",[t._v("此时的HelloVuex跟App很明显的形成了父子关系,App里面的数据counter,想要在HelloVuex里面用的话,目前还没有什么好的解决方案,只有父传子的通信可以解决,暂且可以不把它们当成父子关系,它们之间是相互独立的房间(兄弟关系),都需要使用counter这个数据(变量)")]),t._v(" "),n("p",[t._v("index.js")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/zhongyongfeng/blogimg/img/20200322100507.png",alt:""}})]),t._v(" "),n("p",[t._v("HeeloVuex组件")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/zhongyongfeng/blogimg/img/20200322100552.png",alt:""}})]),t._v(" "),n("p",[t._v("App组件")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/zhongyongfeng/blogimg/img/20200322100731.png",alt:""}})]),t._v(" "),n("p",[t._v("页面展示效果,点击增加和减少App和HelloVuex的内容都会改变,实现了用Vuex的状态管理管理了相同需要的变量couter")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/zhongyongfeng/blogimg/img/20200322100834.png",alt:""}})]),t._v(" "),n("p",[t._v("这就是最基本的Vuex思想,但是这种方式是不好的,Vue官方推出了一个浏览器插件,Devtoods,该工具可以在浏览器端进行调试,但是如果使用了该方法(只修改State状态),该工具就会起不到作用.(不能同步)")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/zhongyongfeng/blogimg/img/20200322113048.png",alt:""}})]),t._v(" "),n("h2",{attrs:{id:"vuex状态管理图例"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vuex状态管理图例"}},[t._v("#")]),t._v(" Vuex状态管理图例")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/zhongyongfeng/blogimg/img/20200322101313.png",alt:""}})]),t._v(" "),n("p",[t._v("通过Mutations更改State的状态,需要有异步操作的时候需要用到Actions")]),t._v(" "),n("p",[t._v("还是刚才的案例")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/zhongyongfeng/blogimg/img/20200322111735.png",alt:""}})]),t._v(" "),n("p",[n("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/zhongyongfeng/blogimg/img/20200322112109.png",alt:""}})]),t._v(" "),n("p",[n("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/zhongyongfeng/blogimg/img/20200322113009.png",alt:""}})]),t._v(" "),n("h2",{attrs:{id:"vuex核心概念"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vuex核心概念"}},[t._v("#")]),t._v(" Vuex核心概念")]),t._v(" "),n("p",[n("code",[t._v("State")]),t._v(" "),n("code",[t._v("Getters")]),t._v(" "),n("code",[t._v("Mutations")]),t._v(" "),n("code",[t._v("Actions")]),t._v(" "),n("code",[t._v("Module")])]),t._v(" "),n("h3",{attrs:{id:"state单一状态树"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#state单一状态树"}},[t._v("#")]),t._v(" state单一状态树")]),t._v(" "),n("p",[t._v("Vuex提出使用单一状态树, 什么是单一状态树呢？英文名称是Single Source of Truth，也可以翻译成单一数据源。")]),t._v(" "),n("p",[t._v("举个例子:\n在国内我们有很多的信息需要被记录，比如上学时的个人档案，工作后的社保记录，公积金记录，结婚后的婚姻信息，以及其他相关的户口、医疗、文凭、房产记录等等（还有很多信息）。\n这些信息被分散在很多地方进行管理，有一天你需要办某个业务时(比如入户某个城市)，你会发现你需要到各个对应的工作地点去打印、盖章各种资料信息，最后到一个地方提交证明你的信息无误。\n这种保存信息的方案，不仅仅低效，而且不方便管理，以及日后的维护也是一个庞大的工作(需要大量的各个部门的人力来维护，当然国家目前已经在完善我们的这个系统了)。")]),t._v(" "),n("p",[t._v("在Vuex里面,如果你的状态信息是保存到多个Store对象中的，那么之后的管理和维护等等都会变得特别困难。\n所以Vuex也使用了单一状态树来管理应用层级的全部状态。\n单一状态树能够让我们最直接的方式找到某个状态的片段，而且在之后的维护和调试过程中，也可以非常方便的管理和维护。")]),t._v(" "),n("p",[t._v("简而言之,就是把把所有的状态信息都保存在一个store对象里面")]),t._v(" "),n("h3",{attrs:{id:"getters基本使用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#getters基本使用"}},[t._v("#")]),t._v(" Getters基本使用")]),t._v(" "),n("p",[t._v("类似于组件内的getter属性,用于写计算类的方法")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/zhongyongfeng/blogimg/img/20200322140010.png",alt:""}})]),t._v(" "),n("p",[n("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/zhongyongfeng/blogimg/img/20200322140222.png",alt:""}})]),t._v(" "),n("p",[n("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/zhongyongfeng/blogimg/img/20200322140627.png",alt:""}})]),t._v(" "),n("p",[t._v("最终页面展示效果如下")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/zhongyongfeng/blogimg/img/20200322140949.png",alt:""}})]),t._v(" "),n("h3",{attrs:{id:"getters传参"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#getters传参"}},[t._v("#")]),t._v(" Getters传参")]),t._v(" "),n("p",[t._v("现在多了一个需求,就是在筛选过后的数据里,要显示学生的个数,此时就可以再定一个getters的方法,more18stuLength,如果还像上面一样用filter筛选数据的话会显得比较麻烦.所以此时可以传递一个参数")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/zhongyongfeng/blogimg/img/20200322142216.png",alt:""}})]),t._v(" "),n("p",[t._v("使用")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/zhongyongfeng/blogimg/img/20200322142303.png",alt:""}})]),t._v(" "),n("p",[t._v("效果")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/zhongyongfeng/blogimg/img/20200322142353.png",alt:""}})]),t._v(" "),n("p",[t._v("如果还像传参,需要用户来判断筛选年龄大于20的学生")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/zhongyongfeng/blogimg/img/20200322143623.png",alt:""}})]),t._v(" "),n("p",[t._v("使用")]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("<h2>{{$store.getters.moreAgestu(20)}}</h2>\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br")])]),n("p",[t._v("效果")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/zhongyongfeng/blogimg/img/20200322143552.png",alt:""}})]),t._v(" "),n("h3",{attrs:{id:"mutation状态更新"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mutation状态更新"}},[t._v("#")]),t._v(" Mutation状态更新")]),t._v(" "),n("p",[t._v("Vuex的store状态的更新唯一方式：提交Mutation")]),t._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("Mutation主要包括两部分")]),t._v(" "),n("p",[t._v("字符串的事件类型（type）(可以理解为函数名字)")]),t._v(" "),n("p",[t._v("一个回调函数（handler）,该回调函数的第一个参数就是state(可以理解为函数体)")])]),t._v(" "),n("p",[t._v("mutation的定义方式")]),t._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("mutations"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("increment")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("state")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        state"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("counter"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br")])]),n("p",[t._v("通过mutation更新")]),t._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("methods"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("addition")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$store"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("commit")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"increment"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br")])]),n("h3",{attrs:{id:"mutation传递参数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mutation传递参数"}},[t._v("#")]),t._v(" Mutation传递参数")]),t._v(" "),n("p",[t._v("在通过mutation更新数据的时候, 有可能我们希望携带一些额外的参数")]),t._v(" "),n("p",[t._v("参数被称为是mutation的载荷(Payload)")]),t._v(" "),n("p",[t._v("上面的例子说到增加count变量的数量,减少count变量的数量,getter属性的用途,(平方,筛选学生),现在叕叕叕叕增加了一个需求,需要每次点击按钮,count值+5,+10.这个时候就需要在Mutation传递参数了,如果参数不是一个,并且有多个参数传递,通常以对象的形式传递,也就是说Payload是一个对象(需要添加一个学生进来)")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/zhongyongfeng/blogimg/img/20200322154221.png",alt:""}})]),t._v(" "),n("p",[n("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/zhongyongfeng/blogimg/img/20200322154701.png",alt:""}})]),t._v(" "),n("p",[n("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/zhongyongfeng/blogimg/img/20200322162717.png",alt:""}})]),t._v(" "),n("h3",{attrs:{id:"mutation提交风格"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mutation提交风格"}},[t._v("#")]),t._v(" Mutation提交风格")]),t._v(" "),n("p",[t._v("Vue还提供了另外一种风格, 它是一个包含type属性的对象")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/zhongyongfeng/blogimg/img/20200322172251.png",alt:""}})]),t._v(" "),n("p",[n("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/zhongyongfeng/blogimg/img/20200322172144.png",alt:""}})]),t._v(" "),n("p",[t._v("界面显示效果也是一样的")]),t._v(" "),n("h2",{attrs:{id:"mutation响应规则"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mutation响应规则"}},[t._v("#")]),t._v(" Mutation响应规则")]),t._v(" "),n("p",[t._v("Vuex的store中的state是响应式的, 当state中的数据发生改变时, Vue组件会自动更新.")]),t._v(" "),n("p",[t._v("一开始在state里面定义的属性,都会被加入到响应式系统中,而响应式系统会监听属性的变化,当属性发生变化时,会通知所有界面中用到该属性的地方,让界面发生刷新")]),t._v(" "),n("p",[t._v("当给state中的对象添加新属性时, 使用下面的方式:\n方式一: 使用"),n("code",[t._v("Vue.set(obj, 'newProp', 123)")]),t._v("\n方式二: 用新对象给旧对象重新赋值")]),t._v(" "),n("h2",{attrs:{id:"mutation常量类型"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mutation常量类型"}},[t._v("#")]),t._v(" Mutation常量类型")]),t._v(" "),n("p",[t._v("在mutation中, 我们定义了很多事件类型(也就是其中的方法名称).\n当我们的项目增大时, Vuex管理的状态越来越多, 需要更新状态的情况越来越多, 那么意味着Mutation中的方法越来越多.\n方法过多, 使用者需要花费大量的经历去记住这些方法, 甚至是多个文件间来回切换, 查看方法名称, 甚至如果不是复制的时候, 可能还会出现写错的情况.")]),t._v(" "),n("p",[t._v("创建一个文件: mutationstypes.js, 并且在其中定义我们的常量")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/zhongyongfeng/blogimg/img/20200322183441.png",alt:""}})]),t._v(" "),n("p",[n("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/zhongyongfeng/blogimg/img/20200322183318.png",alt:""}})]),t._v(" "),n("p",[n("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/zhongyongfeng/blogimg/img/20200322183216.png",alt:""}})]),t._v(" "),n("h2",{attrs:{id:"mutations同步函数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mutations同步函数"}},[t._v("#")]),t._v(" Mutations同步函数")]),t._v(" "),n("p",[t._v("通常情况下, Vuex要求我们Mutation中的方法必须是同步方法.\n主要的原因是当我们使用devtools时, 可以devtools可以帮助我们捕捉mutation的快照.\n但是如果是异步操作, 那么devtools将不能很好的追踪这个操作什么时候会被完成,比如settimeout,就是异步操作,实际上数据已经更改了,但是devtools的state数据还没更改.")]),t._v(" "),n("h2",{attrs:{id:"actions"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#actions"}},[t._v("#")]),t._v(" actions")]),t._v(" "),n("p",[t._v("我们强调, 不要再Mutation中进行异步操作.\n但是某些情况, 我们确实希望在Vuex中进行一些异步操作, 比如网络请求, 必然是异步的.")]),t._v(" "),n("p",[t._v("Action类似于Mutation, 但是是用来代替Mutation进行异步操作的.")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/zhongyongfeng/blogimg/img/20200322185845.png",alt:""}})]),t._v(" "),n("p",[n("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/zhongyongfeng/blogimg/img/20200322190255.png",alt:""}})]),t._v(" "),n("p",[n("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/zhongyongfeng/blogimg/img/20200322190718.png",alt:""}})]),t._v(" "),n("p",[t._v("context是和store对象具有相同方法和属性的对象.\n也就是说, 我们可以通过context去进行commit相关的操作, 也可以获取context.state等.")]),t._v(" "),n("p",[t._v("在Vue组件中, 如果我们调用action中的方法, 那么就需要使用dispatch")]),t._v(" "),n("h2",{attrs:{id:"module"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#module"}},[t._v("#")]),t._v(" Module")]),t._v(" "),n("p",[t._v("Module是模块的意思, 为什么在Vuex中我们要使用模块呢?")]),t._v(" "),n("p",[t._v("Vue使用单一状态树,那么也意味着很多状态都会交给Vuex来管理.当应用变得非常复杂时,store对象就有可能变得相当臃肿.")]),t._v(" "),n("p",[t._v("为了解决这个问题, Vuex允许我们将store分割成模块(Module), 而每个模块拥有自己的state、mutations、actions、getters等")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/zhongyongfeng/blogimg/img/20200322232926.png",alt:""}})]),t._v(" "),n("p",[n("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/zhongyongfeng/blogimg/img/20200322233637.png",alt:""}})]),t._v(" "),n("p",[n("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/zhongyongfeng/blogimg/img/20200322233843.png",alt:""}})]),t._v(" "),n("h2",{attrs:{id:"项目结构组织"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#项目结构组织"}},[t._v("#")]),t._v(" 项目结构组织")]),t._v(" "),n("p",[t._v("当我们的Vuex帮助我们管理过多的内容时, 好的项目结构可以让我们的代码更加清晰.")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/zhongyongfeng/blogimg/img/20200323000734.png",alt:""}})])])}),[],!1,null,null,null);s.default=e.exports}}]);