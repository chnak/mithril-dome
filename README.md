# mithril-dome
Mithril 是一个客户端javascript MVC 框架，这是一个mvc加数据视图双向绑定的一个例子，用起来比其它框架更加简单，可以作为小项目开发的另一种思路


# Mithril 是什么？ #
  
Mithril 是一个客户端 javascript MVC 框架，即它是一个工具，使应用程序代码分为数据层(Model)， UI 层(View)，黏合层(Controller)。  
  
Mithril 通过 gzip 压缩后，仅有 12kb 左右,它提供了一个模板引擎与一个虚拟 DOM diff 实现高性能渲染，还提供了其它高级工具，以及支持路由和组件化。  
  
框架的目标是使应用程序代码更容易组织，可读和可维护，帮助你成为一个更好的开发者。  

不像某些框架，Mithril 努力避免将您锁定到某个 web 框架上：您可以尽量少地使用您所需要的框架。  


## Mithril的一些相关学习资源 ##

*   [MithrilJS官网](https://mithril.js.org/)
*	[MithrilJS MVVM双向绑定插件，比自带的好用](https://github.com/jsguy/mithril.bindings)


## 例子学习 ##

*	一个Mithril MVC+MVVM的开发实例[https://github.com/chnak/mithril-dome](https://github.com/chnak/mithril-dome)  
```shell  
>git clone https://github.com/chnak/mithril-dome.git
>cd mithril-dome
>npm install
>npm start
```
  
app.js代码：  

```javascript  
var m = require('mithril');
require('mithril.bindings')(m);

var app = {
	model: function(name) {
		this.name = m.p(name);
		return this
	},
	oninit: function() {
		var self = this;
		self.model = new app.model("world");
		window.model=self.model;
		self.setName = function() {
			self.model.name("Dave");
		}
		self.setInput = function(e){
			self.model.name(e.target.value);
		}
	}
	view: function(c) {
		var $this=c.state;
		return [
			m.e("input", { name: "name", oninput:this.setInput,value: this.model.name }),
			m.e("div", "Hello " + this.model.name()),
			m.e("button", { onclick: this.setName }, "Set name via model")
		];
	}
};
//initialize the
m.mount(document.body, app);
```
  
  然后直接打开项目下面的index.html即可以看到效果。
