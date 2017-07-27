/* jshint asi:true */
//先等图片都加载完成
//再执行布局函数

/**
 * 执行主函数
 * @param  {[type]} function( [description]
 * @return {[type]}           [description]
 */
(function() {
  // demo展示例子
  var demoContent = [{
    demo_link: 'https://github.com/wojustme/mystorm-all',
    img_link: '../../../../public/img/demo/mystorm.jpg',
    code_link: 'https://github.com/wojustme/mystorm-all',
    title: '一个类似storm的框架-demo级别',
    core_tech: 'Java 大数据 storm',
    description: '一个类似storm的简单框架。项目详情见 <a href ="https://github.com/wojustme/mystorm-all">这里</a>。'
  }, {
    demo_link: 'https://github.com/wojustme/simple-frame',
    img_link: '../../../../public/img/demo/json-web.gif',
    code_link: 'https://github.com/wojustme/simple-frame',
    title: '造了一下Spring轮子，有利于阅读Spring源码',
    core_tech: 'Java Spring JsonWeb',
    description: '对上层只提供JSON数据服务。项目详情见 <a href ="https://github.com/wojustme/simple-frame">这里</a>。'
  }];

  contentInit(demoContent) //内容初始化
  waitImgsLoad() //等待图片加载，并执行布局初始化
}());

/**
 * 内容初始化
 * @return {[type]} [description]
 */
function contentInit(content) {
  var htmlStr = ''
  for (var i = 0; i < content.length; i++) {
    htmlStr += '<div class="grid-item">' + '   <a class="a-img" href="' + content[i].demo_link + '">' + '       <img src="' + content[i].img_link + '">' + '   </a>' + '   <h3 class="demo-title">' + '       <a href="' + content[i].demo_link + '">' + content[i].title + '</a>' + '   </h3>' + '   <p>主要技术：' + content[i].core_tech + '</p>' + '   <p>' + content[i].description + '       <a href="' + content[i].code_link + '">源代码 <i class="fa fa-code" aria-hidden="true"></i></a>' + '   </p>' + '</div>'
  }
  var grid = document.querySelector('.grid')
  grid.insertAdjacentHTML('afterbegin', htmlStr)
}

/**
 * 等待图片加载
 * @return {[type]} [description]
 */
function waitImgsLoad() {
  var imgs = document.querySelectorAll('.grid img')
  var totalImgs = imgs.length
  var count = 0
  //console.log(imgs)
  for (var i = 0; i < totalImgs; i++) {
    if (imgs[i].complete) {
      //console.log('complete');
      count++
    } else {
      imgs[i].onload = function() {
        // alert('onload')
        count++
        //console.log('onload' + count)
        if (count == totalImgs) {
          //console.log('onload---bbbbbbbb')
          initGrid()
        }
      }
    }
  }
  if (count == totalImgs) {
    //console.log('---bbbbbbbb')
    initGrid()
  }
}

/**
 * 初始化栅格布局
 * @return {[type]} [description]
 */
function initGrid() {
  var msnry = new Masonry('.grid', {
    // options
    itemSelector: '.grid-item',
    columnWidth: 250,
    isFitWidth: true,
    gutter: 20
  })
}
