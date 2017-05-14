function MainVisual(width, height) {
	// element
	this.main_visual = document.getElementById("main-visual");
	this.text_panel = document.getElementById("text-panel");
	this.yukino = document.getElementById("yukino");
	this.logo = document.getElementById("logo");
	this.sub_title = document.getElementById("sub-title");
	// size
	this.setSize(width, height);
	// event
	this.handleEvent();
	// data
	this.timer;
	this.state = false;
}

/**
 * イベントのバインド
 */
MainVisual.prototype.handleEvent = function() {
	var self = this;
	window.addEventListener("focus", function() {
		self.render();
	});
	window.addEventListener("blur", function() {
		self.stop();
	});
};

/**
 * サイズをセット
 * @param width: 幅
 * @param height: 高さ
 */
MainVisual.prototype.setSize = function(width, height) {
	this.width = width;
	this.height = height;
	this.main_visual.style.width = width+"px";
	this.main_visual.style.height = height+"px";
};

/**
 * 画面を表示
 */
MainVisual.prototype.view = function() {
	// イラスト
	this.yukino.innerHTML = '<div class="illust img view"></div>';
	// 作品名
	var list = PRELOAD.find(/^img\/main-visual\/[a-z]+\.png$/);
	var ele = '';
	for(var i=0; i < list.length; i++) {
		var l = list[i].replace(/img\/main-visual\//, "");
		l = l.replace(/\.png/, "");
		if(l.match(/(yukino|item){1}/)) continue;
		ele += '<p class="text box-size img '+l+'"></p>';
	}
	this.logo.innerHTML = ele;
};

/**
 * 文字アートの描画
 */
MainVisual.prototype.render = function() {
	var self = this;
	if(this.state) return;
	var num = 0;
	var fail = ['a', 'b'];
	var list = PRELOAD.find(/img\/main-visual\/text\//);
	this.state = true;
	this.timer = setInterval(function() {
		var child = self.text_panel.childNodes;
		var type = Math.floor((Math.random()*2));
		var left = (Math.random()*self.width-100);
		var ele = document.createElement('p');
		ele.className = 'text img fail_'+fail[type];
		ele.style.left = left+"px";
		ele.style.backgroundImage = 'url('+list[num]+')';
		self.text_panel.appendChild(ele);
		if(child.length > 10) 
			self.text_panel.removeChild(child[0]);
		if((list.length-1) <= num) num = 0;
		else num++;
	}, 1000);
};

/**
 * 文字アートの停止
 */
MainVisual.prototype.stop = function() {
	clearInterval(this.timer);
	this.state = false;
};







