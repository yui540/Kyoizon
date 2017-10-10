function Infomation() {
	// element
	this.art_hatiman = document.getElementsByClassName("art-hatiman")[0];
	// style
	this.setStyle();
	// event
	this.handleEvent();
	// data
	this.state = false;
}

/**
 * スタイルシートの設置
 */
Infomation.prototype.setStyle = function() {
	var list = PRELOAD.find(/^img\/infomation\//);
	var str = '<style>';
	for(var i=0; i < list.length; i++) {
		str += '.li_'+i+' {';
		str += 'animation: fade_in 1.5s ease '+(i*0.3)+'s forwards;';
		str += '-webkit-animation: fade_in 1.5s ease '+(i*0.3)+'s forwards;';
		str += '}';
	}
	str += '</style>';
	document.head.innerHTML += str;
};

/**
 * イベントのバインド
 */
Infomation.prototype.handleEvent = function() {
	var self = this;
	window.addEventListener("scroll", function() {
		var y = window.pageYOffset;
		if(y >= 500) self.render();
	}, false);
};

/**
 * 描画
 */
Infomation.prototype.render = function() {
	if(this.state) return;
	var list = PRELOAD.find(/^img\/infomation\//);
	var ele = '';
	for(var i=0; i < list.length; i++) {
		ele += [
			'<div class="art-li li_'+i+'" ',
			'style="background-image: url('+list[i]+')"></div>'
		].join('');
	}
	this.art_hatiman.innerHTML = ele;
	this.state = true;
};









