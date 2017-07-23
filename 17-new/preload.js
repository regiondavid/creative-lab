window.onload = function init() {
  // var srcList = [
  //   "http://www.pc426.com/data/attachment/forum/201705/02/002700zvf7tmuz778u71v8.jpg",
  //   "http://www.pc426.com/data/attachment/forum/201705/02/003100yxevdonzfdoeol3p.jpg",
  //   "http://www.pc426.com/data/attachment/forum/201705/02/003723j94awpvv0ssxfssm.jpg",
  //   "http://www.pc426.com/data/attachment/forum/201705/02/003724rhqnzuooyjwfuwhy.jpg",
  //   "http://www.pc426.com/data/attachment/forum/201705/02/005445i022dsql0q5k0wwk.jpg",
  //   "http://www.pc426.com/data/attachment/forum/201705/02/004711wvzs33yop5c5lwrl.jpg",
  //   "http://www.pc426.com/data/attachment/forum/201705/02/004637ghhmvff0gs00vmlv.jpg"
  // ];
  var srcList = [
    'http://p2.qhimg.com/t01ed1438874f940dc0.jpg',
		'http://p9.qhimg.com/t01b4ff03b72c7dc6c7.jpg',
		'http://p2.qhimg.com/t01dd90dfbec92074d0.jpg',
		'http://p7.qhimg.com/t01cfec6d87cde457c5.jpg',
		'http://p9.qhimg.com/t01943ced462da67833.jpg',
		'http://p0.qhimg.com/t01943ced462da67833.jpg',
		'http://p6.qhimg.com/t01aa15a7ba7ccb49a7.jpg',
		'http://p8.qhimg.com/t010f1e8badf1134376.jpg',
		'http://p8.qhimg.com/t01cf37ea915533a032.jpg',
		'http://p3.qhimg.com/t0193d8a3963e1803e9.jpg',
		'http://p3.qhimg.com/t01cd6a4d4b4bd4457b.jpg'
  ];
  var preload = new Object();
  preload.image = new Image();
  preload.src = undefined;
  preload.index = 0;
  preload.preload = function() {
    if(preload.index < srcList.length) {
      // setTimeout(function(){this.image.src = srcList[preload.index];}.bind(preload), 2000);
      this.image.src = srcList[preload.index];
    } else {
      [].forEach.call(document.querySelectorAll("img"), function(ele, index) {
        ele.src = srcList[index];
      });
    }
  }
  preload.rerender = function(length) {
    var showlength = parseInt(length/srcList.length*100);
    document.querySelector("span").innerText = showlength + "%";
    document.querySelector('.info').style.width = 300*showlength/100 + "px";
  }
  preload.image.onload = function() {
    preload.index++;
    console.log(preload.index);
    preload.rerender(preload.index);
    preload.preload();
  }
  preload.preload();
}