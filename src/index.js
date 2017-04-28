var m = require('mithril');
require('mithril.bindings')(m);

var app = {
	model: function(name) {
		this.name = m.p(name);
		return this
	},
	view: function(c) {
		var $this=c.state;
		return [
			m.e("input", { name: "name", oninput:this.setInput,value: this.model.name }),
			m.e("div", "Hello " + this.model.name()),
			m.e("button", { onclick: this.setName }, "Set name via model")
		];
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
};
//initialize the
m.mount(document.body, app);