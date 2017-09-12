function Preload(resource) {
	this.resource = resource;
}

/**
 * 検索
 * @param query: 正規表現
 * @return list: 検索結果
 */
Preload.prototype.find = function(query) {
	var list = [];
	for(var i=0; i < this.resource.length; i++) 
		if(this.resource[i].match(query)) list.push(this.resource[i]);
	return list;
};

/**
 * サイズをセット
 * @param width: 幅
 * @param height: 高さ
 */
Preload.prototype.load = function() {
	
};