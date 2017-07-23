window.onload = function init() {
  // var srcList = [
  //   'http://p2.qhimg.com/t01ed1438874f940dc0.jpg',
	// 	'http://p9.qhimg.com/t01b4ff03b72c7dc6c7.jpg',
	// 	'http://p2.qhimg.com/t01dd90dfbec92074d0.jpg',
	// 	'http://p7.qhimg.com/t01cfec6d87cde457c5.jpg',
	// 	'http://p9.qhimg.com/t01943ced462da67833.jpg',
	// 	'http://p0.qhimg.com/t01943ced462da67833.jpg',
	// 	'http://p6.qhimg.com/t01aa15a7ba7ccb49a7.jpg',
	// 	'http://p8.qhimg.com/t010f1e8badf1134376.jpg',
	// 	'http://p8.qhimg.com/t01cf37ea915533a032.jpg',
	// 	'http://p3.qhimg.com/t0193d8a3963e1803e9.jpg',
	// 	'http://p3.qhimg.com/t01cd6a4d4b4bd4457b.jpg'
  // ];
  var imagenodes = document.querySelectorAll("img");
  srcList = [];
  [].forEach.call(imagenodes, function(ele){
    if(ele.hasAttribute("data-src")) {
      srcList.push(ele.getAttribute("data-src"))
    }
  });
  var preload = new Object();
  preload.image = new Image();
  preload.src = undefined;
  preload.index = 0;
  preload.preload = function() {
    if(preload.index < srcList.length) {
      this.image.src = srcList[preload.index];
    } else {
      [].forEach.call(imagenodes, function(ele){
        if(ele.hasAttribute("data-src")){
          var imgsrc = ele.getAttribute("data-src");
          ele.setAttribute("src", imgsrc);
          ele.removeAttribute("data-src");
        }
      });
      setTimeout(function(){
        document.querySelector(".load-page").style.display = "none";
        $(".zx-ent").addClass("bounceInDown");
        $(".zx-cnt").addClass("bounceInUp");
      }, 1000);
    }
  }
  preload.rerender = function(length) {
    var showlength = parseInt(length/srcList.length*100);
    document.querySelector(".info").innerText = showlength + "%";
    document.querySelector('.loaded').style.width = $(".loading").width()*showlength/100 + "px";
  }
  preload.image.onload = function() {
    preload.index++;
    preload.rerender(preload.index);
    preload.preload();
  }
  preload.preload();
}