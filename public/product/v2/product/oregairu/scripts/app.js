var WIDTH;
var HEIGHT;
if(navigator.userAgent.toLowerCase().search(/(ipad|iphone|ipod|android)+/) === -1) {
	WIDTH = (window.innerWidth < 1000) ? 1000 : window.innerWidth;
	HEIGHT = (window.innerHeight < 600) ? 600 : window.innerHeight;
} else {
	WIDTH = screen.width;
	HEIGHT = screen.height;
}
var PRELOAD = new Preload(resource);

(function() {
	var main_visual = new MainVisual(WIDTH, HEIGHT);
	main_visual.view();
	main_visual.render();

	var infomation = new Infomation();
})();